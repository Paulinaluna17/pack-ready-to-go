# Ejecutar, subir y publicar

## 1. Herramientas

| Herramienta | Para qué sirve |
|---|---|
| VS Code o Cursor | Abrir y editar la carpeta; usar la terminal |
| Node.js 24.x con npm | Instalar dependencias y ejecutar Vite |
| Git | Guardar versiones y subirlas a GitHub |
| GitHub | Alojar el código y su historial |
| Vercel | Publicar el juego con una URL accesible desde otros dispositivos |

No necesitás instalar React por separado: npm ci instala lo declarado en package.json. Descargas oficiales: https://nodejs.org/ y https://code.visualstudio.com/. GitHub Desktop es una alternativa visual a los comandos Git.

## 2. Ejecución local

Abrí la carpeta pack-ready-to-go descomprimida. En VS Code/Cursor: Archivo → Abrir carpeta; después Terminal → Nueva terminal. En Mac podés escribir `pwd` y `ls` para comprobar que allí está package.json.

Ejecutá de a uno:

```bash
node -v
npm -v
npm ci
npm run dev
```

Node debe mostrar 24.x. Abrí la URL de la terminal; no cierres esa terminal mientras jugás. Ctrl+C detiene el servidor. Si npm dice que no encuentra package.json, estás en otra carpeta. Si falta node o npm, instalá Node y volvé a abrir el editor.

Para validar y previsualizar la versión compilada:

```bash
npm test
npm run lint
npm run build
npm run preview
```

Abrí la nueva URL indicada por preview. localhost solo funciona en tu computadora; no es el enlace para entregar.

## 3. Si ya tenés repositorio

Primero confirmá el repositorio real. El README anterior menciona Paulinaluna17/pack-ready-to-go; no se comprobó su estado. No crees otro por error.

1. Guardá una copia de tu carpeta actual. Si tiene cambios sin guardar en Git, revisalos y registralos antes de actualizar.
2. Cloná el repositorio en una carpeta nueva mediante GitHub Desktop (File → Clone repository) o `git clone URL_REAL_DEL_REPOSITORIO`. El texto URL_REAL_DEL_REPOSITORIO se reemplaza por el enlace que copiás de GitHub; no se ejecuta literalmente.
3. Creá una rama de revisión, por ejemplo `entrega-momento-3`. Copiá dentro de la raíz del clon el contenido de pack-ready-to-go de este ZIP, incluidos .gitignore y .nvmrc. En Finder, Cmd+Shift+. muestra archivos ocultos. Conservá la carpeta .git del clon; nunca copies otra encima.
4. Revisá el diff: los archivos ajenos al juego no se deben borrar. Si el remoto tiene cambios más recientes, comparalos antes de reemplazar. Si aparece un conflicto, resolvelo antes de subir.
5. Ejecutá npm ci, npm test, npm run lint y npm run build en el clon. Probá el juego.
6. En Desktop, revisá Changes, escribí un resumen, hacé Commit y Publish branch/Push. Abrí un Pull Request, revisalo y fusioná cuando corresponda. Verificá que la rama que usa Vercel contenga los cambios finales.

No uses force push ni reemplaces el historial para subir esta entrega.

## 4. Si no tenés repositorio

Creá uno vacío en GitHub, sin README, licencia ni .gitignore automáticos. Desde la terminal de pack-ready-to-go:

```bash
git init
git add .
git status
git commit -m "Preparar entrega Momento 3"
git branch -M main
```

Luego ejecutá `git remote add origin URL_REAL_DEL_REPOSITORIO` con el enlace de tu repositorio y `git push -u origin main`. Autenticate con el método que ofrezca Git/GitHub; no escribas contraseñas en archivos del proyecto. Antes de commit, git status debe mostrar el código y documentos, no node_modules ni .env.

Deben subirse src, public, tests, docs, index.html, package.json, package-lock.json, configuración Vite/Vercel, README, LEEME_PRIMERO, .gitignore, .nvmrc y .oxlintrc.json. No subir el ZIP como sustituto del código. No subir node_modules, dist, .env, .vercel ni archivos del sistema. Git ignora automáticamente lo indicado en .gitignore.

## 5. Vercel

1. Ingresá a https://vercel.com/ y elegí agregar/importar un proyecto desde GitHub. Autorizá el repositorio correcto.
2. Seleccioná la rama final. Root Directory debe ser la carpeta que contiene package.json: raíz si subiste su contenido; pack-ready-to-go si quedó anidada.
3. Framework: Vite. Install Command: npm ci. Build Command: npm run build. Output Directory: dist. Node: 24.x. Este juego no necesita variables de entorno.
4. La configuración vercel.json incluida resuelve rutas internas de la aplicación. No la borres: entrar o recargar /game/city debe funcionar también en el despliegue.
5. Desplegá. Si falla, revisá los logs; no cambies dependencias al azar. Al terminar, abrí la URL asignada.
6. Comprobá en incógnito que la URL de producción sea accesible para el docente sin iniciar sesión. Revisá la configuración de protección del proyecto si pide acceso.
7. Probá desde un teléfono físico diferente a la computadora de desarrollo: inicio, instrucciones, los tres niveles, derrota, reintento, pausa y recarga de rutas. Verificá que fuentes e íconos carguen. Registrá la evidencia en USABILIDAD.md.

Esta versión está preparada para Vercel. GitHub Pages también figura en la forma de entrega, pero requiere adaptar base y routing: no uses esta configuración sin cambios allí.

## 6. Blackboard

Compartí el enlace público del juego y el del repositorio en el espacio de entrega. Confirmá los permisos del repositorio para que el docente pueda leerlo. Comprobá ambos enlaces en incógnito. Completá por separado la publicación de Instagram y el guion previo a la demostración.

Referencias oficiales de consulta (13/11/2026):
- https://vercel.com/docs/frameworks/frontend/vite
- https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
