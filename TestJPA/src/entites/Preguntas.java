package entites;

import javax.persistence.*;

@Entity
@Table(name="preguntas")
public class Preguntas {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long idpreguntas;
    @Column
    private String pregunta;
    @Column
    private int id_curso;
    @Column
    private String codpre;

    private static Preguntas instancia;
    private Preguntas() {
    }
    public static Preguntas getInstancia(){
        if(instancia==null){
            instancia= new Preguntas();
        }
        return instancia;
    }

    public String getCodpre() {
        return codpre;
    }

    public void setCodpre(String codpre) {
        this.codpre = codpre;
    }

    public Long getIdpreguntas() {
        return idpreguntas;
    }

    public void setIdpreguntas(Long idpreguntas) {
        this.idpreguntas = idpreguntas;
    }

    public String getPregunta() {
        return pregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

    public int getId_curso() {
        return id_curso;
    }

    public void setId_curso(int id_curso) {
        this.id_curso = id_curso;
    }

    @Override
    public String toString() {
        return "Preguntas [id=" + idpreguntas + ", pregunta=" + pregunta + ", id_curso=" + id_curso + ", codpre=" + codpre + "]";
    }

}