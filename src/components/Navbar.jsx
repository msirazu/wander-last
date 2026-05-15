import { Person } from '@gravity-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import NavbarProfile from './NavbarProfile';

const Navbar = () => {
    return (
        <nav className="">
           <section className='flex items-center justify-between flex-col md:flex-row gap-5 py-5 border-b'>
                <div className='flex gap-2'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/destinations'}>Destinations</Link>
                    <Link href={'/my-bookings'}>My Bookings</Link>
                    <Link href={'/'}>Admin</Link>
                </div>
                <div>
                    <Link href={'/'}>
                    <Image src={'/assets/icons/wanderlast.png'} width={162} height={24} alt={'logo'}/>
                    </Link>
                </div>
                <div className='flex gap-2'>
                    <NavbarProfile/>
                </div>
           </section>
        </nav>
    );
};

export default Navbar;