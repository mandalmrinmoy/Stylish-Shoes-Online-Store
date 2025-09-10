import { cardImageData } from "../data/cardImage"

const Shop = () => {
  return (
    <>
      <div className="w-full h-[400px] bg-white mt-25 lg:px-10 md:px-5">
        <div className="flex justify-between">
          <p className="text-[25px] font-bold uppercase tracking-[4px]">Featured Products</p>
          <p className="text-[18px] font-bold uppercase">view All</p>
        </div>
        <div className="grid grid-cols-5 gap-6 mt-5">
          {cardImageData.slice(0, 5).map((cardImage) => (
            <div className="">
              <div>
                <img src={cardImage.src} alt="Card Image" key={cardImage.id} className="" />
              </div>
              <div className="flex justify-between lg:mt-2 md:mt-3 ">
                <p className="lg:text-[19px] md:text-[16px]">{cardImage.productName}</p>
                <p className="font-bold lg:text-[16px] md:text-[19px] text-gray-900">{cardImage.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Shop