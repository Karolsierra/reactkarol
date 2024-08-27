import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '@sweetalert2/theme-dark';

const MySwal = withReactContent(Swal);

function App() {
    const [userInfo, setUserInfo] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        clave: '',
        genero: '',
        rol: '',
    });

    const handleRegisterClick = () => {
        MySwal.fire({
            title: "Registrar Usuario",
            html: (
                <main className="registrar">
                    <div className="registrar-container">
                        <form id="registrar-form">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre:</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={userInfo.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="apellido">Apellido:</label>
                                <input
                                    type="text"
                                    id="apellido"
                                    name="apellido"
                                    value={userInfo.apellido}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="correo">Correo institucional:</label>
                                <input
                                    type="email"
                                    id="correo"
                                    name="correo"
                                    value={userInfo.correo}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="clave">Clave:</label>
                                <input
                                    type="password"
                                    id="clave"
                                    name="clave"
                                    value={userInfo.clave}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="genero">Género:</label>
                                <select
                                    id="genero"
                                    name="genero"
                                    value={userInfo.genero}
                                    onChange={handleInputChange}
                                    required
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
                                    required
                                >
                                    <option value="">Seleccione una opción</option>
                                    <option value="instructor">Instructor</option>
                                    <option value="capacitador">Capacitador</option>
                                    <option value="administrador">Administrador</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </main>
            ),
            showConfirmButton: true,
            confirmButtonText: "Guardar usuario",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            preConfirm: () => {
                const { nombre, apellido, correo, clave, genero, rol } = userInfo;
                if (!nombre || !apellido || !correo || !clave || !genero || !rol) {
                    Swal.showValidationMessage('Por favor completa todos los campos');
                } else {
                    return userInfo;
                }
            },
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes manejar el registro del usuario
                console.log("Usuario registrado:", result.value);
                // Puedes enviar la data al servidor, por ejemplo
            }
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    return (
        <div className="App">
            <button id="registrar" onClick={handleRegisterClick}>
                Registrar Usuario
            </button>
        </div>
    );
}

export default App;
