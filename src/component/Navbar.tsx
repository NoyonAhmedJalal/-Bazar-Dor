import Link from 'next/link';
import React from 'react';
interface Icategory{
    id: number
    icon:string
    nameBn: string
    slug: string 
}

const Navbar = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    const data:Icategory[] = await res.json();
    
    return (
        <div className='container mx-auto flex items-center gap-7 text-[18px]'>
            {data.map((d)=> <Link key={d.id} href={`/category/${d.slug}`}>
            <div className='flex gap-'>
                <p>{d.icon}</p>
            <p>{d.nameBn}</p>
            </div>
            </Link>)}
        </div>
    );
};

export default Navbar;