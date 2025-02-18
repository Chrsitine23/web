/**
 * Get the <path> value of the svg file
 */
export function getSvgData(svg: string) {
  const s = svg.split('d="');
  const path = s.length > 1 ? s[1].split('"')[0] : "";
  const width = s.length > 1 ? s[0].split('width="')[1].split('"')[0] : "";
  const height = s.length > 1 ? s[0].split('height="')[1].split('"')[0] : "";

  return { path, width, height };
}