package com.dolist.modelo.dtos;

import javax.xml.bind.annotation.XmlRootElement;
import java.util.Objects;
import java.io.Serializable;
import com.dolist.modelo.entidades.UsuarioPK;
import java.sql.Timestamp;

/**
 * DAO que contiene la información de la entidad UsuarioDTO que se transmite por
 * los servicios REST. Solo se transmiten los atributos simples, es decir, se
 * omiten aquellos atributos que definen relaciones con otras entidades.
 * 
 * @author FROMERO
 */
@XmlRootElement
public class UsuarioDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private UsuarioPK usuarioPK;
	private String nombre;
	private String estado;

	public UsuarioDTO() {
		usuarioPK = new UsuarioPK();
	}

	public UsuarioPK getUsuarioPK() {
		return this.usuarioPK;
	}

	public void setUsuarioPK(UsuarioPK usuarioPK) {
		this.usuarioPK = usuarioPK;
	}

	/**
	 * {@inheritDoc}
	 *
	 * @return {@inheritDoc}
	 */
	@Override
	public int hashCode() {
		int hash = 3;

		hash = 37 * hash + Objects.hashCode(this.usuarioPK);
		hash = 37 * hash + Objects.hashCode(this.nombre);
		hash = 37 * hash + Objects.hashCode(this.estado);

		return hash;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
