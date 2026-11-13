import test from 'node:test';
import assert from 'node:assert/strict';
import { readProgress, saveScore } from '../src/lib/storage.js';
test('récords: conserva el mayor y descarta valores o destinos inválidos', () => {
 let raw = '{}';
 globalThis.localStorage = { getItem: () => raw, setItem: (_, value) => { raw = value; } };
 assert.equal(saveScore('city', 800), true);
 saveScore('city', 700);
 assert.deepEqual(readProgress(), { city: 800 });
 assert.equal(saveScore('invalid', 100), false);
 assert.equal(saveScore('city', Infinity), false);
 assert.equal(saveScore('city', 99999), false);
 raw = '{"city":99999,"beach":900,"mountain":-1}';
 assert.deepEqual(readProgress(), { beach: 900 });
 raw = 'invalid json';
 assert.deepEqual(readProgress(), {});
});
test('almacenamiento bloqueado: leer y guardar no interrumpen el juego', () => {
 globalThis.localStorage = { getItem: () => { throw Error('blocked'); }, setItem: () => { throw Error('blocked'); } };
 assert.deepEqual(readProgress(), {});
 assert.equal(saveScore('city', 800), false);
 delete globalThis.localStorage;
});
