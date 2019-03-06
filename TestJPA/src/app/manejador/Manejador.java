package app.manejador;

import app.JPAUtil;
import app.manejador.CasosProfesor.IntProfesor;
import com.google.gson.Gson;
import entites.Profesor;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketMessage;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;
import org.json.JSONObject;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@WebSocket
public class Manejador {


    @OnWebSocketConnect
    public void onConnect(Session session) throws Exception {
        String userName="Profesor"+IntProfesor.userNumber.incrementAndGet();
        IntProfesor.userNameMap.put(session,userName);
        System.out.println("Connected="+userName);
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
        session.getRemote().sendString(ip.datosProfesor(ip.userNameMap.get(session),message));

    }
}