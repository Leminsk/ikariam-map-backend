const express = require("express");

const app = express();
const port = 3000;

const ikariamRouter = require("./routes/ikariam-routes");

app.use(express.json());

// FIX THIS
// need this because of cors (localhost)
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type','Authorization');
    next(); 
})

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

app.use("/requestMapData", ikariamRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
})

app.listen(port, () => {
    console.log(`Ikariam Map Backend listening at http://localhost:${port}`);
});