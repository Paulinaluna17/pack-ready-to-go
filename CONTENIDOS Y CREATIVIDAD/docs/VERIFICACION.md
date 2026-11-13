# Verificación de esta versión — 13/11/2026

## Ejecutado

Entorno: Node 24.22.1, npm 11.9.0, Linux.

| Comprobación | Resultado |
|---|---|
| npm ci | Instaló 28 paquetes desde el lockfile |
| npm install --package-lock-only | Actualizó metadatos de Node sin cambiar las dependencias declaradas |
| npm test | 6 pruebas aprobadas, 0 fallidas |
| npm run lint | Finalizó correctamente |
| npm run build | Correcto; 38 módulos; genera dist |
| npm run preview -- --host 127.0.0.1 | Servidor iniciado en puerto 4173 |
| Chromium con Playwright | No pudo iniciar: socket() Operation not permitted |
| Vite con --host 0.0.0.0 | Falló por restricción del entorno al consultar interfaces de red |

El aviso npm sobre http-proxy pertenece al entorno de ejecución. No se cambió el proyecto para ocultarlo.

Las pruebas unitarias ejecutan: solución de cada destino, capacidad máxima, puntaje, derrota a cero segundos, faltantes, extras, selección y retirada sin duplicados, rechazo de objetos inválidos, récord que no disminuye, datos corruptos, puntajes imposibles y almacenamiento bloqueado.

## Revisado en código, no confirmado en navegador en esta sesión

Rutas React Router, inicio/instrucciones/juego/resultado, navegación de reintento y próximo destino, reloj con fecha límite, pausa, limpieza del intervalo, prevención de doble resultado, vista final de itinerario, CSS responsive y foco visible. Los avisos de selección ahora están junto al inventario y la lista móvil se despliega antes de los objetos.

No se certifica el recorrido visual, ausencia de errores de consola del navegador, interacción táctil, Safari/Firefox ni teléfono físico. El documento recibido mencionaba otras pruebas: esas afirmaciones no se reutilizan como evidencia de esta versión.

## Comprobación manual requerida

1. Inicio → Cómo jugar → City Break. Antes de comenzar, el reloj no avanza.
2. Iniciar, guardar y quitar objetos. Con la valija llena, intentar agregar uno más: debe rechazarlo y avisar.
3. Pausar varios segundos: el reloj se mantiene. Reanudar y cerrar con la lista exacta: debe ganar.
4. Avanzar a playa y montaña. Completar los tres: debe mostrar el itinerario completo.
5. Cerrar una valija incompleta: debe perder y explicar faltantes. Reintentar: tiempo y equipaje se reinician.
6. Dejar llegar el reloj a cero: derrota. Salir de la partida: no deben quedar relojes actuando sobre otras pantallas.
7. Volver al inicio y recargar: conserva récords. Recargar una partida abandona ese intento.
8. Abrir /result sin resultado, /game y /game/invalid: vuelve al inicio. Una ruta desconocida ofrece volver.
9. En celular, abrir la lista junto al inventario, seleccionar y quitar, revisar que no haya desplazamiento horizontal y cerrar la valija.
10. Tab y Enter deben permitir recorrer enlaces y botones. Revisar consola y carga de fuentes.

Después de desplegar, repetir desde la URL pública y otro dispositivo. Registrar fecha, URL y resultados en USABILIDAD.md. Estas comprobaciones pendientes no reemplazan la prueba con una persona externa.
