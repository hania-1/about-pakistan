import React from "react";
import Image from "next/image";

const Politics = () => {
  return (
    <div>
      <div className="border-t border-gray-300 opacity-50 my-4"data-aos="flip-right"></div>
      <div>
        <h1 className="text-white underline font-extrabold text-center text-5xl font-serif"data-aos="flip-right">
          POLITICS
        </h1>
        <div className="text-white text-center mt-4 text-2xl font-serif"data-aos="flip-right">
          Pakistans political landscape is shaped by a mix of democratic,
          military, and bureaucratic influences. The country gained independence
          in 1947, and its politics have since oscillated between democratic
          governance and military rule. Political power is shared between the
          President, the Prime Minister, and the Parliament, which consists of
          the National Assembly and the Senate. The role of the military is
          significant, and it has directly ruled Pakistan for several decades
          intermittently.
        </div>
        <div className="flex justify-around items-center mt-8"data-aos="flip-right">
          <div className="text-center"data-aos="flip-right">
            <Image
              src="/pic-40.png"
              alt="PTI"
              width={300}
              height={300}
              className="rounded-lg"data-aos="flip-right"
            />
            <p className="text-white mt-2"data-aos="flip-right">Pakistan Tehreek-e-Insaf (PTI)</p>
          </div>
          <div className="text-center"data-aos="flip-right">
            <Image
              src="/pic-41.png"
              alt="PMLN"
              width={300}
              height={300}
              className="rounded-lg"data-aos="flip-right"
            />
            <p className="text-white mt-2"data-aos="flip-right">Pakistan Muslim League (PML)</p>
          </div>
          <div className="text-center">
            <Image
              src="/pic-42.png"
              alt="PPP"
              width={300}
              height={300}
              className="rounded-lg"data-aos="flip-right"
            />
            <p className="text-white mt-2"data-aos="flip-right">Pakistan Peoples Party (PPP)</p>
          </div>
        </div>
        
        <div className="text-white text-center mt-4 text-2xl font-serif"data-aos="flip-right">
          Pakistans political parties are diverse, with the major ones
          including the Pakistan Peoples Party (PPP), Pakistan Muslim League
          (PML), and Pakistan Tehreek-e-Insaf (PTI). These parties differ in
          ideology and policies, often focusing on issues like economic reform,
          foreign relations, and social development. Political challenges in
          Pakistan include issues of corruption, economic stability, and ongoing
          disputes with neighboring countries, particularly over Kashmir. The
          judiciary, civil society, and media also play vital roles in shaping
          public opinion and government accountability in Pakistan.
        </div>
      </div>
      <br></br>
      <div className="border-t border-gray-300 opacity-50 my-4"data-aos="flip-right"></div>
      <div>
        <h1 className="text-white underline font-extrabold text-center text-5xl font-serif"data-aos="flip-right">
          Pakistan Tehreek-e-Insaf (PTI)
        </h1>
      </div>
      <div className="text-white text-center mt-4 text-2xl font-serif"data-aos="flip-right">
        Founded in 1996 by Imran Khan, PTI emerged as a major political force in
        the 2010s, appealing primarily to the youth and urban middle class. The
        party promotes anti-corruption, social justice, and development-oriented
        policies. PTI gained significant popularity leading up to the 2018
        general elections, resulting in Imran Khan becoming Prime Minister. The
        party has faced criticism for its governance challenges and handling of
        economic issues.
        <Image
          src="/pic-43.png"
          alt="PTI"
          width={300}
          height={300}
          className="rounded-lg mx-auto mt-4"data-aos="flip-right"
        />
      </div>
      <br></br>
      <div>
        <h1 className="text-white underline font-extrabold text-center text-5xl font-serif"data-aos="flip-right">
          Pakistan Muslim League (PML)
        </h1>
      </div>
      <div className="text-white text-center mt-4 text-2xl font-serif"data-aos="flip-right">
        The PML has several factions, but the most prominent is the Pakistan
        Muslim League-Nawaz (PML-N), founded by Nawaz Sharif in 1993. The PML-N
        focuses on economic development and infrastructure projects, advocating
        for private sector-led growth. The party has faced challenges related to
        corruption allegations against its leaders and has been in power
        multiple times. Nawaz Sharifs political career has seen him serve as
        Prime Minister three times.
        <Image
          src="/pic-44.png"
          alt="PML"
          width={300}
          height={300}
          className="rounded-lg mx-auto mt-4"data-aos="flip-right"
        />
      </div>
      <br></br>
      <div>
        <h1 className="text-white underline font-extrabold text-center text-5xl font-serif"data-aos="flip-right">Pakistan Peoples Party (PPP)</h1>
      </div>
      <div className="text-white text-center mt-4 text-2xl font-serif"data-aos="flip-right">
        Founded in 1967 by Zulfikar Ali Bhutto, the PPP has traditionally
        represented the interests of the rural populace, particularly in Sindh
        province. The party promotes socialist policies and has focused on
        social justice, land reforms, and workers rights. The PPP has faced
        criticism for corruption and governance issues, particularly during its
        time in power in the late 2000s and early 2010s. Its current leadership
        is under Bilawal Bhutto Zardari, the son of Benazir Bhutto.

        <Image
          src="/pic-45.png"
          alt="PPP"
          width={300}
          height={300}
          className="rounded-lg mx-auto mt-4"data-aos="flip-right"
        />
      </div>
    </div>
  );
};

export default Politics;
