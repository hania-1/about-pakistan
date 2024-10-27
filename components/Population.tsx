import React from 'react'
import Image from 'next/image'
const Population = () => {
  return (
    <div>
      <div className="border-t border-gray-300 opacity-50 my-4"data-aos="flip-right"></div>
        <div><h1 className="text-white underline font-extrabold text-center text-5xl font-serif m-9"data-aos="flip-right">POPULATION</h1></div>
        <br></br>
  <div>
    <h1 className="text-white underline font-extrabold text-center text-3xl font-serif"data-aos="flip-right">
      Pakistans Population Overview
    </h1>
    <div className="text-white text-center mt-4 text-2xl font-serif"data-aos="flip-right">
      Pakistan is the worlds fifth-most populous country, with a population
      estimated at around 240 million people as of 2023. The country has a high
      population growth rate, contributing to its rapidly growing population.
      It has a youthful demographic, with over 60% of the population below the
      age of 30. Urban areas, especially cities like Karachi, Lahore, and
      Islamabad, are densely populated due to factors like migration for better
      job opportunities and education.
    </div>
    <div className="flex justify-center gap-8 mt-8"data-aos="flip-right">
      <div className="text-center"data-aos="flip-right">
        <Image
          src="/pic-48.png"
          alt="Age Distribution"
          width={400}
          height={400}
          className="rounded-lg"data-aos="flip-right"
        />
        <p className="text-white mt-2"data-aos="flip-right">Age Distribution</p>
      </div>
      <div className="text-center">
        <Image
          src="/pic-47.png"
          alt="Urbanization"
          width={400}
          height={400}
          className="rounded-lg"data-aos="flip-right"
        />
        <p className="text-white mt-2"data-aos="flip-right">Urbanization</p>
      </div>
    </div>
    <div className="flex justify-end m-5 mt-8"data-aos="flip-right">
  <div className="text-white text-center m-32 text-xl font-serif"data-aos="flip-right">
    <p>
      Key points about Pakistans population include a young age distribution,
      increased urbanization, and varied population density, with Punjab being
      the most densely populated and Balochistan the least.
    </p>
  </div>
  <Image
    src="/pic-49.png"
    alt="Population Density"
    width={400}
    height={400}
    className="rounded-lg ml-4"data-aos="flip-right"
  />
</div>
<div><h1 className="text-white underline font-extrabold text-center text-3xl font-serif m-9"data-aos="flip-right">Challenges Faced by Pakisan Due to Population</h1></div>
<br></br>
<div className="text-white text-xl font-serif m-5 mt-8 space-y-8"data-aos="flip-right">
  {/* Resource Management */}
  <div className="flex items-center"data-aos="flip-right">
    <Image
      src="/pic-50.png"
      alt="Resource Management"
      width={400}
      height={400}
      className="rounded-lg mr-4"data-aos="flip-right"
    />
    <p className="text-left"data-aos="flip-right">
      <strong>Resource Management:</strong> The increasing population puts
      immense pressure on natural resources like water, energy, and agricultural
      land. Pakistan is already experiencing water scarcity issues, with demand
      expected to increase due to both population growth and agricultural needs.
      Efficient management and conservation of resources are crucial to meeting
      the demands of a growing population.
    </p>
  </div>

  {/* Education */}
  <div className="flex items-center space-x-4"data-aos="flip-right">
    <Image
      src="/pic-51.png"
      alt="Education Left"
      width={300}
      height={300}
      className="rounded-lg"data-aos="flip-right"
    />
    <p className="text-center"data-aos="flip-right">
      <strong>Education:</strong> Pakistans young population highlights the
      need for widespread access to quality education. However, challenges like
      limited funding, inadequate infrastructure, and low literacy rates
      persist. Access to quality education, especially in rural areas, is
      critical for improving literacy and equipping youth with skills for the
      future job market.
    </p>
    <Image
      src="/pic-52.png"
      alt="Education Right"
      width={300}
      height={300}
      className="rounded-lg"data-aos="flip-right"
    />
  </div>

  {/* Healthcare */}
  <div className="flex items-center"data-aos="flip-right">
    <Image
      src="/pic-53.png"
      alt="Healthcare"
      width={400}
      height={400}
      className="rounded-lg mr-4"data-aos="flip-right"
    />
    <p className="text-left"data-aos="flip-right">
      <strong>Healthcare:</strong> With a larger population, the demand for
      healthcare services rises, yet Pakistan faces issues with healthcare
      infrastructure, shortage of trained medical staff, and unequal access to
      services, especially in rural regions. This can lead to gaps in addressing
      health crises and diseases and providing maternal and child healthcare
      services.
    </p>
  </div>

  {/* Employment */}
  <div className="flex items-center space-x-4"data-aos="flip-right">
    <Image
      src="/pic-54.png"
      alt="Employment Left"
      width={300}
      height={200}
      className="rounded-lg"data-aos="flip-right"
    />
    <p className="text-center"data-aos="flip-right">
      <strong>Employment:</strong> High population growth results in an influx
      of young people entering the job market, creating a demand for employment
      that outpaces the availability of jobs. Unemployment or underemployment
      can lead to economic strain, social issues, and poverty, making it
      essential to create sustainable jobs, particularly in emerging industries
      and the tech sector.
    </p>
  </div>
</div>

</div>

    </div>
  )
}

export default Population