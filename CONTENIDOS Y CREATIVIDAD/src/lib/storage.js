import { trips } from '../data/trips.js';
const KEY = 'pack-ready-to-go-v1';
export function readProgress() {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) || '{}');
    return Object.fromEntries(trips.filter(t => Number.isFinite(value?.[t.id]) && Number.isInteger(value[t.id]) && value[t.id] > 0 && value[t.id] <= t.required.length * 100 + t.time * 10).map(t => [t.id, value[t.id]]));
  } catch { return {}; }
}
export function saveScore(trip, score) {
  const destination = trips.find(t => t.id === trip);
  if (!destination || !Number.isInteger(score) || score <= 0 || score > destination.required.length * 100 + destination.time * 10) return false;
  const progress = readProgress();
  progress[trip] = Math.max(progress[trip] || 0, score);
  try { localStorage.setItem(KEY, JSON.stringify(progress)); return true; }
  catch { return false; }
}
