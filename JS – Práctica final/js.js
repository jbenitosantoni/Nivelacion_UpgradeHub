var y = document.getElementById("preguntas");
var heading_preguntas = document.createElement("h2");
heading_preguntas.innerHTML = ("Preguntas para Formulario");
y.appendChild(heading_preguntas);
var name;
var name2;
var name3;
var name4;
var id;
var id2;
var id3;
var id4;
var elementos = [];

var boton_nombre = document.createElement("button");
boton_nombre.setAttribute("type", "button");
boton_nombre.innerHTML = ("Campo Texto");
y.appendChild(boton_nombre);

boton_nombre.onclick = function() {
  name = prompt("Name");
  id = prompt("ID");
}

var boton_numero = document.createElement("button");
boton_numero.setAttribute("type", "button");
boton_numero.innerHTML = ("Campo Numero");
y.appendChild(boton_numero);

boton_numero.onclick = function() {
  name2 = prompt("Contenido");
  id2 = prompt("ID");
}

var boton_email = document.createElement("button");
boton_email.setAttribute("type", "button");
boton_email.innerHTML = ("Campo Email");
y.appendChild(boton_email);

boton_email.onclick = function() {
  name3 = prompt("Name");
  id3 = prompt("ID");
}

var boton_lista = document.createElement("button");
boton_lista.setAttribute("type", "button");
boton_lista.innerHTML = ("Campo Lista");
y.appendChild(boton_lista);

boton_lista.onclick = function() {
  name4 = prompt("Name");
  id4 = prompt("ID");
  var cantidad = prompt("Cantidad elementos lista");
  elementos = [];
  for (var i = 0; i < cantidad; i++) {
    elementos.push(prompt("Elemento " + (i + 1)));
  }
}
y.appendChild(document.createElement("br"));
y.appendChild(document.createElement("br"));

var boton_terminado = document.createElement("button");
boton_terminado.setAttribute("type", "button");
boton_terminado.innerHTML = ("Terminado");
y.appendChild(boton_terminado);

boton_terminado.onclick = function() {
  formulario();
}

// Comienza formulario
function formulario() {
  var x = document.getElementById("formulario");
  var createform = document.createElement("form");
  createform.setAttribute("action", "send");
  createform.setAttribute("method", "post");
  x.appendChild(createform);

  var heading_form = document.createElement("h2");
  heading_form.innerHTML = ("Formulario");
  createform.appendChild(heading_form);

  var label_campotexto = document.createElement("label");
  label_campotexto.innerHTML = ("Texto: ");
  createform.appendChild(label_campotexto);
  var input_campotexto = document.createElement('input');
  input_campotexto.setAttribute("type", "text");
  input_campotexto.setAttribute("name", name);
  input_campotexto.setAttribute("id", id);
  createform.appendChild(input_campotexto);
  createform.appendChild(document.createElement("br"));

  var label_camponumero = document.createElement("label");
  label_camponumero.innerHTML = ("Numero: ");
  createform.appendChild(label_camponumero);
  var input_camponumero = document.createElement('input');
  input_camponumero.setAttribute("type", "number");
  input_camponumero.setAttribute("name", name2);
  input_camponumero.setAttribute("id", id2);
  createform.appendChild(input_camponumero);
  createform.appendChild(document.createElement("br"));

  var label_campoemail = document.createElement("label");
  label_campoemail.innerHTML = ("Email: ");
  createform.appendChild(label_campoemail);
  var input_campoemail = document.createElement('input');
  input_campoemail.setAttribute("type", "email");
  input_campoemail.setAttribute("name", name3);
  input_campoemail.setAttribute("id", id3);
  createform.appendChild(input_campoemail);
  createform.appendChild(document.createElement("br"));

  var label_select = document.createElement("label");
  label_select.innerHTML = ("Select: ");
  createform.appendChild(label_select);

  var select_id = document.createElement("select");
  select_id.setAttribute("id", id4);
  select_id.setAttribute("name", name4);
  createform.appendChild(select_id);
  var select = document.getElementById(id4);
  for (var i = 0; i < elementos.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", i)
    option.innerHTML = (elementos[i]);
    select.appendChild(option);
  }
}