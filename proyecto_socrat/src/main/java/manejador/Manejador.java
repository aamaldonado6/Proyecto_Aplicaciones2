package manejador;

import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;

@WebSocket
public class Manejador {

    @OnWebSocketConnect
    public void onConnect(Session session) throws Exception {
        System.out.println("Connected");
    }

    @OnWebSocketClose
    public void onClose(Session session, int statusCode, String reason) {
        System.out.println("Closed");
        System.out.printf("%d - %s\n", statusCode, reason);
    }

    @OnWebSocketMessage
    public void onMessage(Session session, String message) {
        System.out.println(message+"--sasdasdas");

        try {
            if (session.isOpen()) {
                if (message.equals("Alvaro")){

                    session.getRemote().sendString("<h1>HOLA: "+message+" Completa el siguiente formulario </h1>\n" +
                            "<input type=\"radio\" name=\"transporte\" value=\"1\">Coche\n" +
                            "\n" +
                            "<br>\n" +
                            "\n" +
                            "<input type=\"radio\" name=\"transporte\" value=\"2\">Avión\n" +
                            "\n" +
                            "<br>\n" +
                            "\n" +
                            "<input type=\"radio\" name=\"transporte\" value=\"3\">Tren");

                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

