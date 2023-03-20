export function getBaseUrl() {
  const {origin, pathname} = window.location
  return origin + pathname.substring(0, pathname.indexOf('/api'))
}