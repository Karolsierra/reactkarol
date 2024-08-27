import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function UserInfoForm({ userInfo, setUserInfo, isEditing, setIsEditing }) {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const handleModifyClick = () => {
        if (isEditing) {
            // Aquí puedes agregar la lógica para enviar los cambios al servidor
            // Por ejemplo: submitForm();
        }
        setIsEditing(!isEditing);
    };

    return (
        <div className="informacion-container">
            <h2 className="titulo-info">Información del usuario</h2>
            <form id="formulario">
                <div className="form-group">
                    <div className="column">
                        <label htmlFor="nombre">Nombre:</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            value={userInfo.nombre} 
                            onChange={handleInputChange} 
                            readOnly={!isEditing} 
                        />
                    </div>
                    <div className="column">
                        <label htmlFor="apellido">Apellido:</label>
                        <input 
                            type="text" 
                            id="apellido" 
                            name="apellido" 
                            value={userInfo.apellido} 
                            onChange={handleInputChange} 
                            readOnly={!isEditing} 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="column">
                        <label htmlFor="correo">Correo institucional:</label>
                        <input 
                            type="email" 
                            id="correo" 
                            name="correo" 
                            value={userInfo.correo} 
                            onChange={handleInputChange} 
                            readOnly={!isEditing} 
                        />
                    </div>
                    <div className="column">
                        <label htmlFor="clave">Clave:</label>
                        <input 
                            type="password" 
                            id="clave" 
                            name="clave" 
                            value={userInfo.clave} 
                            onChange={handleInputChange} 
                            readOnly={!isEditing} 
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="genero">Género:</label>
                    <select 
                        id="genero" 
                        name="genero" 
                        value={userInfo.genero} 
                        onChange={handleInputChange} 
                        disabled={!isEditing}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="rol">Rol:</label>
                    <select 
                        id="rol" 
                        name="rol" 
                        value={userInfo.rol} 
                        onChange={handleInputChange} 
                        disabled={!isEditing}
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="instructor">Instructor</option>
                        <option value="capacitador">Capacitador</option>
                        <option value="administrador">Administrador</option>
                    </select>
                </div>
                <div className="form-group">
                    <div>
                        <button 
                            type="button" 
                            id="modificarButton" 
                            className="modificar-usua" 
                            onClick={handleModifyClick}
                        >
                            {isEditing ? "Guardar" : "Modificar"}
                        </button>
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            id="inactivarButton" 
                            className="inactivar"
                        >
                            Inactivar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default function App() {
    const [userInfo, setUserInfo] = useState({
        nombre: 'Juan',
        apellido: 'Pérez',
        correo: 'juan.perez@ejemplo.com',
        clave: '123456',
        genero: 'masculino',
        rol: 'administrador'
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleSearchClick = () => {
        MySwal.fire({
            html: (
                <UserInfoForm 
                    userInfo={userInfo} 
                    setUserInfo={setUserInfo} 
                    isEditing={isEditing} 
                    setIsEditing={setIsEditing} 
                />
            ),
            showConfirmButton: false,
            customClass: {
                popup: 'swal-wide'
            }
        });
    };

    return (
        <div>
            <div className="buscador-usuarios">
                <button id="buscarButton" onClick={handleSearchClick}>Buscar Usuario</button>
            </div>
        </div>
    );
}
