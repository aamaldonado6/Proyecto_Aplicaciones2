package app;

import app.manejador.Manejador;
import app.manejador.ManejadorAlumno;
import entites.Producto;
import entites.Profesor;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static spark.Spark.init;
import static spark.Spark.webSocket;

public class MainApp {
    public static void main(String[] args) {

        webSocket("/profesor", Manejador.class);
        webSocket("/alumno", ManejadorAlumno.class);
        init();

    }}
