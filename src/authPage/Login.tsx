import React, { useState } from "react";
import './Login.css'
import { useAuth } from "../auth/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthResponse, AuthResponseError } from "../types/types";
import { API_URL } from "../auth/constants";
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorResponse, setErrorResponse] = useState('');

    const auth = useAuth();
    const goTo = useNavigate();

    async function handleSubmit(e: React.FormEvent) {

        e.preventDefault();

        try {
          const response = await fetch( `${API_URL}/login`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({ 
                username,
                password 
            }),
          });
          if (response.ok) {
            console.log("acces autorized");
            setErrorResponse('');
            
            goTo('/dashboard')
          } else {
            const json = (await response.json()) as AuthResponseError;
            setErrorResponse(json.body.error);
            return;
          }

        } catch (error) {
          console.log(error);
        }
      }

    if(auth.isAuthenticated){
        return <Navigate to='/dashboard'/>
    }


    return (
        <>
            <div className="container-login">
                <div className="circle">
                    <div className="container-auth">
                        <div className="content-header-login">
                            <h2>Sing In</h2>
                            {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
                        </div>
                        <form className="content-form" onSubmit={handleSubmit}>
                            <div className="input-user">
                                <input 
                                    type="text" 
                                    placeholder="Correo"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} 
                                />
                                <div className="icon-username-auth">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: '#267FFF' }} id="Layer_1"data-name="Layer 1"viewBox="0 0 24 24"width="512"height="512">
                                        <path d="M12,0A12.013,12.013,0,0,0,0,12c-.126,9.573,11.159,15.429,18.9,9.817a1,1,0,1,0-1.152-1.634C11.3,24.856,1.9,19.978,2,12,2.549-1.266,21.453-1.263,22,12v2a2,2,0,0,1-4,0V12C17.748,4.071,6.251,4.072,6,12a6.017,6.017,0,0,0,10.52,3.933A4,4,0,0,0,24,14V12A12.013,12.013,0,0,0,12,0Zm0,16a4,4,0,0,1,0-8A4,4,0,0,1,12,16Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="input-password">
                                <input 
                                    type="password" 
                                    placeholder="Contraseña" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}   
                                />
                                <div className="icon-password-auth">
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ fill: '#267FFF' }} id="Outline" viewBox="0 0 24 24" width="512" height="512">
                                        <path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z"/>
                                        <path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="button-save-auth">
                                <button className="button">Acceder</button>
                            </div>
                            <p>inicia sesión con</p>
                            <div className="button-google">
                                <button className="button">
                                    <div className="icon-google-auth">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="96px" height="96px">
                                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                                            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                                            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                                            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                                        </svg>
                                    </div>
                                    <span>google</span>
                                </button>
                            </div>
                            <div className="url-create">
                                <span>Olvidate tu contaseña?</span><a href="#">Recuperar</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;