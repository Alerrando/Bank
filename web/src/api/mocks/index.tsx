import { login } from "./login-mock";

export async function enableMSW() {
  if (typeof window !== "undefined" && window.location.href.includes("http://localhost:50789/")) {
    const { setupWorker } = await import("msw/browser");
    const mswWorker = setupWorker(login);
    return mswWorker;
  }
}
