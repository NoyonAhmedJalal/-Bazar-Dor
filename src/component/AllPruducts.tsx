import React from 'react';
import ProductCard from './ProductCard';

interface IProduct {
    id: number;
    nameBn: string;
    unit: string;
    image: string;
    today: number;
    change: IChange;
}
interface IChange {
    dir: 'up' | 'down';
    pct: number;
}



const AllPruducts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
    const data: IProduct[] = await res.json();

    return (
        <div className="container mx-auto pb-10">
            <h1 className="text-2xl font-bold mb-1 text-gray-800">সব পণ্য</h1>
            <p className="text-sm text-gray-500 mb-6">
                মোট {new Intl.NumberFormat('bn-BD').format(data.length)}টি পণ্য দেখানো হচ্ছে
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
               {data.map((item) => 
                    <ProductCard key={item.id} product={item} />
                )}
            </div>
        </div>
    );
};

export default AllPruducts;