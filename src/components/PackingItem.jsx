function PackingItem({ emoji, name, selected, onSelect }) {
  return (
    <button
      className={`packing-item ${selected ? "packing-item-selected" : ""}`}
      onClick={onSelect}
    >
      <span className="packing-emoji">{emoji}</span>
      <span className="packing-name">{name}</span>

      {selected && (
        <span className="packing-check">✓ PACKED</span>
      )}
    </button>
  );
}

export default PackingItem;