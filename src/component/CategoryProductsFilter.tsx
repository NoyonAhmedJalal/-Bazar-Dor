"use client";
import { useState } from 'react';
import ProductCard from '@/component/ProductCard';

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
    categoryNameBn: string;
    categoryIcon: string;
}

interface Props {
    initialProducts: IProduct[];
}

export default function CategoryProductsFilter({ initialProducts }: Props) {
    const [products, setProducts] = useState<IProduct[]>(initialProducts);
    const [sortOrder, setSortOrder] = useState<string>("default");

    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSortOrder(value);

        let sortedList = [...products];

        if (value === "low-to-high") {
            sortedList.sort((a, b) => a.today - b.today);
        } else if (value === "high-to-low") {
            sortedList.sort((a, b) => b.today - a.today);
        } else {
            sortedList = [...initialProducts];
        }

        setProducts(sortedList);
    };

    return (
        <div>


            <div className="bg-[#F0F5F0] rounded-2xl p-5 flex items-center justify-end gap-2">
                <span className=" text-gray-600">সাজান</span>
                <div className='  bg-white border border-stone-200 p-1 rounded-xl shadow-sm'>
                    <select
                        value={sortOrder}
                        onChange={handleSort}
                        className="bg-transparent text-sm font-medium text-gray-900 outline-none cursor-pointer">
                        <option value="default">ডিফল্ট</option>
                        <option value="low-to-high">দাম: কম থেকে বেশি</option>
                        <option value="high-to-low">দাম: বেশি থেকে কম</option>
                    </select>
                </div>
            </div>

            <p className="p-5 flex items-center text-gray-500">
                মোট {new Intl.NumberFormat('bn-BD').format(products.length)} টি পণ্য দেখানো হচ্ছে
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
}