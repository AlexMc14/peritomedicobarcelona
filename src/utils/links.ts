const base = import.meta.env.BASE_URL.replace(/\/$/, '');

function withTrailingSlash(route: string): string {
  return route.endsWith('/') ? route : `${route}/`;
}

export function url(path: string): string {
  if (path.startsWith('#')) return path;
  const hashIndex = path.indexOf('#');
  if (hashIndex > 0) {
    const route = path.substring(0, hashIndex);
    const hash = path.substring(hashIndex);
    return `${base}${withTrailingSlash(route)}${hash}`;
  }
  return `${base}${withTrailingSlash(path)}`;
}
