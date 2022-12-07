/*
|--------------------------------------------------------------------------
| AdonisJs Server
|--------------------------------------------------------------------------
|
| The contents in this file is meant to bootstrap the AdonisJs application
| and start the HTTP server to accept incoming connections. You must avoid
| making this file dirty and instead make use of `lifecycle hooks` provided
| by AdonisJs service providers for custom code.
|
*/

import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import { Ignitor } from '@adonisjs/core/build/standalone'
import mongoose from 'mongoose'

sourceMapSupport.install({ handleUncaughtExceptions: false })

const server = new Ignitor(__dirname)
  .httpServer()

  const MONGO_URL =
    process.env.MONGODB_URL || "mongodb://localhost:27017/AdonisJs";

const connectDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("connected to database");
        server.start().catch(console.error);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

connectDatabase();
  // .start()
