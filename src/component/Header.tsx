import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';
import Marquee from './Marquee';

const Header = () => {

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })

    return (
        <div> 
        <div className='container mx-auto flex items-center justify-between py-5'>
            <Link href={'/'}><div className='flex items-center gap-2'>
                <Image
                    src={"/assets/logo.png"}
                    alt="Logo"
                    width={50}
                    height={50} />
                <div>
                    <h1 className='text-3xl font-bold'>বাজার দর</h1>
                    <p className='text-[15px]'>{date}</p>
                </div>
            </div>
            </Link>

            <div className="flex items-center">

                <div className="h-10 w-10 rounded-full bg-[#02642B] text-white flex items-center justify-center font-bold">
                    N
                </div>
                <button className="btn border-none hover:bg-white " popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                    <p className="text-xl font-bold">Noyon</p>
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                    <li><a className='font-bold'>Update</a></li>
                    <li><a className='font-bold'>Exit</a></li>
                </ul>

            </div>

        </div>
        <Navbar/>
        <Marquee/>
        </div>
    );
    
};

export default Header;