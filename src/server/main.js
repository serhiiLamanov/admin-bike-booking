import express from "express"
import mongoose from "mongoose"
import ViteExpress from "vite-express"
import router from "./routes/bikes.js"
import 'dotenv/config'

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

const app = express()

app.use(express.json())

app.get("/hello", (req, res) => {
    res.send("Hello Vite + React!")
})

app.use('/bikes', router)

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page

    res.status(err.status || 500);
    res.send({error:err});
})

ViteExpress.listen(app, PORT, () =>
    console.log(`Server is listening on port ${PORT}...`),
)

mongoose.connect(MONGO_URL).then(()=> console.log('connected to mongo')).catch(e => console.error(e))