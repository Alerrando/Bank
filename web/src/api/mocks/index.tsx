import { env } from "../../../env";
import { setupServer } from "msw/node";

export  async function enableMSW(){
    if (env.MODE !== "test" && !window.location.href.includes("http://localhost:50789/")) {
        return;
    }

    const worker = setupServer();
    return worker.start();
}