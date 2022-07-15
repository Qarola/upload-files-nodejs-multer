const express = require("express");

const multer = require("multer");

const router = express.Router();

router.get("/", function (request, response, next) {
  response.render("fileupload", {
    title: "File Upload in Node JS - Express using Multer" ,
    file: request.flash("success"),
  });
});
/*  */
//Ruta de post, primero tenemos que definir la configuración de carga de archivos multer.
router.post("/", function (request, response, next) {
  const storage = multer.diskStorage({
	//En la configuración de carga de archivos múltiples, primero tenemos que definir los detalles del destino de carga de archivos.
    destination: function (request, file, callback) {
      callback(null, "./upload");
    },
    filename: function (request, file, callback) {
      var temp_file_arr = file.originalname.split(".");

      var temp_file_name = temp_file_arr[0];

      var temp_file_extension = temp_file_arr[1];

      callback(
        null,
        temp_file_name + "-" + Date.now() + "." + temp_file_extension
      );
    },
	//Después de definir la configuración de carga de archivos multer, cargará el archivo en el directorio de carga ./upload
  });

  //mostrar el archivo cargado
// necesitamos almacenar el nombre del archivo cargado en el mensaje flash de la sesión, por lo que a continuación puede ver que, cuando la página web ha sido redirigida después de la carga del archivo, en ese momento tenemos almacenado el nombre del archivo cargado en el mensaje flash de la sesión. Y en las rutas de obtención, también tenemos que definir el mensaje flash de la sesión de paso al archivo de plantilla.
  let upload = multer({ storage: storage }).single("pdfFile");

  upload(request, response, function (error) {
    if (error) {
      return response.end("Error Uploading File");
    } else {
      request.flash("success", request.file.filename);

      response.redirect("/fileupload");
    }
  });
});

module.exports = router;
