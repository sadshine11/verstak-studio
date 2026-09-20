/**
 * Генерация превью для соцсетей (public/og.png).
 * Запуск: npm i -D @resvg/resvg-js && node scripts/make-og.mjs
 */
import fs from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#d5d7d0"/>
  <g stroke="#16171b" stroke-opacity="0.12" stroke-width="1">
    <line x1="56" y1="0" x2="56" y2="630"/>
    <line x1="1144" y1="0" x2="1144" y2="630"/>
  </g>
  <rect x="0" y="0" width="1200" height="8" fill="#16171b"/>

  <g font-family="Segoe UI, Arial, sans-serif">
    <text x="80" y="108" font-size="30" font-weight="700" letter-spacing="-1" fill="#16171b">ВЕРСТА</text>
    <rect x="200" y="82" width="34" height="34" fill="#2536d8"/>
    <text x="209" y="108" font-size="30" font-weight="700" fill="#ffffff">К</text>
    <text x="256" y="106" font-size="16" letter-spacing="3" fill="#555a63">СТУДИЯ</text>

    <text x="80" y="290" font-size="78" font-weight="700" letter-spacing="-3" fill="#16171b">Делаем сайты,</text>
    <text x="80" y="378" font-size="78" font-weight="700" letter-spacing="-3" fill="#16171b">которые не приходится</text>
    <text x="80" y="466" font-size="78" font-weight="700" letter-spacing="-3" fill="#16171b">переделывать</text>

    <line x1="80" y1="520" x2="1120" y2="520" stroke="#16171b" stroke-opacity="0.28"/>
    <text x="80" y="562" font-size="22" fill="#3c404a">Проектирование и разработка сайтов · Санкт-Петербург · с 2017</text>
    <text x="1120" y="562" font-size="22" text-anchor="end" fill="#2536d8">verstak.ru</text>
  </g>
</svg>`;

const png = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true, defaultFontFamily: 'Segoe UI' },
}).render().asPng();

fs.writeFileSync('public/og.png', png);
console.log(`public/og.png — ${(png.length / 1024).toFixed(1)} KB`);
