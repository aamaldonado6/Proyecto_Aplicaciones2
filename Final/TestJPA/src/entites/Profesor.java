package entites;

import javax.persistence.*;

@Entity
@Table(name="profesor")
public class Profesor {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long idprofesor;
    @Column
    private String nombre;
    @Column
    private String rol;

    private static Profesor instancia;
    private Profesor() {
    }
    public static Profesor getInstancia(){
        if(instancia==null){
            instancia= new Profesor();
        }
        return instancia;
    }

    public Long getIdprofesor() {
        return idprofesor;
    }
    public void setIdprofesor(Long id) {
        this.idprofesor = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    @Override
    public String toString() {
        return "Profesor [idprofesor=" + idprofesor + ", nombre=" + nombre + ", rol=" + rol + "]";
    }

}