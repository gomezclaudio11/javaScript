//OBJETOS
const persona1 = {
    nombre: "Ana",
    apellido: "val",    
    edad: 29
};

console.log(persona1.nombre);
console.log(persona1["apellido"]);
console.log(persona1.edad = 31);
console.log(persona1);
//GETTER SETTER
var o = {
    a: 7,
    get b (){
        return this.a + 1;
    },
    set c (x){
        this.a = x /2;
    }
};
console.log(o.a); //7
console.log(o.b); //8
o.c = 50; // metodo set c(x)
console.log(o.a);//25

//CONSTRUCTORES
function Persona (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.hablar = function () {console.log("hola soy "+ this.nombre);}
}

const persona2 = new Persona ( "clau", "go", 33);
const persona3 = new Persona ( "male", "ge", 23);
console.log(persona2, persona3);
//METODOS
console.log(persona2.nombre.toUpperCase());
persona2.hablar();//metodo personalizado

//OPERADOR IN BUCLE FOR IN
console.log("nombre" in persona1);//devuelve true si existe
console.log("direccion" in persona1);//devuelve false si no existe

//CLASES
class Usuario {
    constructor (nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar (){
        console.log("hola soy "+ this.nombre);
    }
}

const usuario1 = new Usuario ("miki", 32, "9 de julio")
console.log(usuario1);
usuario1.hablar()

class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva (){
        console.log(this.precio = this.precio * 1.21)
    }
    vender (){
        console.log(this.vendido = true);
    }
}
const producto1 = new Producto ("arroz", "100");
const producto2 = new Producto ("azucar", "300");
producto1.sumaIva();
producto2.sumaIva();
producto2.vender();

class Libro {
    constructor ( titulo, autor, precio) {
        this.titulo = titulo.toUpperCase();
        this.autor = autor;
        this.precio = parseInt(precio)
    }
    envio ( ){
        console.log( this.precio= this.precio + 300);
    }
}

const libro1 = new Libro ("harry Potter", "asd", "100")
console.log(libro1);
libro1.envio()

//getter
class Rectangulo {
    constructor (alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    // Getter
    get area() {
       return this.calcArea();
     }
    // Método
    calcArea () {
      return this.alto * this.ancho;
    }
  }
  
  const cuadrado = new Rectangulo(10, 10);
  
  console.log(cuadrado.area); // 100

  // class extends

  class Animal {
    constructor (nombre) {
        this.nombre= nombre;
    }
    hablar(){
        console.log(this.nombre + "hace ruido");
    }
  }

  class Perro extends Animal {
    hablar(){
        console.log(this.nombre + " gua gua");
    }
  }

  const golden = new Perro ("golden")
  console.log(golden);
  golden.hablar();

  //SUPER

  class Gato {
    constructor(nombre){
        this.nombre = nombre;
    }
    hablar(){
        console.log(this.nombre+ "hace ruido");
    }
  }

  class Leon extends Gato {
    hablar() {
        super.hablar();
        console.log(this.nombre+ "maulla");
    }
  }

  const guepardo = new Leon ("guepardo");
  console.log(guepardo);
  guepardo.hablar