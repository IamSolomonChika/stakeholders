import { message } from 'telegraf/filters'

/**
 * Assigns command listeners such as /start and /help
 *
 * @param bot Telegraf bot instance
 *
 */
export function listenToCommands(bot) {
    // Register a listener for the /start command, and reply with a message whenever it's used
    bot.start(async (ctx) => {
        ctx.reply("Welcome to Stake Holders Bot! Click on the button below to launch our mini app", {
            reply_markup: {
                inline_keyboard: [
                    /* Inline buttons. 2 side-by-side */
                    [{ text: "Play", web_app: { url: process.env.APP_URL } }],
                    [{ text: "Join Community", web_app: { url: process.env.APP_URL } }],
                    [{ text: "Road Map", web_app: { url: process.env.APP_URL } }],
                ]
            }
        })
        console.log(ctx.message)
        console.log(ctx.telegram.token)
    })

    // Register a listener for the /help command, and reply with a message whenever it's used
    bot.help(async (ctx) => {
        ctx.reply("Run the /start command to use our mini app")
    })
}

/**
 * Assigns message listeners such as text and stickers
 *
 * @param bot Telegraf bot instance
 *
 */
export function listenToMessages(bot) {
    // Listen to messages and reply with something when ever you receive them
    bot.hears("Hi", async (ctx) => {
        ctx.reply('Hey therez')
    })

    // Listen to messages with the type 'sticker' and reply whenever you receive them
    bot.on(message("text"), async (ctx) => {
        ctx.reply("I don't understand text but I like stickers, send me some!")
        ctx.reply("Or you can send me one of these commands \n/start\n/help")
    });

    // Listen to messages with the type 'sticker' and reply whenever you receive them
    bot.on(message("sticker"), async (ctx) => {
        ctx.reply("I like your sticker! 🔥")
    })
}

/**
 * Assigns query listeners such inlines and callbacks
 *
 * @param bot Telegraf bot instance
 *
 */
export function listenToQueries(bot) {
    bot.on("callback_query", async (ctx) => {
        // Explicit usage
        await ctx.telegram.answerCbQuery(ctx.callbackQuery.id)

        // Using context shortcut
        await ctx.answerCbQuery()
    })

    bot.on("inline_query", async (ctx) => {
        const result = []
        // Explicit usage
        await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result)

        // Using context shortcut
        await ctx.answerInlineQuery(result)
    })
}