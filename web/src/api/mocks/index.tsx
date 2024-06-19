import { env } from "../../../env";
import { login } from "./login-mock";

let mswWorker;

export async function enableMSW() {
  console.log(env.MODE);
  if (typeof window !== "undefined" && !mswWorker) {
    const { setupWorker } = await import("msw/browser");
    mswWorker = setupWorker(login);
    return mswWorker;
  }
}
