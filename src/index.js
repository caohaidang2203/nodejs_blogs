const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes/index.js');
//Xử lys dữ liệu từ form submit lên
app.use(express.urlencoded({
    extended: true
}));
//Xử lý dữ liệu qua việc sử dụng các thư viện trong js
//XMLHttpRequest, fetch, axios,...
app.use(express.json());

//Xử lý khi các file tĩnh nó sẽ vào public path
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})