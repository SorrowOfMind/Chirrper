require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(morgan('dev'));
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

//set a cookie with unique id
app.use(session({
    secret: process.env.SECRET,
    cookie: {
        secure: process.env.NODE_ENV === "production" ? "true" : "auto",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    },
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

const mainRoutes = require('./routes/mainRoutes');
app.use("/", mainRoutes);

const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

app.listen(PORT, () => console.log('Server up and running'));