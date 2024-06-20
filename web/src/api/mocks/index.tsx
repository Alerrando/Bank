import { login } from "./login-mock";

let mswWorker;

export async function enableMSW() {
  if (typeof window !== "undefined" && !mswWorker && window.location.href.includes("http://localhost:50789/")) {
    const { setupWorker } = await import("msw/browser");
    mswWorker = setupWorker(login);
    return mswWorker;
  }
}
