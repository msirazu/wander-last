'use client';

import { authClient } from "@/lib/auth-client";
import { Person } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const NavbarProfile = () => {
    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    if (isPending) {
        return <p>Loading....</p>
    }
    
    const user = session?.user;

    const handleLogOut = async() => {
        await authClient.signOut();
        toast.success('Logout Success')
        router.push('/');
    }

    return (
        <>
        {user ? <>
        <div className='flex items-center gap-1'>
        <Person/>
        <Link href={'/'}>Profile</Link>
        </div>
        <Button onClick={handleLogOut}>Log Out</Button>
        </> : <>
        <Link href={'/user/login'}>Login</Link>
        <Link href={'/user/register'}>Sign Up</Link>
        </>}
        </>
    );
};

export default NavbarProfile;