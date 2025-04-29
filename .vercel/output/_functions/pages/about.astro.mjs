/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DrjHWHeI.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_Dx4oGjbH.mjs';
import { $ as $$Sponsors, a as $$Services } from '../chunks/Services_DNkvyJvr.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Sobre nostros" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:pb-20 md:pt-10"> <div class="text-center space-y-10"> <h2 class="text-5xl font-medium leading-none md:text-6xl">Eleva cada paso, impulsa tu estilo</h2> <p class="mt-6 mb-8 text-xl font-normal leading-7 sm:mb-12">
Somos una tienda de zapatillas G5, donde encontrarás lo último en tendencias y calidad para llevar tu estilo al siguiente nivel.
</p> <a class="px-9 py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex" rel="noopener noreferrer" href="https://github.com/manulthanura/Positivus" target="_blank"> <h2 class="text-center text-xl font-normal leading-7">Explora nuestra colección</h2> </a> </div> </div> </div> </div> ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} ${renderComponent($$result2, "Services", $$Services, {})} </main> ` })}`;
}, "C:/Users/jerem/OneDrive/Escritorio/footweareStore/src/pages/about.astro", void 0);

const $$file = "C:/Users/jerem/OneDrive/Escritorio/footweareStore/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$About,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
