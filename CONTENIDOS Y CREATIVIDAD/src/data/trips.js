// Cada unidad representa espacio de juego, no litros ni kilos reales.
export const items = [
  { id: 'shirt', name: 'Remera', emoji: '👕', size: 2 },
  { id: 'shorts', name: 'Short', emoji: '🩳', size: 2 },
  { id: 'jacket', name: 'Campera', emoji: '🧥', size: 3 },
  { id: 'sandals', name: 'Ojotas', emoji: '🩴', size: 2 },
  { id: 'sunscreen', name: 'Protector solar', emoji: '🧴', size: 1 },
  { id: 'boots', name: 'Botas de trekking', emoji: '🥾', size: 4 },
  { id: 'umbrella', name: 'Paraguas', emoji: '☂️', size: 2 },
  { id: 'camera', name: 'Cámara', emoji: '📷', size: 3 },
  { id: 'swimsuit', name: 'Traje de baño', emoji: '🩱', size: 2 },
  { id: 'towel', name: 'Toalla', emoji: '🏖️', size: 3 },
  { id: 'book', name: 'Libro', emoji: '📚', size: 2 },
  { id: 'dryer', name: 'Secador', emoji: '💨', size: 4 },
  { id: 'bottle', name: 'Botella', emoji: '💧', size: 2 },
  { id: 'firstaid', name: 'Botiquín', emoji: '🩹', size: 2 },
  { id: 'torch', name: 'Linterna', emoji: '🔦', size: 2 },
  { id: 'ball', name: 'Pelota', emoji: '⚽', size: 4 },
];

export const trips = [
  { id: 'city', name: 'City Break', subtitle: 'Una escapada urbana', days: 2, emoji: '🏙️', time: 60, capacity: 10, count: 8,
    brief: 'Dos días recorriendo la ciudad. El pronóstico anuncia lluvia y una tarde fresca. Tu plan incluye sacar fotos.',
    required: ['shirt', 'jacket', 'umbrella', 'camera'], color: '#ffd166' },
  { id: 'beach', name: 'Beach Escape', subtitle: 'Modo playa, activado', days: 5, emoji: '🌴', time: 50, capacity: 12, count: 12,
    brief: 'Cinco días de sol y playa. Llevá ropa liviana, lo necesario para nadar, secarte y protegerte del sol.',
    required: ['shirt', 'shorts', 'sandals', 'sunscreen', 'swimsuit', 'towel'], color: '#7bdff2' },
  { id: 'mountain', name: 'Mountain Trip', subtitle: 'La aventura sube de nivel', days: 7, emoji: '⛰️', time: 40, capacity: 16, count: 16,
    brief: 'Siete días de montaña con caminatas, frío y tramos con poca luz. Priorizá abrigo, hidratación, protección y seguridad.',
    required: ['shirt', 'jacket', 'boots', 'sunscreen', 'bottle', 'firstaid', 'torch'], color: '#b9fbc0' },
];

export const itemById = Object.fromEntries(items.map(item => [item.id, item]));
