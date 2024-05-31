

function Login() {
    // const [correoUsuarioActual, setCorreoUsuarioActual] = useState(null);
    // const [sesionActiva, setSesionActiva] = useState(0);

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     const email = document.querySelector('#email').value.trim();
    //     const password = document.querySelector('#pass').value.trim();
    //     const correoElectronico = document.querySelector('#email').value;

    //     
    //     const usuarioEncontrado = users.find(usuario => usuario.email === email && usuario.password === password);

    //     if (usuarioEncontrado) {
    //        
    //         setCorreoUsuarioActual(email);
    //         alert('Inicio de sesión exitoso');
    //         setSesionActiva(1);

    //         
    //         return <Panel correoUsuarioActual={correoUsuarioActual} />;
    //     } else {
    //         
    //         alert('Error en el inicio de sesión. Verifica tus credenciales.');
    //     }
    // };

    // const handleNuevoClick = () => {
    //     return <Registre />;
    // };

    // const handleCerrarSesion = () => {
    //    
    //     const index = users.findIndex(usuario => usuario.email === correoUsuarioActual);

    //     if (index !== -1) {
    //        
    //         users.splice(index, 1);

    //       
    //         setCorreoUsuarioActual(null);
    //         setSesionActiva(0);

    //        
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
