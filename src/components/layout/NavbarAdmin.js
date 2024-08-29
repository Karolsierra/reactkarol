import React from "react";
import logo from "../../static/img/logo.png";
import perfil from "../../static/img/perfil.png";
import calendario from "../../static/img/calendario.png";
import informes from "../../static/img/informes.png";
import programaciones from "../../static/img/programaciones.png";
import usuarios from "../../static/img/usuarios.png";
import cerrar_sesion from "../../static/img/cerrarSesion.png";
import { Link } from "react-router-dom";

function NavbarAdmin () {
    return (
      <div>
        <header>
        <img src={logo} class="logo" alt="logo"/>
        <nav>
            <ul>
                <li><a href="ProfileAdmin.html" title="Perfil"><img src= {perfil} alt="Perfil" class="icono"/></a></li>
                <li><a href="calendarioAdmin.html" title="Ver calendario"><img src="../Assets/img/calendario.png" alt="Calendario" class="icono"/></a></li>
                <li><a href="InformesAdmin.html" title="Informes"><img src="../Assets/img/informes.png" alt="Informes" class="icono"/></a></li>
                <li><a href="#" title="Programaciones"><img src="../Assets/img/programaciones.png" alt="Programaciones" class="icono"/></a></li>
                <li><a href="usuariosAdmin.html" title="Usuarios"><img src="../Assets/img/usuarios.png" alt="Usuarios" class="icono"/></a></li>
            </ul>
        </nav>
        <div class="cerrarSesion">
            <a href="#" title="Cerrar sesión"><img src="../Assets/img/cerrarSesion.png" class="icono">Cerrar sesión</a>
        </div>
    </header>
    </div>
    );
};

export default NavbarAdmin;