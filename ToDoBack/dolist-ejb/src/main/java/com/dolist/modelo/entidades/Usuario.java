package com.dolist.modelo.entidades;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EmbeddedId;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import java.sql.Timestamp;

/**
 * The persistent class for the CATEGORIES database table.
 * 
 * @author FROMERO
 */
@Entity
@Table(name = "USUARIO")
@NamedQuery(name = "Usuario.findAll", query = "SELECT p FROM Usuario p")
public class Usuario implements Serializable {

	private static final long serialVersionUID = 1L;

	// Definicion de atributos de la entidad (Exceptuando relaciones)
	public static final String ENTIDAD_USUARIO_NOMBRE = "nombre";
	public static final String ENTIDAD_USUARIO_TIPO_DOCUMENTO = "tipoDocumento";
	public static final String ENTIDAD_USUARIO_NUMERO_DOCUMENTO = "numDocumento";
	public static final String ENTIDAD_USUARIO_ESTADO = "estado";

	private static final String[] ATRIBUTOS_ENTIDAD_USUARIO = { ENTIDAD_USUARIO_NOMBRE, ENTIDAD_USUARIO_TIPO_DOCUMENTO,
			ENTIDAD_USUARIO_NUMERO_DOCUMENTO, ENTIDAD_USUARIO_ESTADO };

	@EmbeddedId
	private UsuarioPK usuarioPK;

	@Column(name = "NOMBRE")
	private String nombre;

	@Column(name = "ESTADO")
	private String estado;

	public Usuario() {
		usuarioPK = new UsuarioPK();
	}

	public UsuarioPK getUsuarioPK() {
		return this.usuarioPK;
	}

	public void setUsuarioPK(UsuarioPK usuarioPK) {
		this.usuarioPK = usuarioPK;
	}

	/**
	 * Verifica si la entidad contiene el atributo que se pasa como parámetro
	 *
	 * @param atributo Nombre del atributo a validar
	 * @return Verdadero si la entidad contiene al atributo.
	 */
	public static boolean contieneAtributo(String atributo) {

		boolean contiene = false;
		for (final String atr : ATRIBUTOS_ENTIDAD_USUARIO) {
			if (atr.equals(atributo)) {
				contiene = true;
			}
		}

		return contiene;
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

}
