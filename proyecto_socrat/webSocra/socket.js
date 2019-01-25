
    //var wsURI = "ws://echo.websocket.org";
    var wsURI = "ws://localhost:4567/echo"
    var output;
    function init() {
         output = document.getElementById("output");
          testWebSocket(); }

    function testWebSocket() {
          websocket = new WebSocket(wsURI);
          websocket.onopen = onOpen; websocket.onclose = onClose;
          websocket.onmessage = onMessage;
          websocket.onerror = onError; }
    function onOpen(evt) {
          writeToScreen("CONNECTED");
          doSend("Alvaro");
          }
    function onClose(evt) {
          writeToScreen("DISCONNECTED"); }

    function onMessage(evt) {
          writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data + '</span>');
          websocket.close(); }

    function onError(evt) {
          writeToScreen('<span style="color: red;">ERROR:' + evt.data + '</span>'); }

    function doSend(message) {
          writeToScreen("SENT: " + message); websocket.send(message); }

    function writeToScreen(message) {
          var pre = document.createElement("p");
          pre.style.wordWrap = "break-word";
          pre.innerHTML = message;
          output.appendChild(pre); }
     window.addEventListener("load", init, false);