import { useState } from 'react';
import Hero from '../components/Hero';
import TripSelector from '../components/TripSelector';
import GameButton from '../components/GameButton';
import { readProgress } from '../lib/storage';
export default function Home() {
 const [selectedTrip, setSelectedTrip] = useState('city');
 const [progress] = useState(readProgress);
 return <main id="main" tabIndex={-1}><Hero /><TripSelector selectedTrip={selectedTrip} setSelectedTrip={setSelectedTrip} progress={progress}/><GameButton selectedTrip={selectedTrip}/><p className="center muted">Empezá por City Break o practicá el destino que quieras. Tus mejores puntajes quedan en este navegador.</p></main>;
}
