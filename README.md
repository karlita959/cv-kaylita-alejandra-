# CV Web · Kayla Alejandra Carrizal Betancourt

Página web animada del CV de Kayla Alejandra Carrizal Betancourt, Ingeniera en Administración de Sistemas.

## Características

- Animación de texto tipo máquina de escribir en el encabezado
- Secciones que aparecen al hacer scroll
- Barras de habilidades que se llenan al entrar en pantalla
- Fondo con formas animadas
- Modo claro / oscuro (se guarda la preferencia)
- Diseño adaptable a celular
- Respeta la opción "reducir movimiento" del sistema

## Estructura

```
cv-web/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── README.md
```

## Cómo verla en tu computadora

Solo abre `index.html` en tu navegador. No necesita instalación.

## Publicarla con GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `cv-web`.
2. Sube los archivos de esta carpeta (o usa `git`):

   ```bash
   git init
   git add .
   git commit -m "Primera versión del CV web"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/cv-web.git
   git push -u origin main
   ```

3. En GitHub, ve a **Settings → Pages**.
4. En **Build and deployment**, elige **Deploy from a branch**, selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
5. En unos minutos tu CV estará en `https://TU_USUARIO.github.io/cv-web/`.

## Personalización

- **Datos y textos:** edita `index.html`.
- **Colores y tamaños:** cambia las variables en `:root` dentro de `css/styles.css`.
- **Frases que se escriben solas:** edita el arreglo `roles` en `js/main.js`.
- **Niveles de habilidades:** cambia el valor `data-level` (de 0 a 100) de cada barra en `index.html`.

## Contacto

k52578138@gmail.com · Monterrey, Nuevo León
