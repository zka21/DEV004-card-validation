const validator = {
  isValid:(digitos)=> {
    
    const arrayDigitos = digitos.split("").map(Number);
    const digitosInvertido = arrayDigitos.reverse();

    for (let i = 1; i <= digitos.length - 1 ;i=i+2){
      let producto=0;
      let exceso ="";
      producto=digitosInvertido[i]*2;
      
      if (producto>=10) {
        exceso=String(producto);
        producto=parseInt(exceso[0])+parseInt(exceso[1]);
      }
      digitosInvertido[i]=producto
    }
    let suma =0;
    for (const n of digitosInvertido){
      suma += n;
    }   
    return suma % 10 === 0 
    
  },

  maskify: (digitos) => {
    let mask = "";
    let resultado = "";
    if (digitos.length > 4 ) {
      const fourSaved = digitos.slice(-4);
      for(let i = 0; i< digitos.length -4; i++){ 
        mask = mask + "#"
      }
      resultado = mask + fourSaved;
    } else {
      resultado = digitos;
    }
    return resultado;
  },
}
export default validator;





// const fourSaved = numero.slice(-7);//devuelve los numeros seleccionados en un nuevo array en este caso llamado fourSaved
    
//     const numberArray = String(numero).split('');// esta linea creo que esta demas por que el foursaved es un array
//     console.log(numberArray);
//     for (let i = 0; i < numberArray.length; i++ ) {
//       numberArray[i] = numberArray [i].replace(/[a-z0-9]/g, "#");

//     }
//       const backToString = numberArray.join("");//no lo esta colviendo string
//       // console.log(backToString);
//       const masked = backToString.slice(0,-4) + fourSaved;
      
// console.log(masked);
//     return masked; 