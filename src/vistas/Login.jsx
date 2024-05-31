

function Login() {
    // const [correoUsuarioActual, setCorreoUsuarioActual] = useState(null);
    // const [sesionActiva, setSesionActiva] = useState(0);

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     const email = document.querySelector('#email').value.trim();
    //     const password = document.querySelector('#pass').value.trim();
    //     const correoElectronico = document.querySelector('#email').value;

    //     // Simular verificación en la base de datos
    //     const usuarioEncontrado = users.find(usuario => usuario.email === email && usuario.password === password);

    //     if (usuarioEncontrado) {
    //         // Inicio de sesión exitoso
    //         setCorreoUsuarioActual(email);
    //         alert('Inicio de sesión exitoso');
    //         setSesionActiva(1);

    //         // Llamar al componente de Panel después de mostrar el mensaje
    //         return <Panel correoUsuarioActual={correoUsuarioActual} />;
    //     } else {
    //         // Fallo en el inicio de sesión
    //         alert('Error en el inicio de sesión. Verifica tus credenciales.');
    //     }
    // };

    // const handleNuevoClick = () => {
    //     return <Registre />;
    // };

    // const handleCerrarSesion = () => {
    //     // Encuentra el índice del usuario actual en el array
    //     const index = users.findIndex(usuario => usuario.email === correoUsuarioActual);

    //     if (index !== -1) {
    //         // Elimina el usuario actual del array
    //         users.splice(index, 1);

    //         // Limpia la sesión actual
    //         setCorreoUsuarioActual(null);
    //         setSesionActiva(0);

    //         // Redirige a la página de inicio de sesión
    //         return <Login />;
    //     }
    // };

    return (
        <div className="container">
           
            <h1 className="mt-5 text-center">Inicia sesión</h1>
            <div className="m-5 mx-auto" style={{ maxWidth: "400px" }}>
                <form className="form border shadow-sm p-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input required id="email" type="email" className="form-control" />
                    <label htmlFor="pass" className="form-label mt-3">Contraseña:</label>
                    <input required minLength="6" id="pass" type="password" className="form-control" />
                    <div className="form-check mt-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                        <label className="form-check-label" htmlFor="flexCheckChecked">Recordar sesión</label>
                    </div>
                    <a className="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
                    <a className="btn btn-primary w-100 mt-3" href="#">Iniciar sesión</a>
                </form>
                <a className="d-block mt-5 btn btn-secondary mx-auto"  href="#">¿Eres nuevo? Regístrate</a>
            </div>
        </div>
    );
}

export default Login;
