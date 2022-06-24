function ArrayValido(arr,num) {
  try {
    if(!arr && !num) {throw new ReferenceError("Envie os parâmetros !.");
 }

if(typeof arr !=+ 'object') {throw new TypeError("O array tem que ser do tipo 'object'.");
 }

if(typeof num !== 'number') {throw new TypeError("Apenas digite números, por favor.");
 }

if(arr.length !== num ) {throw new RangeError("Tamanho inválido.");
 }
 
 return arr;
 
  }

  catch(e) {
    if (e instanceof ReferenceError ) {
        console.log("Este é um erro de referência (ReferenceError).");
        console.log(e.message);
    }

    else if(e instanceof TypeError) {
        console.log("Este é um erro de tipo (TypeError). ");
        console.log(e.message);
    }

    else if (e instanceof RangeError) {
        console.log("Este é um erro de alcance (RangeError). ");
        console.log(e.message);
    }

    else {
        console.log("Tipo de erro não esperado: = "+ e);
    }

  }
}

console.log(ArrayValido());
