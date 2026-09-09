const ExpoCrypto = require("expo-crypto");

/**
 * Hermes throws `Property 'crypto' doesn't exist` for bare `crypto` access.
 * Neon / Better Auth expect a Web Crypto-like global before any of their imports.
 * Use require() (not import) for the router entry so this polyfill runs first —
 * ES import declarations are hoisted and would otherwise load routes too early.
 */
const webCrypto = {
  getRandomValues: ExpoCrypto.getRandomValues.bind(ExpoCrypto),
  randomUUID: ExpoCrypto.randomUUID.bind(ExpoCrypto),
};

const root =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof global !== "undefined"
      ? global
      : typeof window !== "undefined"
        ? window
        : undefined;

if (root) {
  const existing = root.crypto;
  if (!existing || typeof existing.getRandomValues !== "function") {
    Object.defineProperty(root, "crypto", {
      value: existing
        ? Object.assign({}, existing, webCrypto)
        : webCrypto,
      configurable: true,
      enumerable: true,
      writable: true,
    });
  } else if (typeof existing.randomUUID !== "function") {
    existing.randomUUID = webCrypto.randomUUID;
  }
}

require("expo-router/entry");
