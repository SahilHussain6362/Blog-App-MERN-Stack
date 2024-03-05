//  Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

// connecting with database
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log("MongoDb is connected!");
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();

app.use(express.json()); //so, that we can console log req.body

app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});
// Handling different routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});