package app;

import app.manejador.Manejador;
import entites.Profesor;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static spark.Spark.get;
import static spark.Spark.webSocket;

public class Pruebas {
    public static void main(String[] args) {
        /*
        // TODO Auto-generated method stub
        webSocket("/echo", Manejador.class);
        // init();
        //SET GLOBAL time_zone = '-3:00';
        int opcion = 0;
        Scanner scanner = new Scanner(System.in);
        Profesor producto;

        EntityManager entity = JPAUtil.getEntityManagerFactory().createEntityManager();
        while (opcion!=5) {
            System.out.println("1. Crear Producto");
            System.out.println("2. Buscar Producto");
            System.out.println("3. Actualizar Producto");
            System.out.println("4. Eliminar Producto");
            System.out.println("5. Salir");
            System.out.println("Elija una opción:");

            opcion = scanner.nextInt();
            switch (opcion) {
                case 1:
                    System.out.println("Digite el nombre del producto:");
                    producto = new Profesor();
                    producto.setIdprofesor(null);
                    scanner.nextLine();
                    producto.setNombre(scanner.nextLine());

                    System.out.println("Digite el precio del producto:");
                    producto.setRol(scanner.nextLine());
                    System.out.println(producto);
                    entity.getTransaction().begin();
                    entity.persist(producto);
                    entity.getTransaction().commit();
                    System.out.println("Producto registrado..");
                    System.out.println();
                    break;

                case 2:
                    System.out.println("Digite el id del producto a buscar:");
                    producto = new Profesor();
                    producto = entity.find(Profesor.class, scanner.nextLong());
                    if (producto != null) {
                        System.out.println(producto);
                        System.out.println();
                    } else {
                        System.out.println();
                        System.out.println("Producto no encontrado... Lista de productos completa");
                        List<Profesor> listaProductos= new ArrayList<>();

                        Query query=entity.createQuery("SELECT p FROM Profesor p");
                        listaProductos=query.getResultList();
                        for (Profesor p : listaProductos) {
                            System.out.println(p);
                        }

                        System.out.println();
                    }

                    break;
                case 3:
                    System.out.println("Digite el id del producto a actualizar:");
                    producto = new Profesor();

                    producto = entity.find(Profesor.class, scanner.nextLong());
                    if (producto != null) {
                        System.out.println(producto);
                        System.out.println("Digite el nombre del producto:");
                        scanner.nextLine();
                        producto.setNombre(scanner.nextLine());
                        System.out.println("Digite el precio del producto:");
                        producto.setRol(scanner.nextLine());
                        entity.getTransaction().begin();
                        entity.merge(producto);
                        entity.getTransaction().commit();
                        System.out.println("Producto actualizado..");
                        System.out.println();
                    } else {
                        System.out.println("Producto no encontrado....");
                        System.out.println();
                    }
                    break;
                case 4:
                    System.out.println("Digite el id del producto a eliminar:");
                    producto = new Profesor();

                    producto = entity.find(Profesor.class, scanner.nextLong());
                    if (producto != null) {
                        System.out.println(producto);
                        entity.getTransaction().begin();
                        entity.remove(producto);
                        entity.getTransaction().commit();
                        System.out.println("Producto eliminado...");
                    } else {
                        System.out.println("Producto no encontrado...");
                    }
                    break;
                case 5:entity.close();JPAUtil.shutdown();
                    break;

                default:
                    System.out.println("Opción no válida\n");
                    break;
            }
        } */
    }

}