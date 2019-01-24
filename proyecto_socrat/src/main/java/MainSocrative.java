import manejador.Manejador;

import static spark.Spark.*;
public class MainSocrative {
    public static void main(String[] args) {
        webSocket("/echo", Manejador.class);
        init();
    }
}
