package app.manejador;

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

                    session.getRemote().sendString("<nav class='navbar bg-success'>"+
                                                      "<ul class='list-inline'>"+
                                                        "<li class='list-inline-item'>"+
                                                            "<h3 class='text-white' id='he'>"+message+"</h3>"+
                                                        "</li></ul></nav>");

                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

