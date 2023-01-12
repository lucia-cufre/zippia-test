import { urlRouter } from './router/urlRouter';
import app from "./app";

app.use("/", urlRouter);