import { useState } from "react";


export function Registre() {
     const [nombre, setNombre] = useState('');
     const [apellidos, setApellidos] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [rol, setRol] = useState('usuario');
     const [alerta, setAlerta] = useState('');

     const handleEnviar = () => {
         if (!nombre || !apellidos || !email || !password || !rol) {
             setAlerta('Por favor, completa todos los campos obligatorios.');
             return;
         }

         const objeto = {
             nombre: nombre,
             apellidos: apellidos,
             email: email,
             password: password,
             rol: rol
         };



  
         setAlerta('Tu usuario ha sido registrado correctamente');

         
         setNombre('');
         setApellidos('');
         setEmail('');
         setPassword('');
         setRol('usuario');
     };

    return (
        <div className="container">
          <h1 className="mt-5 text-center">Registro</h1>
          <div className="m-5 mx-auto" style={{ maxWidth: "400px" }}>
            <form className="border shadow-sm p-3">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre:</label>
                <input required id="nombre" type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input required id="email" type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="pass" className="form-label">Contraseña:</label>
                <input required minLength="6" id="pass" type="password" className="form-control" />
              </div>
             
              <button type="submit" className="btn btn-primary w-100">Registrarse</button>
            </form>
   
          </div>
        </div>
      );
      
    
}
