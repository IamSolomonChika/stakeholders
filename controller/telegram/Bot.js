import { Telegraf } from "telegraf";
import { listenToCommands, listenToMessages, listenToQueries } from "./listeners.js";
import { config } from "dotenv";
config()


export function launchBot(token) {
    const bot = new Telegraf(token);

    // Listeners for the bot
    listenToCommands(bot)
    listenToMessages(bot)
    listenToQueries(bot)

    // Launch the bot
    bot.launch().then(() => console.log('Bot is up and running'))

    // Handle stop events
    enableGracefulStop(bot)

    return bot
}

function enableGracefulStop(bot) {
    // Enable graceful stop
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
}