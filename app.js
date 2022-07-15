const createError = require("http-errors");
const express = require("express");

const session = require("express-session");
const flash = require("connect-flash");

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//En la aplicación Node.js-Express, si ha creado un nuevo archivo de rutas, debe definir las rutas en el archivo app.js.
const fileuploadRouter = require("./routes/fileupload");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//necesitamos implementar el módulo connect-flash y el módulo express-session,
app.use(
  session({
    secret: "secret",
    cookie: { maxAge: 60000 },
    saveUninitialized: false,
    resave: false,
  })
);
app.use(flash());

app.use(express.static(path.resolve(__dirname, "upload")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//archivo de rutas en particular.
app.use("/fileupload", fileuploadRouter);
//En Node.js, no podemos mostrar imágenes en el directorio desde un directorio estático, por lo que para mostrar imágenes desde el directorio, tenemos que definir reglas en el archivo app.js, que puede ver a continuación...
app.use("/upload", express.static("upload"));


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
