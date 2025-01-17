import { fetchPage } from "./fetcher.js";
import { parseHTML } from "./parser.js";
import { buildSearchUrl } from "./utils.js";

export async function crawl(baseUrl, path, parameters) {
  const selectors = { link: "a" };

  const searchUrl = buildSearchUrl(baseUrl, path, parameters);
  const html = await fetchPage(searchUrl);

  if (!html) return;

  const links = parseHTML(html, selectors, baseUrl);
  return links;
}
