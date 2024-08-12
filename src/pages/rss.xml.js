import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "NutriRecetas | Blog de Recetas Saludables",
    description:
      "Descubre recetas saludables y deliciosas para nutrir tu cuerpo y alma.",
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./**/*.md'),
    ),
  });
}
