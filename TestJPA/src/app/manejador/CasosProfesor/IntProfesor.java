package app.manejador.CasosProfesor;

import app.JPAUtil;
import entites.*;

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
    int lup=0;
    Curso curso;
    Preguntas preguntas;
    Respuestas respuestas;
    Alumno alumno;
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
                           this.nombreFP=p.getNombre()+"-"+p.getIdprofesor();}
                        }
                    if (nombreFP.equals("error")){
                        entity.close();
                        System.out.println("no se encontro el usuario");
                        break;
                    }
                    nombreFP="1-"+nombreFP;
                    break;

                case 2:
                    Query query2=entity.createQuery("SELECT c FROM Curso c INNER JOIN Profesor p ON c.id_profesor=p.idprofesor where p.nombre='"+part2+"'");
                    this.listaCur =query2.getResultList();
                    this.nombreFP="";
                    for (Curso c : listaCur) {
                        this.nombreFP=nombreFP+"<label><input type='radio' name='optcur' value='"+c.getIdcurso()+"'>"+c.getNombre_curso()+"</label>";
                        this.lup=c.getId_profesor();
                    }

                    if (nombreFP.equals("error")){
                        entity.close();
                    }
                    String l =String.valueOf(lup);
                    this.nombreFP="2-"+nombreFP+"-"+l;

                    break;
                case 3:
                    String part3 = parts[2];
                    System.out.println(part3+"-EEEEE");
                    int idpro=Integer.parseInt(part3);
                    curso=Curso.getInstancia();
                    curso.setIdcurso(null);
                    curso.setId_profesor(idpro);
                    curso.setNombre_curso(part2);
                    entity.getTransaction().begin();
                    entity.persist(curso);
                    entity.getTransaction().commit();
                    System.out.println("Curso registrado.."+part2);
                    nombreFP="";
                    break;
                case 4:
                    int pp = Integer.parseInt(parts[2]);
                    preguntas=Preguntas.getInstancia();
                    preguntas.setIdpreguntas(null);
                    preguntas.setId_curso(pp);
                    preguntas.setPregunta(part2);
                    entity.getTransaction().begin();
                    entity.persist(preguntas);
                    entity.getTransaction().commit();
                    System.out.println("Pregunta registradas..");

                    /*////respuestas
                    respuestas=Respuestas.getInstancia();
                    respuestas.setIdrespuestas(null);
                    respuestas.setId_pregunta();
                    respuestas.setRespuesta();
                    entity.getTransaction().begin();
                    entity.persist(respuestas);
                    entity.getTransaction().commit();
                    */
                    entity.close();
                    JPAUtil.shutdown();
                    break;
                case 5:
                    alumno= Alumno.getInstancia();
                    alumno.setIdalumno(null);
                    alumno.setNombre(part2);
                    alumno.setRol("alumno");
                    int pc =Integer.parseInt(parts[2]);
                    alumno.setId_curso(pc);
                    entity.getTransaction().begin();
                    entity.persist(alumno);
                    entity.getTransaction().commit();
                    System.out.println("Alumno registrado.."+part2);
                    nombreFP="1-"+part2+"-"+parts[2];
                    break;
                case 6:
                    Query query3=entity.createQuery("SELECT c FROM Curso c");
                    this.listaCur =query3.getResultList();
                    this.nombreFP="";
                    for (Curso c : listaCur) {
                        this.nombreFP=nombreFP+"<label><input type='radio' name='optcurA' value='"+c.getIdcurso()+"'>"+c.getNombre_curso()+"</label>";
                    }

                    if (nombreFP.equals("error")){
                        entity.close();
                    }
                    String lsa =String.valueOf(lup);
                    this.nombreFP="2-"+nombreFP+"-"+lsa;
                    System.out.println("cursos Usuario"+nombreFP);
                    break;

                default:
                    System.out.println("Opción no válida\n");
                    break;
            }
        System.out.println(nombreFP);
        return (nombreFP);
    }

}
