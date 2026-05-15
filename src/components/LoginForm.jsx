'use client';

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const userData = { email, password }

        const { data, error } = await authClient.signIn.email({
    email: userData.email,
    password: userData.password,
    rememberMe: true
});

        if (data) {
            toast.success('Login Successful');
            e.target.reset();
            router.push('/');
        }

        if (error) {
            setErrorMessage(error.message || 'Invalid email or password');
        }
        
    }
    const handleGoogleLogin = () => {

    }

    return (
        <div>
                <div className="hero min-h-screen animate__animated animate__fadeInUp">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
            <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
<label className="label">Email</label>
<input type="email" className="input w-full" placeholder="Email" name="email" required/>

<label className="label">Password</label>
<input type="password" className="input w-full" placeholder="Password" name="password" required/>

{errorMessage && (<p className="text-red-500 text-sm mt-2 font-medium">⚠️ {errorMessage}</p>)}

<button type="submit" className="btn btn-neutral mt-3">Login</button>
                            </fieldset>
            </form>
             <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-outline w-full">Continue with Google</button>
<div className="my-3 text-[12px]">Don&apos;t have an Account, then <Link href={'/user/register'} className="link link-hover font-bold">Register</Link></div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default LoginForm;