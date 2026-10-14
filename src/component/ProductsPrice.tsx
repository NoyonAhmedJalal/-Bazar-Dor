
import React from 'react';
import ProductCard from './ProductCard';
interface IChange {
    dir: 'up' | 'down';
    pct: number;
}
interface IProduct {
    id: number;
    nameBn: string;
    unit: string;
    image: string;
    today: number;
    change: IChange;
}

const ProductsPrice = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
    const products:IProduct[] = await res.json();

   const priceUpProducts:IProduct[] = products.filter((item) => item.change.dir === 'up');
    const priceDownProducts:IProduct[] = products.filter((item) => item.change.dir === 'down');

    return (
        <section className='container mx-auto py-10 '>
                        <div>
                <h2 className=" font-bold text-xl mb-4 flex items-center gap-2">
                <span className='text-red-600'>▲</span> আজ দাম বেড়েছে
                 </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            priceUpProducts.slice(0,6).map((item)=> <div key={item.id}>
                                <ProductCard product ={item} />
                            </div> )
                        }
                    
                </div>

                            <div>
                <h2 className=" font-bold text-xl mb-4 flex items-center gap-2 pt-10">
                <span className='text-green-600'>▼</span> আজ দাম কমেছে
                 </h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5' >
                        {
                            priceDownProducts.slice(0,6).map((item)=> <div key={item.id}>
                                <ProductCard product ={item} />
                            </div> )
                        }
                    
                </div>
           

            </div>
           

            </div>

        </section>
    );
};

export default ProductsPrice;