# Template

vite react-js-swc sin linters

## Enunciado Prueba Técnica

Crea una aplicación para buscar películas

API a usar:
- https://www.omdbapi.com/
- API Key: 92d2e58
- query Search (s): https://www.omdbapi.com/?apikey=92d2e58&s=Spiderman

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API

Primera iteración:

✅ Evitar que se haga la misma búsqueda dos veces seguidas. (con useRef)

✅ Haz que la búsqueda se haga automáticamente al escribir.

✅ Evita que se haga la búsqueda continuamente al escribir (debounce)
debounce = esperar a que el usuario deje de escribir un tiempo para que no se hagan llamadas a la API de frases entrecortadas.

## Hooks a usar

useMemo, useCallback y useRef
