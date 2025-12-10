  // import {largeData} from "../data/largeImage"
  import { cardImageData } from "../data/cardImage";
  // import { GoDotFill } from "react-icons/go";
  import collection1 from "../assets/images/collection-item1.jpg"
  import collection2 from "../assets/images/collection-item2.jpg"
import LargeGallery from "../components/LargeGallery";
const Home = () => {
  return (
    <>
    <div className='w-full'>
    <LargeGallery/>
      {/* offer container */}
      <div className='flex justify-center  '>
        <div className='relative bg-slate-100 p-[48px] lg:w-[1288px] lg:h-[190px] lg:flex-row lg:items-center lg:gap-70 
                        md:w-[688px] md:h-[323px] md:flex md:flex-col
                        sm:w-[500px] sm:h-[420px] sm:flex sm:flex-col
                        w-[400px] h-[380px] flex flex-col
                        '>
          <div className=''>
        <p className='text-stone-900 font-bold lg:text-5xl lg:mb-2 md:text-[53px] md:leading-15 md:mb-2 sm:text-[54px] sm:leading-14 sm:mb-2 text-[54px] leading-14 mb-2'>10% OFF Discount Coupons</p>
        <p className='text-stone-600 lg:text-lg md:text-[19px] md:mb-4 sm:text-[19px] sm:mb-4 text-[19px] mb-4 '>Subscribe us to get 10% OFF on all the purchases</p>
        </div>
        <div className='z-20'>
        <button className='text-white cursor-pointer duration-200 hover:bg-red-600 lg:w-[190px] lg:h-[54px] bg-black lg:text-[18px] 
                           md:w-[218px] md:h-[60px] md:text-[21px] md:z-20 sm:w-[223px] sm:h-[65px] sm:text-[19px] w-[223px] h-[65px] text-[19px]'>EMAIL ME</button>
        </div>
        <p className=' font-serif font-bold text-gray-300 absolute lg:right-0 lg:bottom-0 lg:text-[140px] 
                       md:right-0 md:bottom-0 md:text-9xl hidden md:block'>10%OFF</p>
        </div>
      </div>
      {/* card-image container */}
      <div className="w-full bg-white mt-25 lg:px-10 md:px-5 px-4">
        <div className="flex justify-between">
          <p className="text-[25px] font-bold uppercase tracking-[4px]">Featured Products</p>
          <p className="text-[18px] font-bold uppercase cursor-pointer hover:underline">view All</p>
        </div>
      <div className="grid mt-6 w-full gap-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {cardImageData.slice(0,5).map((cardImage)=>(
          <div key={cardImage.id}>
          <div>
            <img src={cardImage.src} alt="Card Image" />
          </div>
          <div className="flex justify-between lg:mt-2 md:mt-3 ">
            <p className="lg:text-[19px] md:text-[16px]">{cardImage.productName}</p>
            <p className="font-bold lg:text-[16px] md:text-[19px] text-gray-900">{cardImage.price}</p>
          </div>
          </div>
        ))}
      </div>
      </div>
      {/* Collection image container */}
      <div className="w-full px-10 bg-white h-full mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <img src={collection1} alt="" className="rounded-lg "/>
          <img src={collection2} alt="" className="rounded-lg"/>
          </div>
      </div>
      {/* latest product containet */}
      <div className="w-full bg-white mt-20 lg:px-10 md:px-5 px-4">
        <div className="flex justify-between">
          <p className="text-[25px] font-bold uppercase tracking-[4px]">Latest Products</p>
          <p className="text-[18px] font-bold uppercase cursor-pointer hover:underline">view All</p>
        </div>
      <div className="grid mt-6 w-full gap-6 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {cardImageData.slice(5,10).map((cardImage)=>(
          <div key={cardImage.id}>
          <div>
            <img src={cardImage.src} alt="Card Image" />
          </div>
          <div className="flex justify-between lg:mt-2 md:mt-3 ">
            <p className="lg:text-[19px] md:text-[16px]">{cardImage.productName}</p>
            <p className="font-bold lg:text-[16px] md:text-[19px] text-gray-900">{cardImage.price}</p>
          </div>
          </div>
        ))}
      </div>
      </div>
      </div>
    </>
  )
}

export default Home