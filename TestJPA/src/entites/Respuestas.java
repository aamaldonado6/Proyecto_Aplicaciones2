package entites;

import javax.persistence.*;

@Entity
@Table(name="respuestas")
public class Respuestas {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long idrespuestas;
    @Column
    private String respuesta;
    @Column
    private int id_pregunta;
    @Column
    private String codres;

    private static Respuestas instancia;
    private Respuestas() {
    }
    public static Respuestas getInstancia(){
        if(instancia==null){
            instancia= new Respuestas();
        }
        return instancia;
    }

    public String getCodres() {
        return codres;
    }

    public void setCodres(String codres) {
        this.codres = codres;
    }

    public Long getIdrespuestas() {
        return idrespuestas;
    }

    public void setIdrespuestas(Long idrespuestas) {
        this.idrespuestas = idrespuestas;
    }

    public String getRespuesta() {
        return respuesta;
    }

    public void setRespuesta(String respuesta) {
        this.respuesta = respuesta;
    }

    public int getId_pregunta() {
        return id_pregunta;
    }

    public void setId_pregunta(int id_pregunta) {
        this.id_pregunta = id_pregunta;
    }

    @Override
    public String toString() {
        return "Producto [id=" + idrespuestas + ", respuesta=" + respuesta + ", id_pregunta=" + id_pregunta + ", codres=" + codres + "]";
    }

}