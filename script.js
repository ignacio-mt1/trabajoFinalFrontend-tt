// Un poco de humor

const tituloOriginal = document.title;

function titulosEtiqueTittle() {
  if (document.hidden) {
    document.title = "¡Volvé! 😁";
  } else {
    document.title = "Bienvenido de nuevo 🎉🎇";

    setTimeout(function() {
      document.title = tituloOriginal;
    }, 3000);
  }
}

document.addEventListener("visibilitychange", titulosEtiqueTittle);




// -----------------Boton flotante------------------------


const boton = document.getElementById("botonFlotante"); /*------------------1RA VARIABLE */

function muestraBotonSub() {
      if (window.scrollY > 200) {
        boton.classList.add("visible");
      } else {
        boton.classList.remove("visible");
      }
}

window.addEventListener("scroll", muestraBotonSub)

// ---------------------LISTAS--------------------------------

const productos = [

    {
        id: "01",
        nombre: "Mate Imperial Premium- Cuero",
        imagen: "images/mate 1.jpg",
        precio: 40000
    },

    {
        id: "02",
        nombre: "Mate Imperial de Algarrobo",
        imagen: "images/mate 2.jpg",
        precio: 36392
    },

    {
        id: "03",
        nombre: "Mate camionero con base de alpaca",
        imagen: "images/mate 3.jpg",
        precio: 72339
    },

    {
        id: "04",
        nombre: "Mate de asta con bombilla de alpaca",
        imagen: "images/mate 4.jpg",
        precio: 77840
    },

    {
        id: "05",
        nombre: "Mate Cervantes de algarrobo",
        imagen: "images/mate 5.jpg",
        precio: 115050
    },

    {
        id: "06",
        nombre: "Mate Imperial Permium Delfina",
        imagen: "images/mate 6.jpg",
        precio: 98467
    },

    {
        id: "07",
        nombre: "Mate Imperial Virola de acero",
        imagen: "images/mate 7.jpg",
        precio: 59685
    },

    {
        id: "08",
        nombre: "Imperial Cincelado - Cuero Labrado",
        imagen: "images/mate 8.jpg",
        precio: 46000
    },

    {
        id: "09",
        nombre: "Mate imperial cincelado con base y esferas",
        imagen: "images/mate 9.jpg",
        precio: 57657
    },

    {
        id: "10",
        nombre: "Mate Algarrobo 2 Colores",
        imagen: "images/mate 10.jpg",
        precio: 116829
    },

]  


const resenias = [
    {   
        id: "01",
        imagen: "images/persona 1.png",
        nombre: "Lucia Galán",
        estrellas: `
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star-half"></i>
                   `, 
        fecha: "20/05/2025",
        mensaje: "Excelente la calidad",
    },


    {   
        id: "02",
        imagen: "images/persona 2.png",
        nombre: "Pablo Gutiérrez",
        estrellas: `
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                   `, 
        fecha: "30/04/2025",
        mensaje: "Increible, calidad premium",
    },


    {   
        id: "03",
        imagen: "images/persona 3.png",
        nombre: "Matias Montilla",
        estrellas: `
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                   `, 
        fecha: "20/04/2025",
        mensaje: "Inmejorable, el mejor sabor!",
    },


    {   
        id: "04",
        imagen: "images/persona 4.png",
        nombre: "Juliana Valle",
        estrellas: `
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                   `, 
        fecha: "15/05/2025",
        mensaje: "Aceptable",
    },


    {   
        id: "05",
        imagen: "images/persona 5.png",
        nombre: "Maria Fariña",
        estrellas: `
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star-half"></i>
                   `, 
        fecha: "11/04/2025",
        mensaje: "Realmente la calidad es muy buena",
    },


    {   
        id: "06",
        imagen: "images/persona 6.png",
        nombre: "Teo Barrios",
        estrellas: `
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                   `, 
        fecha: "03/04/2025",
        mensaje: "Es para aprovechar, buena relacion precio/calidad",
    },


    {  
        id: "07",
        imagen: "images/persona 7.png",
        nombre: "Luna Ruano",
        estrellas: `
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star-half"></i>
                   `, 
        fecha: "25/03/2025",
        mensaje: "Bastante bueno el producto",
    },


    {   
        id: "08",
        imagen: "images/persona 8.png",
        nombre: "Xavier Ocaña",
        estrellas: `
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                   `, 
        fecha: "07/02/2025",
        mensaje: "Buen diseño",
    },


    {   
        id: "09",
        imagen: "images/persona 9.png",
        nombre: "Lourdes Parodi",
        estrellas: `
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                   `, 
        fecha: "11/01/2025",
        mensaje: "Increible producto",
    },

    {   
        id: "10",
        imagen: "images/persona 10.jpg",
        nombre: "Damian Leiva",
        estrellas: `
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                   `, 
        fecha: "27/12/2024",
        mensaje: "Me encanto el diseño!",
    },

    {   
        id: "11",
        imagen: "images/persona 11.jpg",
        nombre: "Noelia Royo",
        estrellas: `
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star-half"></i>
                   `, 
        fecha: "15/12/2024",
        mensaje: "Muy lindo diseño y excelente calidad.",
    },

    {   
        id: "12",
        imagen: "images/persona 12.jpg",
        nombre: "Pablo  Falcon",
        estrellas: `
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                   `, 
        fecha: "9/12/2024",
        mensaje: "El material se nota resistente. Muy bueno.",
    },

]


