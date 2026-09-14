// Extrae la sección #clientes de dist/index.html, una etiqueta por línea, para
// poder diffearla. Existe para una sola cosa: garantizar que volver a la cinta
// de LOGOS (CLIENTES_MODO = 'logos' en src/config/clients.ts) reproduce la
// cinta que estaba publicada el 14/09, antes de pasar a nombres por falta de
// autorización de uso de marca.
//
// Uso:
//   node scripts/extraer-cinta.mjs                 → imprime la sección
//   node scripts/extraer-cinta.mjs --comparar      → diff contra tools/referencia-cinta-logos.html
//
// La referencia es la cinta de LOGOS con los ajustes de contenido que no son
// parte de la cinta: el nombre "Cervecería y Maltería Quilmes" (alt, lista y
// aria-label) y "Walmart, Dorinka" juntos en la lista de texto (14/09).
// Se regeneró en modo logos solo después de comprobar que esas eran las únicas
// líneas distintas contra la cinta publicada en 8e80bcb. Hoy tiene que dar 0.
// ⚠️ Si alguna vez se cambia contenido que también se ve en modo logos (la
// lista, un nombre, un alt), el diff lo va a marcar: verificar que sean solo
// esas líneas y recién ahí regenerar con
//   node scripts/extraer-cinta.mjs > tools/referencia-cinta-logos.html
// (con CLIENTES_MODO = 'logos' y el build hecho).
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const inicio = html.indexOf('<section id="clientes"');
if (inicio === -1) {
  console.error('No se encontró <section id="clientes"> en dist/index.html. ¿Corriste npm run build?');
  process.exit(1);
}
const fin = html.indexOf('</section>', inicio) + '</section>'.length;
const seccion = html
  .slice(inicio, fin)
  .replace(/>\s*</g, '>\n<')
  .split('\n')
  .map((l) => l.trim())
  .filter(Boolean);

if (!process.argv.includes('--comparar')) {
  console.log(seccion.join('\n'));
  process.exit(0);
}

const referencia = readFileSync(new URL('../tools/referencia-cinta-logos.html', import.meta.url), 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter(Boolean);

let diferencias = 0;
const largo = Math.max(seccion.length, referencia.length);
for (let i = 0; i < largo; i++) {
  if (seccion[i] !== referencia[i]) {
    diferencias++;
    console.log(`línea ${i + 1}\n  referencia: ${referencia[i] ?? '(no existe)'}\n  build:      ${seccion[i] ?? '(no existe)'}`);
  }
}
console.log(`\n${diferencias} línea(s) distinta(s) de ${largo}.`);
process.exit(diferencias ? 1 : 0);
