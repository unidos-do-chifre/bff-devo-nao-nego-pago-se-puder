import express, { Request, Response } from 'express';
import path from 'path';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import { config } from 'dotenv';
config();

import SwaggerSpecs from './src/config/Swagger';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (request: Request, response: Response) => response.send("Successfully connected"));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(SwaggerSpecs));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err: any, req: any, res: any, next: any) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

const port = process.env.PORT;

port ? () => 
    app.listen(port, () => console.log("App is running on: " + port))
    : console.log("Please, set a port in your .env file");