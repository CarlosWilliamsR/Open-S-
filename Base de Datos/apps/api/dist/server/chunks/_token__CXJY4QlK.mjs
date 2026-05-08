import { c as createComponent } from './astro-component_PwjlJgms.mjs';
import 'piccolore';
import { i as createRenderInstruction, m as maybeRenderHead, r as renderTemplate, j as renderSlot, k as renderComponent, l as renderHead, g as addAttribute } from './server_DsVO6bwn.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Notification = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="toast-container" class="fixed top-20 right-4 z-50 flex flex-col items-end gap-2" aria-live="polite" aria-atomic="false"></div>`;
}, "C:/Users/GabrielGG/Documents/contactos-miercoles/apps/client/src/components/notification/notification.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", "</title>", '</head> <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"> ', " ", ' <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"><\/script> <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"><\/script> </body></html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Notification", $$Notification, {}), renderSlot($$result, $$slots["default"]));
}, "C:/Users/GabrielGG/Documents/contactos-miercoles/apps/client/src/layout/PageLayout.astro", void 0);

const prerender = false;
const $$token = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Verification" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-screen flex justify-center items-center"> <div class="border p-4 rounded-xl"> <p id="info-text" class="font-bold">Verificando el correo <span id="info-dot">...</span></p> </div> </div> ` })} ${renderScript($$result, "C:/Users/GabrielGG/Documents/contactos-miercoles/apps/client/src/pages/verify/[token].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/GabrielGG/Documents/contactos-miercoles/apps/client/src/pages/verify/[token].astro", void 0);

const $$file = "C:/Users/GabrielGG/Documents/contactos-miercoles/apps/client/src/pages/verify/[token].astro";
const $$url = "/verify/[token]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$token,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
