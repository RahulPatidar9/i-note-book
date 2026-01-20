const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const userRouter = require("./MVC/user/route");
const authRouter = require("./MVC/auth/route");
const noteRouter = require("./MVC/note/route");

const app = express();
connectDB()
/**
 * ✅ CORS MUST BE FIRST
 */
const allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

/**
 * ✅ Preflight support
 */
app.options("*", cors());

/**
 * ✅ Body parser
 */
app.use(express.json());

/**
 * ✅ Routes AFTER CORS
 */
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/note", noteRouter);

const PORT = 6200;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// const rateLimit = {}
// const LIMIT = 3; // Max requests per minute
// const TIME_FRAME = 60 * 1000; // 1 minute
// app.use((req, res, next) => {
//     const ip = req.ip;
//     const now = Date.now();

//     if (!rateLimit[ip]) {
//         rateLimit[ip] = { count: 1, startTime: now };
//     } else {
//         if (now - rateLimit[ip].startTime < TIME_FRAME) {
//             rateLimit[ip].count++;
//         } else {
//             rateLimit[ip] = { count: 1, startTime: now };
//         }
//     }

//     if (rateLimit[ip].count > LIMIT) {
//         return res.status(429).json({ message: "Too many requests, please try again later." });
//     }

//     next();
// })