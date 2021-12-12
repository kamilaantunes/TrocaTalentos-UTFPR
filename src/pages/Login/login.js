import './login.css';
import { Link } from 'react-router-dom';
import {useState} from 'react'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function enviarCredenciais(form) {
        form.preventDefault();
    }

    return (
        <div className="container">
            <div className="quad">
                <div className='login-message'>
                    <b><h2 > Acesse o seu login! </h2></b>
                </div>
                <form onSubmit={enviarCredenciais} className="form-box">
                    <input className='input' type="text" placeholder='email'required onChange={(event) => setEmail(event.target.value)} />
                    <input className='input' type="password" name="passoword" placeholder='password' required onChange={(event) => setPassword(event.target.value)}/>
                    <Link to='/recuperar-senha' className='forgot-password'> Esqueceu a senha? </Link>
                    <button className="acess" type="submit">
                        Acessar
                    </button>
                </form>

                {/* <form className="box-password">

        </form> */}



            </div>
        </div>
    )
}

export default Login;