import React from 'react';

const unitMap: Record<string, string> = {
    kg: 'প্রতি কেজি',
    litre: 'প্রতি লিটার',
    piece: 'প্রতি পিস',
    dozen: 'প্রতি ডজন',
};

interface IChange {
    dir: 'up' | 'down';
    pct: number;
}

interface IProduct {
    nameBn: string;
    unit: string;
    image: string;
    today: number;
    change: IChange;
}

const ProductCard = ({ product }: { product: IProduct }) => {
    const { nameBn, unit, image, today, change } = product;

    const isUp = change.dir === 'up';
    const isDown = change.dir === 'down';

    return (
        <div className="bg-[#F0F5F0] border border-stone-200 rounded-2xl p-4 flex flex-col justify-between shadow-sm  hover:border-green-600 ">
            
            <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl h-12 w-12 flex items-center justify-center bg-[#FFFFFF] rounded-xl shrink-0">
                    {image}
                </div>
                <div>
                    <h3 className="font-bold text-gray-800 text-base">{nameBn}</h3>
                    <p className="text-xs text-gray-500">{unitMap[unit] || unit}</p>
                </div>
            </div>

            
            <div className="flex items-end justify-between mt-2">
                <div>
                    <p className="text-xs text-gray-400">আজকের দাম</p>
                    <p className="text-lg font-bold text-gray-900">{new Intl.NumberFormat('bn-BD').format(today)} টাকা</p>
                </div>

                <div>
                    {isUp && (
                        <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded-md text-xs font-bold flex items-center gap-1">
                            ▲ {change.pct}%
                        </span>
                    )}

                    {isDown && (
                        <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded-md text-xs font-bold flex items-center gap-1">
                            ▼ {Math.abs(change.pct)}%
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;