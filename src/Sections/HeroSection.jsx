// Hero section of the homepage with main call-to-action
// File: HeroSection.jsx

function HeroSection() {
  return (
    <>
    <section className=" bg-coffeeBrown body-font">
  <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
    {/* First column: Text */}
    <div className="lg:flex-grow md:w-1/3 lg:pr-8 md:pr-6 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white">
      <p className="title-font sm:text-4xl text-3xl mb-4 font-medium">Coffee Break Bliss</p>
      <h1 className="mb-8 leading-relaxed">Coffee Break and Boost Your Productivity</h1>
      <div className="flex justify-center">
        <button className="ml-4 inline-flex text-black bg-coffeeCream border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 text-lg">Shop Now</button>
      </div>
    </div>

    {/* Second column: Split-colored image */}
    <div className="lg:max-w-lg lg:w-1/3 md:w-1/3 w-5/6 relative flex-grow">
      {/* Top part */}
      <div className="absolute inset-0 h-1/2 bg-coffeeBrown"></div>
      {/* Bottom part */}
      <div className="absolute inset-0 top-1/2 h-1/2 bg-lightCream"></div>
      {/* Image */}
      <img className="relative z-10 object-cover object-center rounded" alt="hero" src="/images/where-my-coffee.png" />
    </div>

    {/* Third column: Text and Image */}
    <div className="lg:flex-grow md:w-1/3 lg:pl-8 md:pl-6 flex flex-col md:items-start items-center space-y-6">
      {/* Top rectangle */}
      <div className="w-full text-white bg-coffeeBrown border border-white flex items-center space-x-4">
        <img className="w-40 h-auto object-cover" alt="item" src="/images/hazelnut-harmony.png" />
        <div className="text-left">
          <h2 className="title-font text-xl font-medium">Hazelnut Harmony</h2>
          <p className="">119.00 €</p>
        </div>
      </div>

      {/* Bottom rectangle */}
      <div className="w-full bg-lightGreen p-6 shadow-md text-black ">
        <h2 className="title-font text-xl font-medium text-black mb-2">Brew-tiful Moments</h2>
        <p className=" mb-4">Vivamus euismod pellentesque quis proin libero sapien urna malesuada, quam eros eget purus sodales vulputate vestibulum primis interdum, ridiculus </p>
        <button className="inline-flex text-white bg-coffeeBrown border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">Know More</button>
      </div>
    </div>
  </div>

</section>

<section className=" bg-lightCream body-font">
  <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
    {/* This would be your previous section with the 3 main divs */}
  </div>

  {/* New section with 3 cards */}
  <div className="container mx-auto py-6 px-8 h-[320px] flex justify-between items-center space-x-8">

    {/* Card 1 */}
    <div className="w-1/3 h-full rounded overflow-hidden flex">
  {/* Left image */}
  <div className="w-1/2 flex items-center justify-center">
    <img
      src="public/images/blended-coffee.png"
      alt="Coffee"
      className="h-full object-contain"
    />
  </div>

  {/* Right content */}
  <div className="w-1/2 flex flex-col bg-coffeeBrown p-4 justify-center rounded-r">
    <h2 className="text-lg font-bold text-lightCream mb-2">Blended Coffee</h2>
    <p className="text-lightCream mb-3">★★★★★</p>
    <button className="px-4 py-2 bg-coffeeCream text-coffeeBrown text-sm rounded hover:bg-gray-200 transition">
      BUY NOW
    </button>
  </div>
</div>

    {/* Card 2 */}
    <div className="w-1/3 h-full rounded overflow-hidden flex">
  {/* Left image */}
  <div className="w-1/2 flex items-center justify-center">
    <img
      src="public/images/flavored-coffee.png"
      alt="Coffee"
      className="h-full object-contain"
    />
  </div>

  {/* Right content */}
  <div className="w-1/2 flex flex-col bg-coffeeBrown p-4 justify-center rounded-r">
    <h2 className="text-lg font-bold text-lightCream mb-2">Blended Coffee</h2>
    <p className="text-lightCream mb-3">★★★★★</p>
    <button className="px-4 py-2 bg-coffeeCream text-coffeeBrown text-sm rounded hover:bg-gray-200 transition">
      BUY NOW
    </button>
  </div>
</div>

    {/* Card 3 */}
    <div className="w-1/3 h-full rounded overflow-hidden flex">
  {/* Left image */}
  <div className="w-1/2 flex items-center justify-center">
    <img
      src="public/images/roast-coffee.png"
      alt="Coffee"
      className="h-full object-contain"
    />
  </div>

  {/* Right content */}
  <div className="w-1/2 flex flex-col bg-coffeeBrown p-4 justify-center rounded-r">
    <h2 className="text-lg font-bold text-lightCream mb-2">Blended Coffee</h2>
    <p className="text-lightCream mb-3">★★★★★</p>
    <button className="px-4 py-2 bg-coffeeCream text-coffeeBrown text-sm rounded hover:bg-gray-200 transition">
      BUY NOW
    </button>
  </div>
</div>
    </div>
</section>
    </>
  )
}

export default HeroSection;
