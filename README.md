# Centro de Mando

Aplicación estática de una sola página, sin build ni dependencias. El contenido
(horario, entreno, comidas, herramientas de inglés, hábitos) vive como datos en
`data.js` y se renderiza con `app.js`; editar el plan es tocar un objeto, no HTML.

## Estructura

```
.
├── public/
│   ├── index.html   # cascarón: header, tabs y contenedores vacíos
│   ├── styles.css   # todos los estilos
│   ├── data.js      # contenido: SCHEDULE, WORKOUTS, MEALS, TOOLS, HABITS
│   ├── app.js       # render de cada sección + tabs + tracker + peso
│   └── _headers     # cabeceras de seguridad y caché para Cloudflare Pages
└── wrangler.toml    # configuración de Cloudflare Pages
```

## Editar el plan

Casi todo se cambia en `public/data.js`:

- **Horario:** `SCHEDULE` — un objeto por día con sus filas `{t, type, title, note}`.
  `type` define el color del bloque (`en`, `cls`, `gym`, `food`, `work`, `skill`, `mob`, `rest`).
- **Entreno:** `WORKOUTS` · **Nutrición:** `MEALS` · **Inglés:** `TOOLS` · **Hábitos:** `HABITS`.

## Desarrollo local

Abrí `public/index.html` en el navegador, o serví la carpeta:

```bash
npx serve public
```

## Despliegue en Cloudflare Pages

### Opción A — Git (recomendada)

1. Subí el repo a GitHub/GitLab.
2. En el dashboard de Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**.
3. Configuración de build:
   - **Build command:** *(vacío)*
   - **Build output directory:** `public`

Cada push a la rama principal redepliega automáticamente.

### Opción B — Wrangler (desde la terminal)

```bash
npx wrangler pages deploy public
```

`wrangler.toml` ya declara `pages_build_output_dir = "./public"`, así que Cloudflare
sabe qué publicar sin configuración manual.
