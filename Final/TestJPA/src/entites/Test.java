package entites;

import javax.persistence.*;

@Entity
@Table(name="tests")
public class Test {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long idtest;
    @Column
    private int id_pregunta;
    @Column
    private int id_respuesta;
    @Column
    private int id_alumno;

    public Long getIdtest() {
        return idtest;
    }

    public void setIdtest(Long idtest) {
        this.idtest = idtest;
    }

    public int getId_pregunta() {
        return id_pregunta;
    }

    public void setId_pregunta(int id_pregunta) {
        this.id_pregunta = id_pregunta;
    }

    public int getId_respuesta() {
        return id_respuesta;
    }

    public void setId_respuesta(int id_respuesta) {
        this.id_respuesta = id_respuesta;
    }

    public int getId_alumno() {
        return id_alumno;
    }

    public void setId_alumno(int id_alumno) {
        this.id_alumno = id_alumno;
    }

    @Override
    public String toString() {
        return "Producto [id=" + idtest + ", pre=" + id_pregunta + ", resp=" + id_respuesta +", alumno=" + id_alumno +"]";
    }

}