import { ProductLoadingCard } from '@/components/core/cards/LoadingCard'
import ProductCard from '@/components/core/cards/ProductCard'
import { CurveIcon } from '@/components/core/icons/publicIcon/QuotationIcon'

const TrendingProducts = () => {
    let isLoading = false
    return (
        <div className='space-y-10'>
            {/* title */}
            <div className='relative'>
                <p className='text-w-title-3-Medium-36 lg:text-w-title-4-Medium-48 z-20 relative text-f-black-500'>{`Trending Products`}</p>
                <div className='absolute -top-5 lg:-top-2'>
                    <CurveIcon size={'128'} className='text-f-primary-2-200 ' />
                </div>
            </div>


            {/* Data Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 '>
                {isLoading
                    ? [...new Array(5)].map(() => (
                        <div key={Math.random()}>
                            <ProductLoadingCard />
                        </div>
                    ))
                    : !isLoading &&
                    [...new Array(12)].map(() => (
                        <div key={Math.random()}>
                            <ProductCard
                                url='/'
                                thumbnail='https://i.ibb.co.com/rbTcY11/7.png'
                                title='This is The Product Name'
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default TrendingProducts