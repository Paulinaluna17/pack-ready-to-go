# Cambios de esta revisión — 13/11/2026

- Se conservó el juego existente: tres destinos, identidad visual, mecánica, navegación y recursos.
- Game.jsx y App.css: lista desplegable visible en móvil antes del inventario; mensaje de selección/capacidad junto a los objetos; aviso de que salir o recargar reinicia el intento.
- storage.js: descarta puntajes no enteros, negativos o mayores al máximo posible; rechaza destinos inválidos al guardar.
- Result.jsx: verifica que datos numéricos, listas e identificadores del resultado sean válidos antes de dibujar; si faltan vuelve al inicio.
- tests/storage.test.js: dos pruebas para persistencia y almacenamiento bloqueado. El script test ejecuta todos los archivos .test.js.
- package.json, package-lock.json y .nvmrc: Node 24.x como entorno reproducible. Sin nuevas dependencias.
- .gitignore: excluye .env y configuración local de Vercel.
- Documentación: se sustituyeron afirmaciones heredadas de pruebas por resultados de esta sesión; se añadieron instrucciones de publicación, Instagram y pendientes.

No se publicaron archivos ni se modificaron cuentas externas. No se hizo prueba con usuario. No se inventó un historial previo de IA. El ZIP final es una copia; el adjunto original se conserva.
