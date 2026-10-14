import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css";

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
const unitMap: Record<string, string> = {
    kg: 'কেজি',
    litre: 'লিটার',
    liter: 'লিটার',
    piece: 'পিস',
    dozen: 'ডজন',
    gram: 'গ্রাম',
};

const Marquee = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
    const data: IProduct[] = await res.json();

    return (
        <div>
            <MarqueeText direction='right' duration={10} >
                <div className='flex items-center gap-5 border border-gray-200 py-1 overflow-hidden'>
                    {data.map((item) => {
                        const isUp = item.change.dir === 'up';
                        const isDown = item.change.dir === 'down';

                        return (
                            <Link key={item.id} href={'/'}>

                                <div className='whitespace-nowrap flex items-center gap-1'>
                                    <p >{item.image}</p>
                                    <p className='font-bold'>{item.nameBn} </p>
                                    <p> {new Intl.NumberFormat('bn-BD').format(item.today)} টাকা / {unitMap[item.unit] || item.unit}</p>
                                    {isUp && (
                                        <span className="text-red-600  px-1.5 py-0.5 rounded text-xs font-bold">
                                            ▲ {item.change.pct}%
                                        </span>
                                    )}

                                    {isDown && (
                                        <span className="text-green-600 px-1.5 py-0.5 rounded text-xs font-bold">
                                            ▼ {Math.abs(item.change.pct)}%
                                        </span>
                                    )}

                                </div>
                            </Link>)
                    })}
                </div>

            </MarqueeText>
        </div>
    );
};

export default Marquee;