// -----------------VARIABLES------------------------

const producTotal = document.getElementById("productos")  

const reseniTotal = document.getElementById("resenias")

const contacto = document.getElementById("contacto")

const footer = document.getElementById("footer")

const footerNav = document.getElementById("footerNav")

const footerRedes = document.getElementById("footerRedes")

const carritoVacio = document.getElementById("galeriaVacia")

const cantidad = document.querySelector(".cantidad")

const papelera = document.getElementsByClassName("botonPapele");

const botonCarrito = document.getElementById("carrito");

const carrito = document.getElementById("ventanaCarrito"); 

 

// -----------------Mostrar y cerrar carrito------------------------



function agregarCarrito() {

    carrito.insertAdjacentHTML("afterbegin", 
        `
        <h3 id="titCarrito">Galeria de Compras</h3>


        <p id="galeriaVacia">LA GALERIA ESTA VACIA</p>
        
        
        <a href="#productos"  class="agregarDesdeLista">Agregar Productos</a>
            
        
        
        `
    );
      


}

agregarCarrito()


function mostrarCarrito() {
    carrito.classList.toggle("mostrar");
    document.getElementById("fondoCarrito").classList.toggle("activo");
  
    document.body.style.overflow = carrito.classList.contains("mostrar") ? "hidden" : "auto";
  }
  

botonCarrito.addEventListener("click", mostrarCarrito) 

//funcion y evento al hacer click afuera del carrito

function cerrarCarriClickAfuera(event) {
    var clickCarrito = carrito.contains(event.target);
    var clickbotonCarri = botonCarrito.contains(event.target);
    var clickFondo = event.target.id === "fondoCarrito";
  
    if (!clickCarrito && !clickbotonCarri || clickFondo || event.target.classList.contains("agregarDesdeLista")) {
      carrito.classList.remove("mostrar");
      document.getElementById("fondoCarrito").classList.remove("activo");
      document.body.style.overflow = "auto"; 
    }
  }
  

document.addEventListener("click", cerrarCarriClickAfuera);


 
// eventos botones (+) y (-)

carrito.addEventListener("click", function(event){
    if (event.target.matches(".botonMas") || event.target.closest(".botonMas")) {
        event.stopPropagation();
        const botonMas = event.target.closest(".botonMas");
        const id = botonMas.dataset.id;
        console.log("Agregar Producto con ID:", id)

        agregarOQuitar1("+", id);
    }  
})

carrito.addEventListener("click", function(event){
    if (event.target.matches(".botonMenos") || event.target.closest(".botonMenos")) {
        event.stopPropagation();
        const botonMenos = event.target.closest(".botonMenos");
        const id = botonMenos.dataset.id;
        console.log("Agregar Producto con ID:", id)

        agregarOQuitar1("-", id);
    }  
})

// funcion agregar o quitar para boton (+) o (-)


function agregarOQuitar1(signo, id) {

    const listaCarri = document.getElementById("contenDeProductos");
  
    const elementosDeLista = listaCarri.querySelectorAll(".conteProduc");

    for (let i = 0; i < elementosDeLista.length; i++) {
        const elementoDeLista = elementosDeLista[i];
        const idLista = elementoDeLista.dataset.id;
        if (id.trim() === idLista.trim()) {

                const precioProduc = parseInt(elementoDeLista.querySelector(".valor-precio").textContent);

                let cantidadTodosProduc = parseInt(document.querySelector(".numTotalProductos").textContent);
                let precioTotalCompra = parseInt(document.querySelector(".valorTotalCompra").textContent);
                let cantidadProduc = parseInt(elementoDeLista.querySelector(".cantidad span").textContent);
                let precioTotalProduc = parseInt(elementoDeLista.querySelector(".valor-total").textContent);

                if (signo === "+") {

                    cantidadProduc += 1;
                    precioTotalProduc += precioProduc;
                    precioTotalCompra += precioProduc;
                    cantidadTodosProduc += 1;

                }else if (signo === "-") { 

                    if (cantidadProduc > 1) {

                        cantidadProduc -= 1;
                        precioTotalProduc -= precioProduc;
                        precioTotalCompra -= precioProduc;
                        cantidadTodosProduc -= 1;   
                    };
                
                };
                
                elementoDeLista.querySelector(".cantidad span").textContent = cantidadProduc;
                elementoDeLista.querySelector(".valor-total").textContent = precioTotalProduc;
                document.querySelector(".valorTotalCompra").textContent = precioTotalCompra;
                document.querySelector(".numTotalProductos").textContent = cantidadTodosProduc;

                  

        }

    }

}

