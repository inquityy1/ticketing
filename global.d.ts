import request from "supertest";

declare module globalThis {
  var signin: () => string[];
}
