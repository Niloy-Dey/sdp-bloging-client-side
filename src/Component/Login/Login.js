import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    const handleEmailBlur= event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event  => {
        setPassword(event.target.value);
    }
    const handleUserSignIn = event =>{
        event.preventDefault();
        setEmail('');
        setPassword('');
    }
    return (
        <div className=' m-40 card mx-auto w-96 shadow-lg p-5  flex justify-center items-center'>

           <form 
            onSubmit={handleUserSignIn}
        >
            <h1 className="login text-xl font-bold  text-center">LOGIN</h1>
            <div className=" mx-auto">
                <div className=" login-container">
                    <label htmlFor="mail"><strong>E-mail</strong></label> <br />
                    <input className="my-2  w-full border-2 p-2 outline border-red-50" onBlur={handleEmailBlur}  type="text" placeholder="Enter E-mail" name="mail" required /><br />
                    <label htmlFor="psw"><strong>Password</strong></label><br />
                    <input className="my-2  w-full border-2 p-2 outline border-red-50" onBlur={handlePasswordBlur} type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <br />
                <p>New to Blog site ?  <Link className='text-orange-400' to="/signup">Sign up</Link></p>
                <br />
                <button type="submit"  onClick={() => signInWithEmailAndPassword(email, password)} className="w-full bg-green-300 rounded-lg p-3 my-3"><strong>LOGIN</strong></button>
                <br />
                <button onClick={() => signInWithGoogle()} className="btn btn-warning w-full  py-3 fw-bold">Continue With Google</button>
            </div>
        </form >
           </div>
    );
};

export default Login;