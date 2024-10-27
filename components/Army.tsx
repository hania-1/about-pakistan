import React from "react";
import Image from "next/image";
// import Link from "next/link";
// import Army from "@/components/Army";

const Army = () => {
  return (
    <div>
      <div className="border-t border-gray-200 opacity-50 my-4"></div>
      <div
        className="bg-gray-900 p-6 rounded-lg text-white font-serif"
        data-aos="flip-right"
      >
        <h1
          className="text-center text-4xl font-extrabold underline"
          data-aos="flip-right"
        >
          Pakistan Army
        </h1>

        <p className="mt-4 text-lg" data-aos="flip-right">
          The Pakistan Army, the largest branch of the Pakistan Armed Forces,
          plays a central role in Pakistans defense and national security.
          Formed in 1947 following the partition of British India, it is
          responsible for land-based military operations and is headquartered in
          Rawalpindi. With a focus on both conventional warfare and
          counterinsurgency, the Pakistan Army has engaged in several conflicts,
          most notably with India over Kashmir, and has played a critical role
          in peacekeeping missions, such as those under the United Nations.
        </p>

        <div className="flex justify-center mt-8" data-aos="flip-right">
          <Image
            src="/pic-57.png"
            alt="Pakistan Army Overview"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        <p className="mt-4 text-lg" data-aos="flip-right">
          The Pakistan Army also has a significant influence within the country
          beyond defense. Historically, it has intervened in political affairs,
          leading to several military-led governments in Pakistan. Its focus on
          modernization has led to advancements in training, technology, and
          joint operations with other branches of Pakistans armed forces,
          including the Air Force and Navy.
        </p>

        <div className="flex justify-center mt-8" data-aos="flip-right">
          <Image
            src="/pic-56.png"
            alt="Pakistan Army in UN Missions"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>

        <p className="mt-4 text-lg" data-aos="flip-right">
          The Army also contributes to various national projects, such as
          disaster relief, infrastructure development, and, more recently,
          assisting with public health initiatives during the COVID-19 pandemic.
          The Pakistan Armys influence on both domestic and regional security
          makes it a powerful institution within the country.
        </p>
      </div>
      <div
        className="bg-gray-900 p-6 rounded-lg text-white font-serif"
        data-aos="flip-right"
      >
        <h1
          className="text-center text-4xl font-extrabold underline"
          data-aos="flip-right"
        >
          Pakistan Armed Forces
        </h1>

        <p className="mt-4 text-lg" data-aos="flip-right">
          The Pakistan Armed Forces consist of three main branches: the Pakistan
          Army, the Pakistan Air Force, and the Pakistan Navy. Each branch plays
          a vital role in maintaining the countrys defense, conducting
          operations, and contributing to national security.
        </p>

        <div className="flex justify-around mt-8" data-aos="flip-right">
          <div className="text-center">
            <Image
              src="/pic-58.png"
              alt="Pakistan Army"
              width={200}
              height={200}
              className="rounded-lg mx-auto"
              data-aos="flip-right"
            />
            <p className="mt-2" data-aos="flip-right">
              Pakistan Army: The land warfare branch responsible for
              ground-based military operations.
            </p>
          </div>

          <div className="text-center">
            <Image
              src="/pic-59.png"
              alt="Pakistan Air Force"
              width={200}
              height={200}
              className="rounded-lg mx-auto"
              data-aos="flip-right"
            />
            <p className="mt-2" data-aos="flip-right">
              Pakistan Air Force: Responsible for aerial defense and air
              operations, providing air support to ground forces.
            </p>
          </div>

          <div className="text-center">
            <Image
              src="/pic-60.png"
              alt="Pakistan Navy"
              width={200}
              height={200}
              className="rounded-lg mx-auto"
              data-aos="flip-right"
            />
            <p className="mt-2" data-aos="flip-right">
              Pakistan Navy: Protects the countrys maritime interests and
              conducts naval operations.
            </p>
          </div>
        </div>

        <p className="mt-4 text-lg">
          Each branch has its own distinct roles and responsibilities,
          contributing to the overall security framework of Pakistan. The
          Pakistan Armed Forces are also involved in various humanitarian
          efforts, disaster relief operations, and peacekeeping missions
          worldwide.
        </p>
      </div>
    </div>
  );
};

export default Army;
