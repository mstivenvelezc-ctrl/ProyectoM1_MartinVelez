# ProyectoM1_MartinVelez

## ColorflY Studio - Generador de paletas de colores
Proyecto simple en HTML/CSS/JS para crear paletas de colores aleatorias (6, 8 y 9 colores) y visualizar sus códigos en HEX y HSL.

## 🧩 Estructura del proyecto

- `html/index.html` – página principal.
- `css/styles.css` – estilos.
- `js/script.js` – lógica para generar colores y convertirlos a HSL.
- `img/` – imágenes usadas en la interfaz.

## 🚀 Cómo usar

1. Abre `html/index.html` en tu navegador.
2. Haz clic en el botón **Generar paleta** para mostrar las opciones de paleta.
3. Selecciona:
   - `Paleta de 6 Colores`
   - `Paleta de 8 Colores`
   - `Paleta de 9 Colores`

Cada paleta muestra los colores generados junto a su nombre (según el tono), valor HEX y valor HSL.

## ✨ Características

- Generación aleatoria de colores en HEX.
- Conversión a HSL y clasificación básica por tono.
- Interfaz simple y accesible.

## 🛠️ Personalización rápida

Si quieres cambiar el número de colores o el estilo de presentación, edita:

- `js/script.js` (funciones `generate1`, `generate2`, `generate3`).
- `css/styles.css` para la apariencia.

## 📝 Notas

- El proyecto está pensado para uso local (no necesita servidor).
- Si quieres usarlo en producción, asegúrate de servirlo desde un servidor estático (por ejemplo, `Live Server` en VS Code).

## 🧑‍💻 Manual de Usuario

### ¿Qué hace esta aplicación?
ColorflY Studio genera paletas de colores aleatorias (6, 8 y 9 colores) y muestra para cada color:
- Nombre básico según el tono (Rojo, Amarillo, Verde, etc.)
- Código HEX
- Código HSL

### Interfaz de usuario

![Captura de pantalla de la aplicación](/Captura%20de%20pantalla%202026-03-18%20191452.png)
![Captura de pantalla de la aplicación](/Captura%20de%20pantalla%202026-03-18%20191604.png)

### Cómo usar
1. Abre `html/index.html` en tu navegador (doble clic o arrastra al navegador).
2. Haz clic en el botón **Generar paleta**.
3. Elige una opción:
   - **Paleta de 6 Colores**
   - **Paleta de 8 Colores**
   - **Paleta de 9 Colores**
4. Verás los colores generados junto a su nombre, código HEX y HSL.

---

## 📥 Pasos para descargar el proyecto desde GitHub y ejecutar en Visual Studio Code

### 1) Clonar el repositorio
1. Abre una terminal (PowerShell, Git Bash, etc.).
2. Navega a la carpeta donde quieres guardar el proyecto:
   ```powershell
   cd C:\ruta\a\tu\carpeta
   ```
3. Clona el repositorio:
   ```powershell
   git clone https://github.com/<tu-usuario>/<tu-repositorio>.git
   ```

### 2) Abrir en Visual Studio Code
1. Abre VS Code.
2. En el menú, selecciona **Archivo > Abrir carpeta...** y elige la carpeta del proyecto.
3. (Opcional) Instala la extensión **Live Server** para ver los cambios en tiempo real.

### 3) Ejecutar la aplicación
1. Si usas Live Server: haz clic derecho en `html/index.html` y selecciona **Open with Live Server**.
2. Si no usas Live Server: abre `html/index.html` directamente en tu navegador.

---

## 🌐 Despliegue en GitHub Pages

### 1) Preparar el repositorio
1. Asegúrate de que todos los cambios estén confirmados (commit):
   ```bash
   git add .
   git commit -m "Actualiza aplicación ColorflY Studio"
   git push origin main
   ```

### 2) Activar GitHub Pages
1. En tu repositorio de GitHub, ve a **Settings > Pages**.
2. En **Branch**, selecciona `main` (o la rama que uses) y, si aparece, la carpeta `/root` o `/ (root)`.
3. Guarda y espera unos segundos.
4. GitHub mostrará la URL de tu sitio (por ejemplo, `https://<tu-usuario>.github.io/<tu-repositorio>/`).

---

## 🧠 Decisiones Técnicas

- **Estructura de carpetas**: Se separa `html/`, `css/`, `js/` y `img/` para mantener todo organizado.
- **JS puro (vanilla)**: No se usan frameworks para mantener el proyecto ligero y fácil de entender.
- **Generación de color**: Se genera un valor aleatorio en HEX y se convierte a HSL en el cliente.
- **Layout**: Se muestra cada color con su recuadro y datos en una cuadrícula CSS (grid).

---

## 🛠️ Manual Técnico (para desarrolladores)

### Archivos clave
- `html/index.html` – Estructura de la interfaz y llamadas a funciones.
- `css/styles.css` – Estilos de la página (layout, botones, paletas).
- `js/script.js` – Lógica de generación de colores, conversión HEX → HSL y renderizado en el DOM.

### Cambios comunes
- **Cambiar número de colores**: ajusta los bucles `for` en `generate1`, `generate2`, `generate3`.
- **Agregar más metadata de color**: modifica `info.innerHTML` en el script.
- **Mejorar el estilo**: ajusta `css/styles.css` para cambiar el `grid`, los botones, los colores de fondo, etc.

### Notas de desarrollo
- La función `colorName(h)` asigna un nombre sencillo según el valor de `h` (hue).
- Si quieres añadir copiado al portapapeles, puedes usar la API `navigator.clipboard.writeText(...)` en el evento de clic.

---

## 📌 Registro de cambios (opcional)

Puedes agregar aquí notas sobre versiones importantes o avances del proyecto.

## 📄 Licencia

Este proyecto es de ejemplo y no tiene una licencia específica.
