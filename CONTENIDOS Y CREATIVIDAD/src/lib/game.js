import { itemById, items } from '../data/trips.js';
export function usedSpace(ids) {
  return ids.reduce((total, id) => total + (itemById[id]?.size || 0), 0);
}
export function togglePacked(trip, packed, id) {
  if (!items.slice(0, trip.count).some(item => item.id === id)) return packed;
  if (packed.includes(id)) return packed.filter(value => value !== id);
  if (usedSpace(packed) + itemById[id].size > trip.capacity) return packed;
  return [...packed, id];
}
export function evaluate(trip, packed, seconds) {
  const missing = trip.required.filter(id => !packed.includes(id));
  const extras = packed.filter(id => !trip.required.includes(id));
  const won = seconds > 0 && missing.length === 0 && extras.length === 0 && usedSpace(packed) <= trip.capacity;
  return { won, missing, extras, score: won ? trip.required.length * 100 + Math.max(0, Math.ceil(seconds)) * 10 : 0 };
}
