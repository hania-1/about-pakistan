import React from "react";
import Image from "next/image";

const Currency = () => {
  return (
    <div>
      <div className="border-t border-gray-300 opacity-50 my-4"data-aos="flip-right"></div>
      <div className="p-4">
        <h2 className="text-white underline font-extrabold text-center text-5xl"data-aos="flip-right">
          About Pakistani Currency
        </h2>
        <div className="flex items-center"data-aos="flip-right">
    <Image
      src="/pic-77.png"
      alt="Healthcare"
      width={400}
      height={400}
      className="rounded-lg mr-4"data-aos="flip-right"
    />
    <p  className="text-white text-center mt-4 text-2xl font-serif"  data-aos="flip-right">
    The <strong>Pakistani Rupee (PKR)</strong> is the official currency of
        Pakistan, symbolized by <strong>₨</strong>. Introduced in{" "}
        <strong>1947</strong> after the countrys independence, the rupee has
        undergone significant changes and fluctuations due to various economic
        challenges, including inflation and political instability. It is
        subdivided into <strong>100 paise</strong>, though coins of this
        denomination are seldom used today. The State Bank of Pakistan is
        responsible for issuing banknotes and coins, with common denominations
        including <strong>Rs. 20, 50, 100, 500, 1,000</strong>, and{" "}
        <strong>5,000</strong>. Over recent years, the rupee has faced
        depreciation against major currencies, particularly the US dollar,
        impacting trade and economic stability in the region. The exchange
        rate remains dynamic, making it essential for individuals and
        businesses to stay informed about current values to navigate the
        financial landscape effectively.
    </p>
  </div>
      </div>
    </div>
  );
};

export default Currency;