//---------------------------------------------------------------------------


// evento al hacer click en el boton papelera

carrito.addEventListener("click", function(event){
    if (event.target.matches(".botonPapele") || event.target.closest(".botonPapele")) {
        event.stopPropagation();


        if (confirm("¿Estás seguro de que quieres eliminar este producto del carrito?")) {
            const botonPapelera = event.target.closest(".botonPapele");
            

            const id = botonPapelera.dataset.id;

            console.log("Eliminar Producto con ID:", id)

            const listaCarri = document.getElementById("contenDeProductos");
    
            const elementosDeLista = listaCarri.querySelectorAll(".conteProduc");
            let cantidadTodosProduc = parseInt(document.querySelector(".numTotalProductos").textContent);
            let precioTotalCompra = parseInt(document.querySelector(".valorTotalCompra").textContent);
            
            for (let i = 0; i < elementosDeLista.length; i++) {
                const elementoDeLista = elementosDeLista[i];
                const idLista = elementoDeLista.dataset.id;

                if (id.trim() === idLista.trim()) {

                    if (elementosDeLista.length === 1) {
                        vaciarCarrito()
                    }else {
                        
                        const precioProduc = parseInt(elementoDeLista.querySelector(".valor-precio").textContent);
                        const cantidadProduc = parseInt(elementoDeLista.querySelector(".cantidad span").textContent);
                        const precioTotalProduc = parseInt(elementoDeLista.querySelector(".valor-total").textContent);
                        
                    
                        precioTotalCompra -= precioTotalProduc;
                        cantidadTodosProduc -= cantidadProduc;
                        
                        
                        elementoDeLista.remove();
                        
                        // recordar actualizar!
                        document.querySelector(".valorTotalCompra").textContent = precioTotalCompra;
                        document.querySelector(".numTotalProductos").textContent = cantidadTodosProduc;
                    
                    }

                
                
                }

            }  

        }
        
    } 
})


function vaciarCarrito() {
    carrito.classList.add("carritoVacio");
    carrito.classList.remove("carrito-ventana");
    carrito.innerHTML = "";
    agregarCarrito();

}

// evento al hacer click en el boton comprar

