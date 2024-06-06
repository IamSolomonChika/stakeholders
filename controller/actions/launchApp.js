import { launchApi } from "../lib/expressServer.js";
import { launchBot } from "../telegram/Bot.js";

export function launchApp(token) {
    const bot = launchBot(token)
    const api = launchApi()

}
