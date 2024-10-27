import React from "react";
import Link from "next/link";
import Image from "next/image";

const Ending = () => {
  return (
    
    <div
      className="text-center m-6 p-4 bg-gradient-to-r from-white to-green-700 text-white rounded-lg shadow-lg"data-aos="flip-right"
      
    >
      <h2 className="text-2xl font-bold"data-aos="flip-right">Learn more about Pakistan</h2>
      <p className="mt-4 text-base"data-aos="flip-right">
        Lets Discover the Beauty of Our Pakistan!
      </p>

      {/* Call to Action Button */}
      <Link
        href="https://en.wikipedia.org/wiki/Pakistan"
        className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-lg hover:bg-green-800 transition-colors duration-300"
        data-aos="flip-right"      >
        Learn How You Can Help
      </Link>
      <Image
        src="/pic-17.png"
        alt="Logo"
        width={200}
        height={200}
        className="mx-auto mt-6"data-aos="flip-right"
      />
      <div className="mt-6 font-serif text-center font-semibold text-black"data-aos="flip-right">
        Its our responsibility to speard knowledge information and beautyfull
        side of pakistan to other,so that people will know how beauty full
        pakistan is, and also about the hospitality of pakistan.
      </div>
    </div>
  );
};

export default Ending;
