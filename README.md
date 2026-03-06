# Sound of Art Tattoo

This project is built using **Vite** and **Tailwind CSS 4**. To see the application exactly as it appears in the preview, you must run it through a development server rather than opening the HTML files directly.

## Why it looks different when opened directly
1. **Tailwind CSS 4**: The styles are processed by Vite. Browsers cannot natively parse the `@import "tailwindcss";` directive in `src/index.css`.
2. **ES Modules**: The JavaScript uses `type="module"`, which browsers block when loaded via `file://` (opening the file directly) due to security restrictions.
3. **Asset Processing**: Vite handles the path resolution for images and scripts.

## How to run locally

### 1. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 2. Start Development Server
Run the following command to start the local server:
```bash
npm run dev
```
Once started, open the URL provided in the terminal (usually `http://localhost:3000`).

### 3. Build for Production
To create a version that can be hosted on a standard web server:
```bash
npm run build
```
The compiled, ready-to-use files will be in the `dist/` folder.
