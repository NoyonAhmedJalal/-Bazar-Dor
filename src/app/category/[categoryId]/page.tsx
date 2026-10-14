import CategoryProductsFilter from '@/component/CategoryProductsFilter';

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

interface IParamsProps {
    params: Promise<{
        categoryId: string;
    }>;
}

export default async function CategoryProducts({ params }: IParamsProps) {
    const { categoryId } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`);
    const data: IProduct[] = await res.json();

    return (
        <div className="container mx-auto py-8">
            <div className="bg-[#F0F5F0] rounded-2xl p-5 mb-6 flex items-center gap-4">
                <p className="text-4xl">{data[0].categoryIcon}</p>
                <div>
                    <h1 className="text-2xl font-bold">
                        {data[0].categoryNameBn}
                    </h1>
                    <p className="text-gray-500 pt-1">
                        প্রতি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </div>
            
            <CategoryProductsFilter initialProducts={data} />
        </div>
    );
}