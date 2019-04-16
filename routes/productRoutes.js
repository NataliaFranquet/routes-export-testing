// declaramos e importamos los elementos necesarios de express
// como son la biblioteca express en sí y extraemos su router
const express = require('express');
const router  = express.Router();

// asociamos al router extraido todos los endpoints que deseemos
// recuerda que no tienen por qué se todos .gets, podrías poner .post, .put o .delete
router.get('/books', (req, res, next) => {
  res.json({books: ["a", "b", "c"]})
});

router.get('/phones', (req, res, next) => {
  res.json({phones: ["t1", "t2", "t3"]})
});

// exportamos las rutas que hemos generado y asociado al router
// para su consumo por otros archivos via require()
module.exports = router;
