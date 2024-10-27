import React from "react";
import Image from "next/image";


const First = () => {
  return (
    <div>
      {" "}
      <h1 className="text-white underline font-extrabold text-center text-5xl"data-aos="flip-right">
        PAKISTAN
      </h1>
      <div className="text-white text-center mt-4 text-2xl"data-aos="flip-right" >
        The name Pakistan means &quot;Land of the Pure,&quot; derived from &quot;Paq&quot; (pure)
        and &quot;Stan&quot; (land). It gained independence from British rule on August
        14, 1947, with Muhammad Ali Jinnah as its founder. Pakistan is known for
        its stunning natural landscapes, rich culture, and diverse traditions.
      </div>
      <Image
        src="/pic-3.png"
        alt="Pakistan"
        width={400}
        height={400}
        className="rounded-lg mx-auto m-11"data-aos="fade-right"
      />
    </div>
  );
};

export default First;