producTotal.addEventListener("click", function(event) {
    if (event.target.matches(".boton-comprar")) {
      const id = event.target.dataset.id;
      
      console.log("ID del producto:", id);
      
      let producto = null;
  
  
      console.log(producto)
      
  
      for (let i = 0; i < productos.length; i++) {
          
          if (productos[i].id === id) {
              producto = productos[i];
              break;
          }
      }
  
      const nombre = producto.nombre;
  
      
      if (document.getElementById("galeriaVacia")){
          carrito.innerHTML = "";
  
          console.log(nombre)
  
          carrito.classList.remove("carritoVacio")
          carrito.classList.add("carrito-ventana")
  
          carrito.insertAdjacentHTML("afterbegin", 
              `
              <h3 id="titCarrito">Galeria de Compras</h3>
  
  
              <ul id="contenDeProductos">
  
  
                  <li data-id="${producto.id}" class="conteProduc">
  
  
                      <div class="producCasiComp">
  
                          <span class="e">
  
                              <img id="producImg" src="${producto.imagen}" class="producto-imagen" alt="${producto.imagen}" >
  
  
                              <div class="detalles-producto">
                                   <div>${producto.nombre}</div>
                                  <span>
                                      <span class="etiqueta">Precio $</span>
                                      <span class="valor-precio">${producto.precio}</span>
                                      </span>
  
                                  <span class="total">
                                      <span class="etiqueta-total">Total $</span>
                                      <span class="valor-total">${producto.precio}</span>
                                  </span>  
                              </div>
  
  
                          </span>
  
  
                          <div class="cantidad">
  
                              <button class="botonMenos" data-id="${producto.id}"><i class="fa-solid fa-minus"></i></button>
                              <span >1</span>
                              <button class="botonMas" data-id="${producto.id}"><i class="fa-solid fa-plus"></i></button>
  
  
                          </div>
  
  
  
  
                      </div>
  
  
                      <button class="botonPapele" data-id="${producto.id}"><i class="fa-solid fa-trash"></i></button>
  
  
  
                  </li>
  
  
              </ul>
  
              <div class="finalCompra">                
                  <div class="finalCompraA">
                          <span class="totalProd">Total de productos:</span>
                      <div>
                      <span class="numTotalProductos">1</span>
                      </div>
                  </div>
                      
                  <div class="finalCompraB">
                      <span class="totalComp">Total de la Compra: </span>
                      <div class="signoMasPrecio">
                          <span>$</span>
                          <span class="valorTotalCompra">${producto.precio}</span>
                      </div>
                  </div>
  
                  <button class="botonComprarCarri">COMPRAR</button>
                  
              </div>
  
  
  
              <div class="botonFinalCarri">
                  <button class="vaciarCarri" >Vaciar Carrito</button>
                  <button class="agregarDesdeLista">Agregar mas productos</button>
              </div>                
  
              `
  
          );
          
          
          listaCarri = document.getElementById("contenDeProductos");
  
          } else {
  
              console.log("El carrito no esta vacio.");
              
              
              const listaCarri = document.getElementById("contenDeProductos");
  
              const elementosDeLista = listaCarri.querySelectorAll(".conteProduc");
  
              let cantidadTodosProduc = parseInt(document.querySelector(".numTotalProductos").textContent);
              let precioTotalCompra = parseInt(document.querySelector(".valorTotalCompra").textContent);
              let encontrado = false;
  
              for (let i = 0; i < elementosDeLista.length; i++) {
                  const elementoDeLista = elementosDeLista[i];
                  const nombreLista = elementoDeLista.querySelector(".detalles-producto > div").textContent;
  
                  if (nombre.trim() === nombreLista.trim()) {
                  let cantidadProduc = parseInt(elementoDeLista.querySelector(".cantidad span").textContent);
                  let precioTotalProduc = parseInt(elementoDeLista.querySelector(".valor-total").textContent);
                  const precioProduc = parseInt(elementoDeLista.querySelector(".valor-precio").textContent);
  
                 
                  cantidadProduc += 1;
                  precioTotalProduc += precioProduc;
                  precioTotalCompra += precioProduc;
                  cantidadTodosProduc += 1;
  
                  
                  elementoDeLista.querySelector(".cantidad span").textContent = cantidadProduc;
                  elementoDeLista.querySelector(".valor-total").textContent = precioTotalProduc;
                  document.querySelector(".valorTotalCompra").textContent = precioTotalCompra;
                  document.querySelector(".numTotalProductos").textContent = cantidadTodosProduc;
  
                  encontrado = true;
                  break;
  
                  }
              }
              
              if(!encontrado) {
                  
                      console.log("El producto no esta en la lista.");
  
  
                      listaCarri.insertAdjacentHTML("beforeend", 
                          `
                          <li data-id="${producto.id}" class="conteProduc">
  
  
                          <div class="producCasiComp">
  
                              <span class="e">
  
                                  <img id="producImg" src="${producto.imagen}" class="producto-imagen" alt="${producto.imagen}" >
  
  
                                  <div class="detalles-producto">
                                      <div>${producto.nombre}</div>
                                      <span>
                                          <span class="etiqueta">Precio $</span>
                                          <span class="valor-precio">${producto.precio}</span>
                                      </span>
  
                                      <span class="total">
                                          <span class="etiqueta-total">Total $</span>
                                          <span class="valor-total">${producto.precio}</span>
                                      </span>  
                                  </div>
  
  
                              </span>
  
  
                              <div class="cantidad">
  
                                  <button class="botonMenos" data-id="${producto.id}"><i class="fa-solid fa-minus"></i></button>
                                  <span >1</span>
                                  <button class="botonMas" data-id="${producto.id}"><i class="fa-solid fa-plus"></i></button>
  
  
                              </div>
  
  
  
  
                          </div>
  
  
                          <button class="botonPapele" data-id="${producto.id}"><i class="fa-solid fa-trash"></i></button>
  
  
  
                      </li>
                          
                          
                          `
                      );
                      precioTotalCompra += producto.precio;
                      cantidadTodosProduc += 1
                      document.querySelector(".valorTotalCompra").textContent = precioTotalCompra;
                      document.querySelector(".numTotalProductos").textContent = cantidadTodosProduc;
  
              }
  
            }
  
    }
  });








// ir a Productos desde carrito


