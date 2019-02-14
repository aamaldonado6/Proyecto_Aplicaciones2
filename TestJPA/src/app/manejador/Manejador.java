package app.manejador;

import app.JPAUtil;
import app.manejador.CasosProfesor.IntProfesor;
import entites.Profesor;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
    public void onMessage(Session session, String  message) throws IOException {
        System.out.println(message+"--RESPUESTA");
        IntProfesor ip= IntProfesor.getInstancia();
        /*for (Object p : ip.buscarUsuario(op)){
          cadenatt=cadenatt+"<tr><td>"+ip.buscarUsuario(op)+"</td></tr>";
        }*/
        session.getRemote().sendString(ip.buscarUsuario(message));

    }
}