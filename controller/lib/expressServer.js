import cors from 'cors';
import express from 'express';
import { config } from "dotenv";
config()

// Connect to the Database and Authenticate User
import connectDB from "../../db/connectDB.js";

const PORT = process.env.PORT

export function launchApi() {
    // Setup HTTP api
    const api = express()
    api.use(express.json())
    api.use(cors())

    api.get('/', (req, res) => {
        res.send('Telegram Server API')
    })

    // Listen to server start on port
    // api.listen(PORT, () => console.log(`express is up on port ${PORT}`))

    const start = async () => {
        try {
            // await connectDB(process.env.MONGO_URL);
            api.listen(PORT, () => console.log(`Server has started on ${PORT}`));
        } catch (error) {
            console.log(error);
        }
    };

    start();

    return api
}