function irAProduc(event) {
  if (event.target.classList.contains("agregarDesdeLista")) {
  producTotal.scrollIntoView({ behavior: "smooth" }); 
  }
}

carrito.addEventListener("click", irAProduc) 

// vaciar carrito

function vaciarCarri(event) {
    if (event.target.classList.contains("vaciarCarri")) {
        
        
        if (confirm("¿Estás seguro de que quieres vaciar todo el carrito? Esta acción no se puede deshacer.")) {
            event.stopPropagation();
            vaciarCarrito()
        }
    
    }
};

carrito.addEventListener("click", vaciarCarri);

// mensaje al comprar

carrito.addEventListener("click", function(event) {
    if (event.target.matches(".botonComprarCarri")) {
        event.stopPropagation();
        
        
        const totalCompra = document.querySelector(".valorTotalCompra").textContent;
        const cantidadProductos = document.querySelector(".numTotalProductos").textContent;
        
        
        alert(`¡Gracias por tu compra! 🎉\n\nHas comprado ${cantidadProductos} producto(s)\nTotal: $${totalCompra}\n\n¡Tu pedido será procesado pronto!`);
        
        vaciarCarrito();
    }
});




// -----------------FUNCIONES QUE CARGAN LA PAGINA------------------------




function agregarProduc() {
    for (let i = 0; i < productos.length; i++) {

        const producto = productos[i]

        const divProducto = document.createElement("div");

        divProducto.insertAdjacentHTML("afterbegin",
            `
            <div class="produc">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="produc">
                    <h3 class="tituloProduc">${producto.nombre}</h3> 
                    <span>| Código: ${producto.id} |</span>
                    <span id="precio">Precio: $ ${producto.precio}</span>
                    <button class="boton-comprar" type="button" data-id="${producto.id}">Comprar</button>
                </div>
            </div>
            `
        );

        // recordar agrega el div que cree al contenedor
        producTotal.appendChild(divProducto);
    }
    
}


function agregarReseni() {
    for (let i = 0; i< resenias.length; i++) {
        const resenia = resenias[i]

        

        reseniTotal.insertAdjacentHTML ("afterbegin", 

            `
            <div class="resen">
                    <img src="${resenia.imagen}" alt="${resenia.nombre}">
                    <div class="nombreResen">
                        <span class="resen-nombre">${resenia.nombre}</span>
                        ${resenia.estrellas}
                        <div class="resen-fecha">${resenia.fecha}</div>
                    </div>
                    <p>${resenia.mensaje}</p>

            </div>
 
            `
 
            );

    }

}

function agregarContacto() {
    contacto.insertAdjacentHTML ("afterbegin", 

            `
                <h2>Contacto</h2>

                <form action="https://formspree.io/f/xwpoobqd" method="post">

                    <div class="campos">
                        <label for="Nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre" required minlength="2"
                            maxlength="30">
                    </div>


                    <div class="campos">
                        <label for="Nombre">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Email" required>
                    </div>

                    <div class="campos">
                        <p>Mensaje:</p>
                        <textarea name="mensaje" rows="4" cols="30"></textarea>
                    </div>


                    <div class="campos">
                        <select name="asunto" required>
                            <option value="consulta">Consulta</option>
                            <option value="reclamo">Reclamo</option>
                        </select>
                    </div>

                    <button type="submit" class="campos">Enviar</button>

                </form>


                <h3 id="tituloMaps">Donde encontrarnos</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26426.893851118723!2d-59.0249984!3d-34.111488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1746457847162!5m2!1ses!2sar"
                    width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade" class="responsive-iframe">

                </iframe>
 
            `
            );
}


function agregarFooterNav() {

    footerNav.insertAdjacentHTML ("afterbegin", 

            `
            <nav>
                <ul class="cal-sans-regular">
                    <li><a href="#inicio">INICIO</a></li>
                    <li><a href="#productoss">PRODUCTOS</a></li>
                    <li><a href="#opiniones">OPINIONES</a></li>
                    <li><a href="#contacto">CONTACTO</a></li>
                </ul>
            </nav>
            `
            );
}

function agregarFooterRedes() {

    footerRedes.insertAdjacentHTML ("afterbegin",

        `
            <h4>Redes</h4>
            <ul>
                <li><a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-square-instagram"></i> Instagram</a></li>
                <li><a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                <li><a href="https://www.tiktok.com" target="_blank"><i class="fa-brands fa-tiktok"></i> TikTok</a></li>
            </ul>
 
        `
    );
}

function agregarFooter() {
    agregarFooterNav();
    agregarFooterRedes();
}




 

agregarProduc()

agregarReseni()

agregarContacto()

agregarFooter()
