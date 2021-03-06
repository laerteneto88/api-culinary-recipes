
// importar as biblitecas e frameworks
// import libraries and frameworks

// responsavel (MVC) MRC
// responsible MRC (Model Route Controller)
var express = require('express');

//converte o javaScript para a convenção ECMAScript 2015 (ES6)
//convert javaScript to ES6
var bodyParser = require('body-parser');

// importar 'express-validator'
// import 'express-validator'
var expressValidate = require('express-validator');

// implementa a framework 'express' na variavel 'app'
// implements the 'express' framework in the variable 'app'
var app = express();



// acrescenta biblioteca 'express-validator'
// add library 'express-validator'
app.use(expressValidate());


// formata a´presentação json
// json presentation format
app.set("json spaces", 3);


// anexar variaveis de configuração a app
// append configuration variables to app
app.set('name-api', 'api-culinary-recipes');
app.set('versao-api', '1');


// definição porta
// port setting
app.set("port",3000);

// app.get('port') pede a porta defenida app.set(...)
app.listen(app.get('port'));



// acrescenta funções middleware
// add  middleware function
app.use(bodyParser.urlencoded({extended: true}));

// bodyParser converte os dados em json - gravar e actualizar
// assim o 'express' utiliza 'bodyParser'
// bodyParser converts data to json - write and update
// so the 'express' uses 'bodyParser'
app.use(bodyParser.json());


// exporta module app; permite ser importado em outros locais
// export module app; allowed to be imported in other places
module.exports = app;
 