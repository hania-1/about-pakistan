import React from "react";
import Image from "next/image";
// import { Video } from "lucide-react";
const Capital = () => {
  return (
    <div>
      <div className="border-t border-gray-300 opacity-50 my-4"data-aos="flip-right"></div>
      {" "}
      <h1 className="text-white underline font-extrabold text-center text-5xl font-serif"data-aos="flip-right">
        CAPITAL
      </h1>
      <div className="flex items-center justify-between mt-8"data-aos="flip-right">
        {/* Left Image */}
        <Image
          src="/pic-5.png"
          alt="Islamabad"
          width={400}
          height={400}
          className="rounded-lg"
        />

        {/* Centered Text */}
        <div className="text-white text-2xl font-serif text-center max-w-lg"data-aos="flip-right">
          <b>Islamabad</b>, the capital of Pakistan since <b>1947</b>, is a
          modern, planned city known for its <b>greenery</b> and{" "}
          <b>high quality of life</b>. It replaced <b>Karachi</b> as the capital
          to have a more <b>centrally located administrative hub</b>. Islamabad
          is known for landmarks like the
          <b>Faisal Mosque</b> and <b>Parliament House</b>.
        </div>

        {/* Right Image */}
        <Image
          src="/pic-6.png"
          alt="Islamabad"
          width={400}
          height={400}
          className="rounded-lg"data-aos="flip-right"
        />
      </div>
      <div className="border-t border-gray-300 opacity-50 my-4"data-aos="flip-right"></div>
      <div>
        <h1 className="text-white underline font-extrabold text-center text-5xl font-serif"data-aos="flip-right">
          CITIES
        </h1>
        <div className="text-white text-2xl font-serif m-3"data-aos="flip-right">
          <p>
            <b>Pakistan</b> is home to a diverse range of <b>cities</b>, each
            offering its own unique <b>cultural</b>, <b>historical</b>, and{" "}
            <b>economic</b> significance. <b>Karachi</b>, the countrys largest
            city, is a bustling <b>metropolis</b> and <b>economic</b> powerhouse
            with its port and industries. <b>Lahore</b>, often called the{" "}
            <b>cultural heart</b> of Pakistan, is rich in <b>history</b>,{" "}
            <b>arts</b>, and <b>Mughal architecture</b>. <b>Islamabad</b>, the
            capital, stands out for its <b>modern infrastructure</b> and{" "}
            <b>greenery</b>, serving as the <b>administrative</b> and{" "}
            <b>political</b> hub. Other major cities include <b>Rawalpindi</b>,
            which complements <b>Islamabad</b> as its twin city, <b>Peshawar</b>{" "}
            with its ancient heritage, <b>Quetta</b> known for its{" "}
            <b>mountainous landscapes</b>, and <b>Faisalabad</b>, an industrial
            center. Together, these cities reflect Pakistans diverse{" "}
            <b>culture</b> and dynamic <b>economy</b>.
          </p>
        </div>
        <br></br>
        <div className="text-white text-2xl font-serif"data-aos="flip-right">
          <ol>
            <li>
              1.<b>Karachi</b>
            </li>
            <li>
              2.<b>Lahore</b>
            </li>
            <li>
              3.<b>Islamabad</b>
            </li>
            <li>
              4.<b>Peshawar</b>
            </li>
            <li>
              5.<b>Rawalpindi</b>
            </li>
            <li>
              6.<b>Quetta</b>
            </li>
            <li>
              7.<b>Faisalabad</b>
            </li>
            <li>
              8.<b>Multan</b>
            </li>
          </ol>
        </div>
        <br></br>
        <div className="flex items-start"data-aos="flip-right">
          <Image
            src="/pic-8.png"
            alt="Islamabad"
            width={400}
            height={400}
            className="rounded-lg mr-4" // Margin to the right of the image
          />
          <div className="flex-1"data-aos="flip-right">
            <h2 className="text-white underline font-extrabold text-center text-3xl font-serif"data-aos="flip-right">
              KARACHI
            </h2>
            <div className="font-medium text-center text-2xl text-zinc-200 m-6"data-aos="flip-right">
              <b>Karachi</b>: The largest city and the economic hub of Pakistan,
              Karachi is known for its bustling port, diverse culture, and
              modern infrastructure. Its the main financial center and
              contributes massively to the countrys economy.
            </div>
            <video
              src="vid-1.mp4"
              controls
              poster="karachi"
              width="255"
              loop
            ></video>
          </div>
        </div>
        <div className="flex-1"data-aos="flip-right">
          <h2 className="text-white underline font-extrabold text-center text-3xl font-serif m-2"data-aos="flip-right">
            LAHORE
          </h2>
          <div className="font-medium text-center text-2xl text-zinc-200 m-6"data-aos="flip-right">
            <b>Lahore</b>, the cultural heart of Pakistan, is renowned for its
            vibrant history and rich traditions. With a population of over{" "}
            <b>11 million</b>, it stands as the countrys{" "}
            <b>second-largest city</b>. Lahore boasts significant historical
            sites, including the <b>Badshahi Mosque</b>, one of the largest
            mosques in the world, and the <b>Lahore Fort</b>, both of which
            reflect the grandeur of Mughal architecture. The city is a hub of
            education and art, hosting prestigious institutions like the{" "}
            <b>University of the Punjab</b> and <b>National College of Arts</b>.
            Lahore is also famous for its culinary delights, offering a diverse
            range of street food, including spicy <b>biryani</b>, <b>kebabs</b>,
            and sweet treats like <b>jalebi</b>. Each spring, the{" "}
            <b>Lahore Literary Festival</b> attracts writers and thinkers,
            showcasing the citys role as a center of intellectual discourse.
            Its rich cultural scene, combined with a modern business
            environment, makes Lahore a dynamic place to live and explore.
          </div>
          <div className="flex justify-center space-x-4 mt-4"data-aos="flip-right">
            <Image
              src="/pic-10.png"
              alt="Lahore"
              width={400}
              height={400}
              className="rounded-lg"data-aos="flip-right"
            />
            <Image
              src="/pic-11.png"
              alt="Lahore"
              width={400}
              height={400}
              className="rounded-lg"data-aos="flip-right"
            />
            <Image
              src="/pic-12.png"
              alt="Lahore"
              width={400}
              height={400}
              className="rounded-lg"data-aos="flip-right"
            />
          </div>
          <br></br>
          <div className="flex-1"data-aos="flip-right">
            <h2 className="text-white underline font-extrabold text-center text-3xl font-serif"data-aos="flip-right">
              ISLAMABAD
            </h2>
            <div className="font-medium text-center text-2xl text-zinc-200 m-6"data-aos="flip-right">
              <div className="flex items-center"data-aos="flip-right">
                {" "}
                {/* Flex container for text and image */}
                <div className="flex-1 mr-4"data-aos="flip-right">
                  {" "}
                  {/* Flex-grow for text and margin for spacing */}
                  <p>
                    <b>Islamabad</b>, the capital city of Pakistan, is a planned
                    city known for its modern architecture and lush greenery.
                    Established in <b>1967</b>, it was chosen to serve as a
                    political and administrative center, replacing{" "}
                    <b>Karachi</b>. The city is located at the foothills of the{" "}
                    <b>Margalla Hills</b>, providing a scenic backdrop and a
                    pleasant climate. One of its most notable landmarks is the{" "}
                    <b>Faisal Mosque</b>, which is not only the largest mosque
                    in Pakistan but also an architectural marvel. The citys
                    layout features broad avenues, parks, and residential areas,
                    making it one of the most organized urban centers in the
                    country.
                  </p>
                </div>
                <Image
                  src="/pic-13.png"
                  alt="Islamabad"
                  width={400}
                  height={400}
                  className="rounded-lg"data-aos="flip-right"
                />
              </div>
              <br />
              <b>Islamabad</b> is characterized by a diverse population that
              reflects the various cultures and ethnicities of Pakistan. It
              serves as a hub for education, politics, and culture, hosting
              several prestigious institutions, including the{" "}
              <b>University of the Punjab</b> and the{" "}
              <b>National University of Sciences and Technology (NUST)</b>. The
              city is also known for its vibrant arts scene and hosts events
              such as the <b>Islamabad Literature Festival</b>, which draws
              participants from across the country. Additionally, the nearby{" "}
              <b>Margalla Hills National Park</b> offers outdoor activities,
              making Islamabad a blend of urban sophistication and natural
              beauty.
            </div>

            <div className="flex justify-center"data-aos="flip-right">
              <Image
                src="/pic-14.png"
                alt="Islamabad"
                width={400}
                height={400}
                className="rounded-lg mr-4"data-aos="flip-right" // margin-right for spacing
              />
              <Image
                src="/pic-15.png"
                alt="Islamabad"
                width={400}
                height={400}
                className="rounded-lg" data-aos="flip-right"// no extra margin for the last image
              />
            </div>
          </div>
          <br></br>
          <div className="flex-1"data-aos="flip-right">
            <h2 className="text-white underline font-extrabold text-center text-3xl font-serif"data-aos="flip-right">
              PESHAWAR
            </h2>
            <div className="font-medium text-center text-2xl text-zinc-200 m-6"data-aos="flip-right">
              <div className="flex items-center"data-aos="flip-right">
                {" "}
                {/* Flex container for text and image */}
                <div className="flex-1 mr-4"data-aos="flip-right">
                  {" "}
                  {/* Flex-grow for text and margin for spacing */}
                  <p>
                    <b>Peshawar</b>, one of Pakistans oldest and most historic
                    cities, is known for its deep cultural roots and strategic
                    importance. Nestled in the Khyber Pakhtunkhwa province, near
                    the <b>Khyber Pass</b>, Peshawar has served as a vital trade
                    route connecting Central Asia with the Indian subcontinent.
                    Established over <b>2,000 years</b> ago, it flourished
                    during the <b>Gandhara civilization</b>, becoming a center
                    of Buddhist art and learning. Later, under Islamic rule and
                    Mughal influence, Peshawar grew into a key cultural and
                    political hub. Today, it blends its ancient heritage with
                    modern development, remaining a symbol of{" "}
                    <b>Pashtun culture</b> and history.
                  </p>
                </div>
                <Image
                  src="/pic-16.png"
                  alt="Islamabad"
                  width={400}
                  height={400}
                  className="rounded-lg"data-aos="flip-right"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/pic-17.png"
                alt="Islamabad"
                width={400}
                height={400}
                className="rounded-lg mr-4" data-aos="flip-right"// margin-right for spacing
              />
            </div>
          </div>
          <br></br>
          <div className="flex-1">
            <h2 className="text-white underline font-extrabold text-center text-3xl font-serif"data-aos="flip-right">
              RAWALPINDI
            </h2>
            <div className="font-medium text-center text-2xl text-zinc-200 m-6"data-aos="flip-right">
              <div className="flex items-center"data-aos="flip-right">
                {" "}
                {/* Flex container for text and image */}
                <div className="flex-1 mr-4"data-aos="flip-right">
                  {" "}
                  {/* Flex-grow for text and margin for spacing */}
                  <p>
                    <b>Rawalpindi</b>, often referred to as <b>Pindi</b>, is one of
                    Pakistans major cities and holds significant historical and
                    cultural importance. Located in the Punjab province, it is
                    adjacent to the capital city, <b>Islamabad</b>. Rawalpindi
                    is known for its rich military history as the headquarters
                    of the <b>Pakistan Army</b> is situated here. The city has
                    seen rapid development in recent decades but still retains
                    its traditional bazaars, such as the famous{" "}
                    <b>Raja Bazaar</b>, reflecting the vibrant culture and
                    history of the region. With landmarks like the{" "}
                    <b>Ayub National Park</b> and the historic <b>Rawat Fort</b>
                    , Rawalpindi offers a mix of modernity and history. The
                    citys proximity to Islamabad makes it an important economic
                    and transit hub for both residents and tourists.
                  </p>
                </div>
                <Image
                  src="/pic-18.png"
                  alt="Islamabad"
                  width={400}
                  height={400}
                  className="rounded-lg"data-aos="flip-right"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/pic-19.png"
                alt="Islamabad"
                width={400}
                height={400}
                className="rounded-lg  mr-4" data-aos="flip-right"// margin-right for spacing
              />

              <Image
                src="/pic-20.png"
                alt="Islamabad"
                width={400}
                height={400}
                className="rounded-lg mr-4" data-aos="flip-right"// margin-right for spacing
              />
            </div>
          </div>
          <br></br>
          <div className="flex-1">
            <h2 className="text-white underline font-extrabold text-center text-3xl font-serif"data-aos="flip-right">
              QUETTA
            </h2>
            <div className="font-medium text-center text-2xl text-zinc-200 m-6"data-aos="flip-right">
              <div className="flex items-center"data-aos="flip-right">
                {" "}
                {/* Flex container for text and image */}
                <div className="flex-1 mr-4"data-aos="flip-right">
                  {" "}
                  {/* Flex-grow for text and margin for spacing */}
                  <b>Quetta</b>, the capital of the <b>Balochistan</b> province
                  of Pakistan, is often referred to as the 
                  <b>Fruit Garden of Pakistan</b> due to the wide variety of
                  fruits grown in the region. Surrounded by the <b>Chiltan</b>,{" "}
                  <b>Zarghoon</b>, and <b>Koh-e-Murdar</b> mountain ranges, the
                  city is known for its rugged beauty and cool climate.
                  <br />
                  Quetta is a melting pot of cultures with a diverse population,
                  including <b>Pashtuns</b>, <b>Baloch</b>, <b>Hazaras</b>, and
                  other ethnic groups. It plays a crucial role in the regional
                  economy and serves as a major trade hub with neighboring{" "}
                  <b>Afghanistan</b> and <b>Iran</b>. The citys prominent
                  landmarks include the <b>Quetta Fort</b>, <b>Hanna Lake</b>,
                  and <b>Balochistan University</b>.
                </div>
                <div className="flex justify-center"data-aos="flip-right">
                  <Image
                    src="/pic-21.png"
                    alt="Quetta"
                    width={400}
                    height={400}
                    className="rounded-lg mr-4"data-aos="flip-right" // margin-right for spacing
                  />
                  <Image
                    src="/pic-22.png"
                    alt="Quetta"
                    width={400}
                    height={400}
                    className="rounded-lg"data-aos="flip-right"
                  />
                </div>
              </div>
              <br></br>
              <div className="flex-1"data-aos="flip-right">
                <h2 className="text-white underline font-extrabold text-center text-3xl font-serif"data-aos="flip-right">
                  PESHAWAR
                </h2>
                <div className="font-medium text-center text-2xl text-zinc-200 m-6"data-aos="flip-right">
                  <div className="flex items-center"data-aos="flip-right">
                    {" "}
                    {/* Flex container for text and image */}
                    <div className="flex-1 mr-4"data-aos="flip-right">
                      {" "}
                      {/* Flex-grow for text and margin for spacing */}
                      <b>Faisalabad</b>, often referred to as the 
                      <b>Manchester of Pakistan</b>, is the third-largest city
                      in the country. It is a major industrial and distribution
                      center, known for its robust textile industry, which plays
                      a critical role in Pakistans economy. Established in the
                      late 19th century, Faisalabad was originally known as{" "}
                      <b>Lyallpur</b>, after Sir James Lyall, a British officer,
                      and was later renamed Faisalabad in honor of{" "}
                      <b>King Faisal of Saudi Arabia</b> in 1979.
                      <br></br>
                      The city is located in <b>Punjab province</b> and is
                      well-known for its agricultural produce, including wheat,
                      sugarcane, vegetables, and fruit. Faisalabad also boasts
                      significant educational institutions, such as the{" "}
                      <b>University of Agriculture Faisalabad (UAF)</b>, one of
                      the leading agricultural universities in Asia.
                      <br></br>
                      Faisalabad is known for its distinct clock tower,{" "}
                      <b>Ghanta Ghar</b>, around which the citys eight bazaars
                      are arranged in a pattern resembling the Union Jack,
                      reflecting its British colonial past. The city is
                      culturally vibrant, with numerous festivals, markets, and
                      traditional cuisine.
                    </div>
                    <Image
                      src="/pic-23.png"
                      alt="Faisalbabad"
                      width={400}
                      height={400}
                      className="rounded-lg"data-aos="flip-right"
                    />
                  </div>
                </div>
                <div className="flex justify-center"data-aos="flip-right">
                  <Image
                    src="/pic-24.png"
                    alt="Faisalbabad"
                    width={400}
                    height={400}
                    className="rounded-lg mr-4" data-aos="flip-right"// margin-right for spacing
                  />
                </div>
              </div>
              <br></br>
              <div className="flex-1"data-aos="flip-right">
                <h2 className="text-white underline font-extrabold text-center text-3xl font-serif"data-aos="flip-right">
                  MULTAN
                </h2>
                <div className="font-medium text-center text-2xl text-zinc-200 m-6"data-aos="flip-right">
                  <div className="flex items-center"data-aos="flip-right">
                    {" "}
                    {/* Flex container for text and image */}
                    <div className="flex-1 mr-4"data-aos="flip-right">
                      {" "}
                      {/* Flex-grow for text and margin for spacing */}
                      <b>Multan</b>, one of Pakistans oldest cities, is often
                      referred to as the <b>City of Saints</b> due to its rich
                      religious history and numerous Sufi shrines. Located in
                      the southern region of <b>Punjab</b>, Multan is known for
                      its historic architecture, vibrant bazaars, and cultural
                      significance. The city has been a center of trade,
                      culture, and politics for centuries, with its roots
                      tracing back to ancient civilizations. Multan is famous
                      for its <b>Sufi shrines</b>, such as the{" "}
                      <b>Shrine of Bahauddin Zakariya</b> and the{" "}
                      <b>Tomb of Shah Rukn-e-Alam</b>, which attract devotees
                      from across the country. Additionally, the city is known
                      for its unique blend of ancient and modern elements, where
                      old fortifications and tombs stand alongside bustling
                      commercial areas.
                    </div>
                    <Image
                      src="/pic-25.png"
                      alt="Multan"
                      width={400}
                      height={400}
                      className="rounded-lg"data-aos="flip-right"
                    />
                  </div>
                </div>
                <div className="flex justify-center"data-aos="flip-right">
                  <Image
                    src="/pic-26.png"
                    alt="Multan"
                    width={400}
                    height={400}
                    className="rounded-lg mr-4" // margin-right for spacing
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capital;
