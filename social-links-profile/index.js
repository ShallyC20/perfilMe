function Present() {
  const Perfi = document.createElement("div");
  Perfi.className = "Perfil";

  const Image = document.createElement("div");
  Image.className = "Imagen";

  const ImaPer = document.createElement("img");
  ImaPer.src = "./assets/images/avatar-jessica.jpeg";
  Image.appendChild(ImaPer);

  const Nomb = document.createElement("div");
  Nomb.className = "Names";

  const Namee = document.createElement("h2");
  const TextName = document.createTextNode("Carla Arancibia");
  Namee.appendChild(TextName);

  Nomb.appendChild(Namee);

  const Zona = document.createElement("div");
  Zona.className = "Lugar";

  const Lugares = document.createElement("p");
  const TextLugar = document.createTextNode("London, United Kingdom");
  Lugares.appendChild(TextLugar);

  Zona.appendChild(Lugares);

  const Textoo = document.createElement("div");
  Textoo.className = "Xd";

  const parrafo = document.createElement("p");
  const TextParraf = document.createTextNode(
    "Front-end developer and avid reader."
  );
  parrafo.appendChild(TextParraf);

  Textoo.appendChild(parrafo);

  const Botones = document.createElement("div");
  Botones.className = "button-container";

  const Boton1 = document.createElement("button");
  const Text1 = document.createTextNode("GitHub");
  Boton1.appendChild(Text1);

  const Boton2 = document.createElement("button");
  const Text2 = document.createTextNode("Frontend Mentor");
  Boton2.appendChild(Text2);

  const Boton3 = document.createElement("button");
  const Text3 = document.createTextNode("LinkedIn");
  Boton3.appendChild(Text3);

  const Boton4 = document.createElement("button");
  const Text4 = document.createTextNode("Twitter");
  Boton4.appendChild(Text4);

  const Boton5 = document.createElement("button");
  const Text5 = document.createTextNode("Instagram");
  Boton5.appendChild(Text5);

  Botones.appendChild(Boton1);
  Botones.appendChild(Boton2);
  Botones.appendChild(Boton3);
  Botones.appendChild(Boton4);
  Botones.appendChild(Boton5);

  Perfi.appendChild(Image);
  Perfi.appendChild(Nomb);
  Perfi.appendChild(Zona);
  Perfi.appendChild(Textoo);
  Perfi.appendChild(Botones);

  return Perfi;
}
const contenedorPrin = document.querySelector("#contenedor");
const botonNod = document.querySelector("#Crear");

function agregarPer() {
  const nuevaTarjeta = Present();
  contenedorPrin.insertBefore(nuevaTarjeta, contenedorPrin.firstChild);
}
botonNod.addEventListener("click", agregarPer);