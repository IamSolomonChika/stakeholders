// Write me a function that will get user's name and profile picture of a telegram user using telegraf
import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

export async function getTelegramUserInfo(bot) {
    try {
      const { first_name, last_name } = await bot.telegram.getMe();
      const profilePicUrl = await bot.telegram.getProfilePhotos(first_name).then((photos) => {
        if (photos.total_count > 0) {
          return bot.telegram.getFile(photos.photos[0][0].file_id).then((file) => {
            return `https://api.telegram.org/file/bot${process.env.TELEGRAM_BOT_TOKEN}/${file.file_path}`;
          });
        }
        return null;
      });
  
      return {
        name: `${first_name} ${last_name}`,
        profilePicUrl,
      };
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  }