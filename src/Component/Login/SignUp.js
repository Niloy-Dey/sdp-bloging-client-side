import React , { useState }from 'react';
import { Link } from 'react-router-dom';
import auth from  '../../firebase.init'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle  } from 'react-firebase-hooks/auth';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
    const [signInWithGoogle] = useSignInWithGoogle(auth);
   
    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value); 
    }
    const handleCreateUser = (event) =>{
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className=' m-40 card mx-auto w-96 shadow-lg p-5  flex justify-center items-center'>
             <form 
            onSubmit={handleCreateUser}
        >
            <h1 className="login text-xl font-bold  text-center">SIGN UP</h1>
            <div className=" mx-auto">
                <div className=" login-container">
                    <label htmlFor="mail"><strong>E-mail</strong></label> <br />
                    <input className="my-2  w-full border-2 p-2 outline border-red-50" onBlur={handleEmail}  type="text" placeholder="Enter E-mail" name="mail" required /><br />
                    <label htmlFor="psw"><strong>Password</strong></label><br />
                    <input className="my-2  w-full border-2 p-2 outline border-red-50" onBlur={handlePassword} type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <br />
                <p>Already have an account?   <Link className='text-orange-400' to="/login">Login </Link></p>
                <br />
                <button type="submit"  className="w-full bg-green-300 rounded-lg p-3 my-3"><strong>SIGN UP</strong></button>
                <br />
                <button onClick={() => signInWithGoogle()} className="btn btn-warning w-full  py-3 fw-bold">Continue With Google</button>
            </div>
        </form >
        </div>
    );
};

export default SignUp;