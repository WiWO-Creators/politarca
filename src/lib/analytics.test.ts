import assert from "node:assert/strict";
import test from "node:test";
import { scriptsDeAnalitica, tipoDePagina } from "./analytics.ts";

/**
 * Responsabilidad: fijar que el sitio no emite medición salvo con una propiedad
 * de GA4 bien formada, en el orden que gtag exige y sin la vista automática.
 * Usado por: `npm test`.
 * NO hace: no carga Vite ni el entorno; la propiedad se pasa por parámetro.
 *
 * Existe por el fallo silencioso: una variable mal pegada produce un script que
 * carga sin error y no mide nada.
 */

test("sin propiedad no se emite ningún script", () => {
  assert.deepEqual(scriptsDeAnalitica(""), []);
  assert.deepEqual(scriptsDeAnalitica("   "), []);
});

test("una propiedad mal pegada tampoco emite nada", () => {
  for (const roto of [
    '"G-Q14D9HN1DZ"',
    "VITE_GA_MEASUREMENT_ID=G-Q14D9HN1DZ",
    "G-Q14D9HN1DZ extra",
    "UA-12345-1",
    "GTM-ABC123",
    "G-",
  ]) {
    assert.deepEqual(scriptsDeAnalitica(roto), [], `debería rechazar ${roto}`);
  }
});

test("con una propiedad válida emite el archivo y el arranque, en ese orden", () => {
  const scripts = scriptsDeAnalitica("  G-Q14D9HN1DZ  ");

  assert.equal(scripts.length, 2);
  assert.equal(scripts[0].src, "https://www.googletagmanager.com/gtag/js?id=G-Q14D9HN1DZ");
  assert.equal(scripts[0].async, true);
  assert.match(scripts[1].children ?? "", /gtag\('config', 'G-Q14D9HN1DZ'/);
});

test("apaga la vista automática de gtag: este sitio no recarga nunca", () => {
  const [, arranque] = scriptsDeAnalitica("G-Q14D9HN1DZ");

  assert.match(arranque.children ?? "", /send_page_view:\s*false/);
});

test("clasifica cada ruta del sitio por lo que es", () => {
  assert.equal(tipoDePagina("/"), "portada");
  assert.equal(tipoDePagina("/piezas/una-pieza"), "nota");
  assert.equal(tipoDePagina("/piezas"), "navegacion");
  assert.equal(tipoDePagina("/erario"), "navegacion");
  assert.equal(tipoDePagina("/vida-comun"), "navegacion");
  assert.equal(tipoDePagina("/balance"), "especial");
  assert.equal(tipoDePagina("/nosotros"), "institucional");
});

test("una ruta que nadie anotó cae en «otra» en vez de romper", () => {
  assert.equal(tipoDePagina("/ruta-que-todavia-no-existe"), "otra");
  assert.equal(tipoDePagina(""), "otra");
});
