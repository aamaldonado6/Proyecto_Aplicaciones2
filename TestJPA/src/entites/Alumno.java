package entites;

import javax.persistence.*;

@Entity
@Table(name="alumno")
public class Alumno {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long idalumno;
    @Column
    private String nombre;
    @Column
    private String rol;


    public Long getIdalumno() {
        return idalumno;
    }
    public void setIdalumno(Long id) {
        this.idalumno = id;
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
        return "alumno [idalumno=" + idalumno + ", nombre=" + nombre + ", rol=" + rol + "]";
    }

}