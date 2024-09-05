import express from "express"
import postRouter from "./routes/post.route.js"
import authRoute  from "./routes/auth.route.js"
import testRoute from "./routes/test.route.js"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corOptions = {
    origin:process.env.CLIENT_URL,
    credentials:true
}
app.use(cors(corOptions))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoute)
app.use("/api/posts", postRouter)
app.use("/api/test",testRoute)


app.listen(8800,()=>{
    console.log("Server is running!");
})