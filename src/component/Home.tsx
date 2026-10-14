import React from 'react';
import Image from 'next/image';

const Home = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })
    return (
        <section className='container mx-auto flex items-center justify-between p-5 bg-[#F0F5F0] mt-5 rounded-xl'>
            <div>
                <p className='text-[15px] font-bold text-green-600 bg-[#E1F1E7] p-2 w-50 text-center rounded-2xl'>{date}</p>
                <h1 className='text-4xl font-bold py-5'>আজকের বাজারের দাম এক নজরে</h1>
                <p className='text-xl text-[#727A74]'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন- <br />সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                <button className='bg-[#02642B] text-[13px] font-bold rounded-[7px] cursor-pointer text-white px-5 py-2 mt-7 mb-9'>সব পণ্য দেখুন</button>
            </div>
            <div>
               <Image src={ "/assets/bazar-hero.png"} width={250} height={250} alt="" />
            </div>
        </section>
    );
};

export default Home;