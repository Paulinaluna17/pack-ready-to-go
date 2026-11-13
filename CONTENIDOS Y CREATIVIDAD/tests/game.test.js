import test from 'node:test';
import assert from 'node:assert/strict';
import { trips, items } from '../src/data/trips.js';
import { togglePacked, usedSpace, evaluate } from '../src/lib/game.js';
for (const trip of trips) {
 test(`${trip.name}: solución posible, capacidad, victoria y puntaje`, () => {
   let packed = [];
   for (const id of trip.required) packed = togglePacked(trip, packed, id);
   assert.equal(usedSpace(packed), trip.capacity);
   assert.equal(evaluate(trip, packed, 20).won, true);
   assert.equal(evaluate(trip, packed, 20).score, trip.required.length*100 + 200);
   assert.equal(evaluate(trip, packed, 0).won, false);
   assert.equal(evaluate(trip, packed.slice(1), 20).won, false);
   const extra = items.slice(0,trip.count).find(item => !packed.includes(item.id));
   assert.deepEqual(togglePacked(trip, packed, extra.id), packed);
   assert.equal(evaluate(trip, [...packed,extra.id], 20).won, false);
   const removed = togglePacked(trip, packed, packed[0]);
   assert.equal(removed.length, packed.length-1);
   assert.deepEqual(togglePacked(trip, packed, 'invalid'), packed);
 });
}
test('seleccionar dos veces quita el objeto, sin duplicarlo', () => {
 const trip = trips[0];
 const one = togglePacked(trip, [], 'shirt');
 assert.deepEqual(one,['shirt']);
 assert.deepEqual(togglePacked(trip, one, 'shirt'),[]);
});
