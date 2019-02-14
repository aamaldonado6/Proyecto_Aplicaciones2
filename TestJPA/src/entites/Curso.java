package entites;

import javax.persistence.*;

@Entity
@Table(name="curso")
public class Curso {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long idcurso;
    @Column
    private String nombre_curso;
    @Column
    private int id_profesor;

    public Long getIdcurso() {
        return idcurso;
    }

    public void setIdcurso(Long idcurso) {
        this.idcurso = idcurso;
    }

    public String getNombre_curso() {
        return nombre_curso;
    }

    public void setNombre_curso(String nombre_curso) {
        this.nombre_curso = nombre_curso;
    }

    public int getId_profesor() {
        return id_profesor;
    }

    public void setId_profesor(int id_profesor) {
        this.id_profesor = id_profesor;
    }

    @Override
    public String toString() {
        return "curso [idcurso=" + idcurso + ", nombre_curso=" + nombre_curso + ", id_profesor=" + id_profesor + "]";
    }

}