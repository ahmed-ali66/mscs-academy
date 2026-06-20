import "@testing-library/jest-dom";

// Polyfill for `crypto.subtle` and `TextEncoder` in jsdom
import { TextEncoder, TextDecoder } from "util";

if (typeof globalThis.TextEncoder === "undefined") {
  // @ts-expect-error — Node's TextEncoder is compatible with Web's
  globalThis.TextEncoder = TextEncoder;
}
if (typeof globalThis.TextDecoder === "undefined") {
  // @ts-expect-error — Node's TextDecoder is compatible with Web's
  globalThis.TextDecoder = TextDecoder;
}

// Mock IntersectionObserver (used by reveal-on-scroll animations)
class MockIntersectionObserver {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

if (typeof globalThis.IntersectionObserver === "undefined") {
  // @ts-expect-error — minimal mock
  globalThis.IntersectionObserver = MockIntersectionObserver;
}

// Mock matchMedia (used by reduced-motion CSS)
if (typeof globalThis.matchMedia === "undefined") {
  // @ts-expect-error — minimal mock
  globalThis.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// Suppress console.error for expected test errors (e.g., React error boundaries)
const originalError = console.error;
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    const first = args[0];
    if (
      typeof first === "string" &&
      (first.includes("Not implemented") || first.includes("Error: Uncaught"))
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
