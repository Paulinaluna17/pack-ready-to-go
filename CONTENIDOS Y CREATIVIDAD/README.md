# PACK — Ready to Go

Videojuego web de equipaje desarrollado con React y JavaScript para Contenidos y Creatividad III, Universidad de Palermo. Autora: Paulina Luna. Marca: Pack.

## Concepto

Una experiencia promocional breve: preparar el equipaje para tres viajes, eligiendo exactamente los objetos solicitados dentro de un tiempo y una capacidad limitados. La lista representa un desafío simplificado, no recomendaciones reales de equipaje.

Público propuesto para esta versión: personas que disfrutan viajar y buscan juegos casuales breves. Confirmar su correspondencia con el público presentado en el Momento 2; ese documento no se adjuntó.

## Ejecutar

Abrir la carpeta que contiene este archivo y `package.json`. Usar una versión de Node compatible con Vite 8 (se verificó con Node 24.22.1).

```bash
npm ci
npm run dev
```

Abrir la dirección que muestra la terminal y mantenerla abierta. Si todavía no hay dependencias instaladas, `npm ci` las reconstruye usando `package-lock.json`.

```bash
npm test
npm run lint
npm run build
npm run preview
```

`npm run build` genera `dist/`. El ZIP no incluye `node_modules`, porque es reconstruible y las dependencias originales incluían binarios de macOS.

## Cómo jugar

1. Elegir un viaje o empezar el recorrido por City Break.
2. Leer el plan y pulsar «Empezar a guardar» para iniciar el reloj.
3. Tocar un objeto para guardarlo; volver a tocarlo o quitarlo desde la valija para retirarlo.
4. La capacidad impide agregar objetos que no entran. No hay objetos duplicados.
5. Cerrar la valija antes de que el tiempo termine. Se gana solamente con todos los objetos pedidos y sin extras. Un cierre incorrecto o tiempo agotado termina el intento.
6. Reintentar, avanzar al próximo destino o volver al inicio.

| Nivel | Tiempo | Capacidad | Necesarios / opciones |
|---|---:|---:|---:|
| City Break | 60 s | 10 u. | 4 / 8 |
| Beach Escape | 50 s | 12 u. | 6 / 12 |
| Mountain Trip | 40 s | 16 u. | 7 / 16 |

Las unidades representan espacio abstracto, no kilos ni litros. La progresión es una propuesta de diseño: la consigna no exige un número de niveles. Se mantienen los tres destinos del proyecto original.

Puntaje por victoria: `objetos necesarios × 100 + segundos restantes × 10`. Derrota: 0. Los mejores puntajes por destino se guardan en localStorage de ese navegador. No existe ranking global, cuenta de usuario ni sincronización. La pausa detiene el reloj y oculta los objetos. Recargar o salir abandona el intento; una nueva entrada comienza con una valija vacía. Completar los tres destinos muestra el cierre del itinerario.

## Organización y explicación para la defensa

- `src/App.jsx`: React Router conecta inicio, instrucciones, juego, resultados y ruta inexistente. Header y Footer se comparten entre pantallas.
- `src/pages/Home.jsx`: selección de destino mediante useState y lectura de mejores marcas.
- `src/pages/Game.jsx`: estado de objetos, tiempo y fase. Eventos agregan/quitan objetos; useEffect instala y limpia el intervalo. Una fecha límite evita depender de la frecuencia de actualización visual. useRef conserva la fecha límite y evita procesar dos resultados del mismo intento.
- `src/pages/Result.jsx`: resultado del intento, faltantes/extras, navegación y pasaporte de destinos.
- `src/components/PackingItem.jsx`: recibe nombre, emoji, tamaño y selección como props; devuelve un botón que avisa al padre mediante onSelect.
- `src/data/trips.js`: datos de objetos y niveles; modificar acá permite ajustar el balance sin duplicar pantallas.
- `src/lib/game.js`: funciones de capacidad, selección y evaluación, separadas para probarlas.
- `src/lib/storage.js`: lee y guarda récords. Tolera almacenamiento bloqueado o datos inválidos sin bloquear el juego.
- `src/App.css`: conserva crema, coral, amarillo, celeste y verde; bordes oscuros y tarjetas redondeadas. Suma una valija construida con CSS, paneles translúcidos, estados de foco y adaptación móvil.

Ejemplo para explicar: «Al tocar un objeto se ejecuta un evento. La función comprueba si entra y actualiza el estado del equipaje. React vuelve a dibujar las tarjetas y la valija con ese nuevo estado. Cuando cierro la valija, compara la selección con los datos del destino y navega al resultado».

## Proceso con IA

Esta revisión del 13/11/2026 parte del ZIP adjunto, que ya contenía los tres niveles, reloj, capacidad, navegación y documentación. No se atribuyen esas implementaciones a esta sesión ni se certifican pruebas anteriores.

La IA revisó el código y la consigna, incorporó una lista desplegable para celular, acercó el mensaje de selección a los objetos, validó puntajes persistidos y datos de resultado, agregó dos pruebas de almacenamiento y preparó las guías de entrega. Se conservaron la identidad y las mecánicas existentes. Ver `docs/CAMBIOS.md` y `docs/VERIFICACION.md` para evidencia y límites. La autora debe revisar el juego y conservar los prompts que quiera mostrar como evidencia del proceso.

## Entrega y publicación

Empezar por `LEEME_PRIMERO.md`. Consultar `docs/GUIA_PUBLICACION.md`, `docs/MOMENTO_3.md`, `docs/USABILIDAD.md` y `docs/PRESENTACION.md`.

El proyecto contiene configuración para Vercel y rutas SPA en `vercel.json`. En Vercel seleccionar Vite, comando `npm run build` y salida `dist`. Importar el repositorio actualizado y revisar la URL real en otro dispositivo, en incógnito y jugando una partida completa. La existencia de esta configuración no significa que el proyecto ya esté publicado.

El README recibido mencionaba https://github.com/Paulinaluna17/pack-ready-to-go. Su existencia, titularidad y estado actual no se verificaron en esta sesión: confirmar antes de usarlo.
URL pública de esta versión: pendiente.

La consigna menciona Vercel en el punto 5 y admite Vercel o GitHub Pages en la forma de entrega. Esta versión se prepara para Vercel. Entregar en Blackboard el enlace público y el enlace de GitHub; no entregar localhost como URL pública.

## Recursos visuales

Valija y decoración dibujadas con CSS. Los íconos usan Noto Emoji, incluida localmente bajo SIL Open Font License; licencia en `public/fonts/LICENSE-Noto-Emoji.txt`. No requiere conexión a un proveedor de fuentes. Los recursos de plantilla originales no utilizados se conservan para evitar borrar material del proyecto.
