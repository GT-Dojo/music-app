/**
 * Parse the authenticity token from a meta tag with the given name.
 * @param name of the meta tag, default: csrf-token
 */
export function parseAuthenticityToken(name = 'csrf-token') {
  const element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!element) {
    return undefined;
  }

  return element.content;
}
