import express from 'express';
const app=express();
import cors from 'cors';
import cookieParser from 'cookie-parser';

const DataLimit="20kb";
// const allowedOrigins = process.env.CORS_ORIGIN.split(',');

// app.use(cors({
//     origin:allowedOrigins,
//     methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
//     credentials: true,
//     maxAge: 24 * 60 * 60 * 1000,
// }))

app.use(cors({
    origin: '*'
}));

app.use(express.urlencoded({
    extended:true,
    limit:DataLimit
}));

app.use(express.json({
    limit:DataLimit
}))

app.use(express.static('public'));
app.use(cookieParser());



//Router Import
import testRouter from './routes/test.router.js'

app.use('/api/v1',testRouter);


export  {app};