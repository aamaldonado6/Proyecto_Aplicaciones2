
//var wsURI = "ws://echo.websocket.org";
var wsURI = "ws://localhost:4567/echo"
var output;
var usP;
var arregloDeSubCadenas;

function testWebSocket() {
  this.output = document.getElementById("output");
  websocket = new WebSocket(this.wsURI);
  websocket.onopen = onOpen; websocket.onclose = onClose;
  websocket.onmessage = onMessage;
  websocket.onerror = onError; }
function registrarPreguntasResp(preg, idMateria) {
    var resultado2=[];
    var idnumres2=document.getElementsByName("cantidaRes");
    for(var i=0;i<idnumres2.length;i++)
    {
        resultado2.push(idnumres2[i].value);
    }
    var arrayData2 = resultado2;

    ms="4-"+preg+"-"+idMateria+"-"+arrayData2[0]+"-"+arrayData2[1]+"-"+arrayData2[3];
    doSend(ms)
    websocket.onclose=onClose;
}
function cargarCursos() {
    out = document.getElementById("nopro").innerText;
    doSend("2-"+out);

}
function registrarNcurso(nc) {
    ca=document.getElementById("nopro").innerText
    console.log("ca"+ca);
    var cadena2 = ca,
        separador2 = "-",
        arregloDeSubCadenas2 = cadena2.split(separador2);
    intA=parseInt(arregloDeSubCadenas2[1]);
    doSend(nc+"-"+arregloDeSubCadenas2[1]);

}
function  iniciarUsuario(us){
    this.output = document.getElementById("output");
    this.usP=us;
    websocket = new WebSocket(this.wsURI);
    websocket.onopen = onOpen;
    websocket.onmessage=onMessage;

}
function onOpen(evt) {
  //writeToScreen("CONNECTED");
  doSend(usP);
}
function onClose(evt) {
  console.log("desconectado!!!")}

function onMessage(evt) {

    console.log("obtiene datos:"+evt.data);
    var cadena = evt.data,
        separador = "-",
        arregloDeSubCadenas = cadena.split(separador);
    intA=parseInt(arregloDeSubCadenas[0]);
    console.log(intA);
    switch(intA) {
        case 1:
            writeUsuario('<span style="color: coral">Bienvenid@:<h3 id=nopro style="color: cadetblue;">'+arregloDeSubCadenas[1]+"-"+arregloDeSubCadenas[2]+ '</h3></span>');
            break;
        case 2:
           WriteCrusos(arregloDeSubCadenas[1]);
            break;
        default:
        // code block
    }

  //websocket.close();
    }

function onError(evt) {
  writeToScreen('<span style="color: red;">ERROR:' + evt.data + '</span>'); }

function doSend(message) {
    console.log("envia mensaje:"+message);
 // writeToScreen("SENT: " + message);
  websocket.send(message); }

function WriteCrusos(message) {
    this.output = document.getElementById("cursostt");
    var prec = document.createElement("label");
    prec.innerHTML = message;
    output.appendChild(prec);

}
function writeUsuario(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
    cargarCursos();
}
function writeToScreen(message) {
  var pre = document.createElement("table");
  pre.style.wordWrap = "break-word";
  pre.className="table";
  pre.id="tt";
    var pre1 = document.createElement("thead");
    pre1.className="thead-dark";
    pre1.innerHTML = "<tr><th scope=\"col\">hola</th>";

    pre.innerHTML = message;

  output.appendChild(pre);
    document.getElementById("tt").append(pre1);
}
//window.addEventListener("load", this.init, false)
