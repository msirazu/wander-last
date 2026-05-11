import { Person } from '@gravity-ui/icons';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="">
           <section className='flex items-center justify-between flex-col md:flex-row gap-5 py-5'>
                <div className='flex gap-2'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/destinations'}>Destinations</Link>
                    <Link href={'/my-bookings'}>My Bookings</Link>
                    <Link href={'/'}>Admin</Link>
                </div>
                <div>
                    <Link href={'/'}>
                    <Image src={'/assets/Wanderlast.png'} width={162} height={24} alt={'logo'}/>
                    </Link>
                </div>
                <div className='flex gap-2'>
                    <div className='flex items-center gap-1'>
                    <Person/>
                    <Link href={'/'}>Profile</Link>
                    </div>
                    <Link href={'/'}>Login</Link>
                    <Link href={'/'}>Sign Up</Link>
                </div>
           </section>
        </nav>
    );
};

export default Navbar;