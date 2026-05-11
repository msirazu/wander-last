import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.png')] bg-cover bg-center text-white flex flex-col items-center gap-6 md:h-150">

      {/* Top Section */}
      <div className="p-5 md:p-10 text-center flex flex-col items-center gap-4 flex-1 justify-center">

        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-sm md:text-lg lg:text-2xl max-w-2xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
          <button className="uppercase bg-cyan-500 px-4 md:px-5 py-2 md:py-3 cursor-pointer text-sm md:text-base">
            Explore Now
          </button>

          <button className="uppercase px-4 md:px-5 py-2 md:py-3 bg-white/50 cursor-pointer text-sm md:text-base">
            View Destination
          </button>
        </div>

      </div>

      {/* Bottom Filter Section */}
      <div className="bg-white/30 w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 p-4 md:p-6 text-black">

        <div className="text-center md:text-left">
          <h3 className="text-xs md:text-sm">Location</h3>
          <p className="text-xs">Address, City or Zip</p>
        </div>

        <Separator className="hidden md:block" orientation="vertical" />

        <div className="text-center md:text-left">
          <h3 className="text-xs md:text-sm">Date/Duration</h3>
          <p className="text-xs">Anytime/3 Days</p>
        </div>

        <Separator className="hidden md:block" orientation="vertical" />

        <div className="text-center md:text-left">
          <h3 className="text-xs md:text-sm">Budget</h3>
          <p className="text-xs">$0-$3000</p>
        </div>

        <Separator className="hidden md:block" orientation="vertical" />

        <div className="text-center md:text-left">
          <h3 className="text-xs md:text-sm">People</h3>
          <p className="text-xs">5-10</p>
        </div>

        <button className="bg-cyan-500 py-2 px-4 text-white w-full md:w-auto">
          Search
        </button>

      </div>

    </div>
  );
};

export default Banner;