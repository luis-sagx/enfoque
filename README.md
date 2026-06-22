# Centro de Mando

Aplicación estática de una sola página (`public/index.html`), sin build ni dependencias.

## Estructura

```
.
├── public/
│   ├── index.html   # la app (autocontenida: HTML + CSS + JS inline)
│   └── _headers     # cabeceras de seguridad y caché para Cloudflare Pages
└── wrangler.toml    # configuración de Cloudflare Pages
```

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
