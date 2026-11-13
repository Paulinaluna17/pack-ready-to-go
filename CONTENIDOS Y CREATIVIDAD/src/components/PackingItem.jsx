export default function PackingItem({ emoji, name, size, selected, onSelect, disabled }) {
 return <button type="button" className={`packing-item ${selected ? 'packing-item-selected' : ''}`} onClick={onSelect} disabled={disabled} aria-pressed={selected} aria-label={`${name}, ${size} unidades${selected ? ', guardado' : ''}`}><span className="item-size">{size} u.</span><span className="packing-emoji" aria-hidden="true">{emoji}</span><span className="packing-name">{name}</span><span className="packing-check">{selected ? '✓ GUARDADO · QUITAR' : '+ AGREGAR'}</span></button>;
}
