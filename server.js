import { launchApp } from "./controller/actions/launchApp.js";
import { config } from "dotenv";
config()

launchApp(process.env.BOT_API)