import React from "react";
import Image from "next/image";
import Divider from "./Divider"; // Ensure this import is correct

const About = () => {
  return (
    <div>
      {/* Add a Divider here */}
      <Divider />
      
      <h1 className="text-white underline font-extrabold text-center text-5xl font-serif m-9"data-aos="flip-right">
        About Pakistan
      </h1>
      <div className="text-white text-center mt-4 text-2xl font-serif"data-aos="fade-up">
        Pakistan is a country rich in history and culture, founded on
        <b>August 14, 1947</b>, by <b>Muhammad Ali Jinnah</b>. It features
        breathtaking landscapes, from the peaks of <b>K2</b> in the
        <b>Karakoram Range</b> to the plains of the <b>Indus River</b>. The
        capital, <b>Islamabad</b>, stands out for its beauty and modern
        infrastructure. Known for its vibrant spirit, Pakistan excels in
        <b>cricket</b> and has a growing <b>tech scene</b>. Its diverse cuisine, with dishes
        like <b>biryani</b> and <b>karahi</b>, reflects its cultural richness.
        Pakistan is also home to <b>ancient treasures</b> like
        <b>Mohenjo-Daro and Taxila</b>, combining heritage with modern progress.
      </div>
      
      <Divider /> {/* Optional: You can add another Divider below the text if desired */}
      
      <div className="flex justify-between items-center mt-4"data-aos="flip-right">
        {/* Left Image */}
        <Image
          src="/pic-2.png"
          alt="Pakistan"
          width={400}
          height={400}
          className="rounded-lg"
        />

        {/* Right Text */}
        <div className="flex flex-col justify-center items-center text-white text-2xl font-serif text-left"data-aos="fade-up">
          <p className="text-center">
            From &quot;the bustling markets of Karachi,&quot; to &quot;the tranquil valleys of Hunza,&quot;, 
            Pakistan showcases a vibrant cultural mosaic. Its journey reflects a 
            blend of <b>ancient wisdom and contemporary vision</b>, making it a <b>fascinating destination for exploration</b>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
