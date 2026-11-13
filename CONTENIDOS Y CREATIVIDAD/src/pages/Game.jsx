import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import PackingItem from '../components/PackingItem';
import { trips, items, itemById } from '../data/trips';
import { usedSpace, togglePacked, evaluate } from '../lib/game';
import { saveScore } from '../lib/storage';

export default function Game() {
 const { tripId } = useParams();
 const location = useLocation();
 const trip = trips.find(t => t.id === (tripId || location.state?.trip));
 if (!trip) return <Navigate to="/" replace />;
 return <PackingGame trip={trip} />;
}
function PackingGame({ trip }) {
 const navigate = useNavigate();
 const [packed, setPacked] = useState([]);
 const [phase, setPhase] = useState('ready');
 const [seconds, setSeconds] = useState(trip.time);
 const [message, setMessage] = useState('');
 const deadline = useRef(0);
 const remaining = useRef(trip.time * 1000);
 const finished = useRef(false);
 const packedRef = useRef([]);
 const used = usedSpace(packed);
 const level = trips.indexOf(trip) + 1;

 const finish = useCallback((reason, timeLeft) => {
   if (finished.current) return;
   finished.current = true;
   const outcome = evaluate(trip, packedRef.current, timeLeft);
   const saved = outcome.won ? saveScore(trip.id, outcome.score) : true;
   navigate('/result', { replace: true, state: { trip: trip.id, ...outcome, seconds: timeLeft, reason, saved } });
 }, [trip, navigate]);
 // El reloj usa una fecha límite: no depende de cuán seguido dibuje el navegador.
 useEffect(() => {
   if (phase !== 'playing') return;
   function tick() {
     const left = Math.max(0, deadline.current - Date.now());
     remaining.current = left;
     setSeconds(Math.ceil(left / 1000));
     if (left <= 0) finish('timeout', 0);
   }
   const timer = setInterval(tick, 100);
   tick();
   return () => clearInterval(timer);
 }, [phase, finish]);
 function start() {
   deadline.current = Date.now() + remaining.current;
   setPhase('playing');
 }
 function pause() {
   const left = Math.max(0, deadline.current - Date.now());
   if (!left) { finish('timeout', 0); return; }
   remaining.current = left;
   setSeconds(Math.ceil(left / 1000));
   setPhase('paused');
 }
 function handleSelect(id) {
   if (phase !== 'playing' || finished.current) return;
   // Solo se ejecuta desde onClick; no durante el renderizado.
   // oxlint-disable-next-line react/purity
   if (Date.now() >= deadline.current) { finish('timeout', 0); return; }
   const next = togglePacked(trip, packedRef.current, id);
   if (next === packedRef.current) { setMessage('No entra: quitá un objeto para hacer lugar.'); return; }
   packedRef.current = next;
   setPacked(next);
   setMessage(`${itemById[id].name}: ${next.includes(id) ? 'guardado en la valija' : 'retirado de la valija'}.`);
 }
 function submit() {
   if (phase !== 'playing') return;
   const left = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000));
   finish(left ? 'submitted' : 'timeout', left);
 }
 return <main id="main" tabIndex={-1} className="game-page" style={{'--trip-color':trip.color}}>
   <div className="game-top"><Link to="/">← Destinos</Link><span>NIVEL 0{level} / 03</span></div>
   <div className="game-heading"><div><p className="eyebrow">{trip.days} DÍAS · {trip.subtitle.toUpperCase()}</p><h1>{trip.name}<span aria-hidden="true"> {trip.emoji}</span></h1></div><div className={`timer ${seconds <= 10 ? 'urgent' : ''}`} role="timer" aria-label={`Tiempo restante: ${seconds} segundos`}><small>TIEMPO</small><strong>{String(Math.floor(seconds/60)).padStart(2,'0')}:{String(seconds%60).padStart(2,'0')}</strong></div></div>
   {phase === 'ready' ? <section className="brief glass-panel"><p className="eyebrow">TU PLAN DE VIAJE</p><h2>{trip.brief}</h2><p>Equipaje solicitado: <strong>{trip.required.map(id => itemById[id].name).join(', ')}.</strong></p><p>Tenés {trip.time} segundos y {trip.capacity} unidades de espacio. El reloj todavía no empezó.</p><button className="primary-button" onClick={start}>EMPEZAR A GUARDAR ↗</button></section> : phase === 'paused' ? <section className="brief glass-panel"><p className="eyebrow">HACEMOS UNA ESCALA</p><h2>Tu viaje está en pausa.</h2><p>El tiempo y tu equipaje se mantienen.</p><button className="primary-button" onClick={start}>SEGUIR PREPARANDO ↗</button></section> : <>
   <div className="game-layout"><section className="inventory"><div className="inventory-heading"><h2>¿Qué te llevás?</h2><button className="text-button" onClick={pause}>Ⅱ Pausar</button></div><p className="muted">Tocá para guardar o quitar. Cada espacio cuenta.</p><details className="mobile-checklist"><summary>Consultar lista de viaje</summary><p>{trip.required.map(id => itemById[id].name).join(', ')}.</p></details><p className="selection-feedback" role="status">{message || 'Elegí los objetos de tu lista.'}</p><div className="packing-items">{items.slice(0,trip.count).map(item => <PackingItem key={item.id} {...item} selected={packed.includes(item.id)} onSelect={() => handleSelect(item.id)} />)}</div></section>
   <aside><div className="suitcase"><div className="suitcase-handle" aria-hidden="true"/><div className="case-heading"><strong>PACK</strong><span>CHECK-IN / 0{level}</span></div><div className="space-label"><span>Espacio ocupado</span><strong>{used}/{trip.capacity} u.</strong></div><progress value={used} max={trip.capacity} aria-label="Capacidad de la valija"/><div className="bag-contents">{packed.length ? packed.map(id => <button key={id} onClick={() => handleSelect(id)} aria-label={`Quitar ${itemById[id].name}`}><span aria-hidden="true">{itemById[id].emoji}</span><span>{itemById[id].name}</span><span>×</span></button>) : <p>Tu valija está vacía.<br />El viaje empieza con una elección.</p>}</div><p className="small">{packed.length} {packed.length === 1 ? 'objeto guardado' : 'objetos guardados'}</p><button className="check-bag-button" onClick={submit}>CERRAR VALIJA ↗</button></div><div className="packing-list glass-panel"><h3>Tu lista de viaje</h3><ul>{trip.required.map(id => <li key={id}><span aria-hidden="true">{packed.includes(id) ? '✓' : '○'}</span> {itemById[id].name}</li>)}</ul><p className="small">Llevá solamente lo solicitado. Los extras también ocupan espacio.</p></div></aside></div>
   <p className="feedback">Revisá la lista antes de cerrar. Salir o recargar reinicia el intento.</p></>}
 </main>;
}
