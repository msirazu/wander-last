'use client';

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleRegister = async(e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.image.value;
        const password = e.target.password.value;

        const userData = { name, email, image, password }

        const { data, error } = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        image: userData.image
});

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
            const msg = "Password must be at least 8 characters long and contain both letters and numbers.";
            setErrorMessage(msg);
            return;
        }

        if (data) {
            toast.success('Registration Success');
            e.target.reset();
            router.push('/login');
        }

        if (error) {
            setErrorMessage(error.message || "Registration failed. Please try again.");
        }
    }
    
    const handleGoogleLogin = async() => {
    
    }

    return (
        <div>
            <div className="hero min-h-screen animate__animated animate__fadeInUp">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
            <form onSubmit={handleRegister}>
        <fieldset className="fieldset">
          
          <label className="label">Name</label>
          <input type="text" className="input w-full" placeholder="Name" name="name" required/>
          
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" name="email" required/>

          <label className="label">Photo URL</label>
          <input type="url" className="input w-full" placeholder="Photo Link" name="image" required/>
          
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" name="password" required/>

{errorMessage && (<div className="bg-red-50 p-2 rounded mt-2"><p className="text-red-600 text-xs font-medium italic"> ⚠️ {errorMessage}
</p></div>)}

          <button type="submit" className="btn btn-neutral mt-3">Register</button>
        </fieldset>
            </form>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className="btn btn-outline w-full">Continue with Google</button>
            <div className="mt-3 text-[12px]">Already have Account, then <Link href={'/user/login'} className="link link-hover font-bold">Login</Link></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default RegisterForm;