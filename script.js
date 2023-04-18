let bd = [
  {
    email: "mcocuy@gmail.com",
    password: "compaq",
    username: "striker",
    active: true,
  },
  {
    email: "jean@gmail.com",
    password: "jean18",
    username: "alma",
    active: true,
  },
  {
    email: "ola@gmail.com",
    password: "jotamario",
    username: "Viejo",
    active: false,
  },
];

function usuario() {
  let username = document.querySelector("#username").value;
  for (let i = 0; i < bd.length; i++) {
    if (username == bd[i].username) {
      contraseña(i);
      return;
    }
  }
  alert("El usuario no se ha encontrado");
}
function contraseña(numero) {
  let password = document.querySelector("#password").value;
  if (password == bd[numero].password) activo(numero);
  else alert("La contraseña es incorrecta");
}

function activo(numero) {
  if (bd[numero].active == true) alert("El registro ha sido exitoso");
  else alert ("La cuenta esta inactiva");
}
