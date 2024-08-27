import express from "express"
import postRouter from "./routes/post.route.js"
import authRoute  from "./routes/auth.route.js"

const app = express();

app.use("/api/auth",authRoute)
app.use("/api/posts", postRouter)


app.listen(8800,()=>{
    console.log("Server is running!");
})