const express = require('express');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const cors = require('cors');

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.post('/payment_momo', (req, res, next) => {
    const momo = require('./momo_payment');
    console.log("Amount:", req.body.amount);
    momo(req.protocol, req.get('host'), req.body.amount, res);
});

app.use(express.static(path.join(__dirname, '../frontend/build')));