// Shared accent color rotation, used by both ProductCard and CategoryTile
// so cards/tiles across the site draw from the same consistent palette.
const ACCENT_COLORS = [
  '#8B1E2B', // maroon
  '#C4720E', // burnt orange
  '#D9862A', // amber
  '#2F4A2F', // dark green
  '#7A1638', // wine
  '#9C6B12', // mustard-brown
  '#6B2B1F', // brick
  '#B8860B', // gold-brown
];

export function getAccentColor(id: number): string {
  return ACCENT_COLORS[id % ACCENT_COLORS.length];
}