package app.manejador.CasosProfesor;

import app.JPAUtil;
import entites.Curso;
import entites.Profesor;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;

public class IntProfesor {
    private static IntProfesor instancia;
    private IntProfesor(){
    }
    public static IntProfesor getInstancia(){
        if (instancia==null){
            instancia= new IntProfesor();
        }
        return instancia;
    }
    String nombreFP="error";
    List<Profesor> listaPro = new ArrayList<>();
    List<Curso> listaCur = new ArrayList<>();

    String lup="";
    public String buscarUsuario(String op){
        String[] parts = op.split("-");
        String part1 = parts[0];
        String part2 = parts[1];
        int p1=Integer.parseInt(part1);
        EntityManager entity = JPAUtil.getEntityManagerFactory().createEntityManager();
            switch (p1) {
                case 1:
                    Query query=entity.createQuery("SELECT p FROM Profesor p");
                    this.listaPro =query.getResultList();
                    for (Profesor p : listaPro) {

                        if (p.getNombre().equals(part2)){
                           this.nombreFP=p.getNombre();}
                        }
                    if (nombreFP.equals("error")){
                        entity.close();
                        System.out.println("no se encontro el usuario");
                        break;
                    }
                    nombreFP="1-"+nombreFP;
                    break;

                case 2:
                    System.out.println("hola");
                    Query query2=entity.createQuery("SELECT c FROM Curso c INNER JOIN Profesor p ON c.id_profesor=p.idprofesor where p.nombre='Eva'");
                    this.listaCur =query2.getResultList();
                    this.nombreFP="";
                    for (Curso c : listaCur) {
                        this.nombreFP=nombreFP+"<label><input type='radio' name='optcur' value='"+c.getNombre_curso()+"'>"+c.getNombre_curso()+"</label>";
                    }

                    if (nombreFP.equals("error")){
                        entity.close();
                    }
                    this.nombreFP="2-"+nombreFP;

                    break;
                case 3:
                    System.out.println("Digite el id del profesor a actualizar:");


                    break;
                case 4:
                    System.out.println("Digite el id del profesor a eliminar:");

                    break;
                case 5:entity.close();
                    JPAUtil.shutdown();
                    break;

                default:
                    System.out.println("Opción no válida\n");
                    break;
            }
        System.out.println(nombreFP);
        return (nombreFP);
    }

}
