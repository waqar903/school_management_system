import mongoose from 'mongoose';

export const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("DB connected ", connect.connection.host)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}