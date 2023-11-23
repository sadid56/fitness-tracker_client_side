import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";
import bgShap from "../../../assets/images/bg-banner-shap.png";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
const Banner = () => {
  return (
    <div>
      <div>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={Infinity}
          effect={"fade"}
          modules={[Autoplay, EffectFade]}
          className="mySwiper relative">
          <SwiperSlide>
            <img src={slider1} className="h-screen w-full " alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} className="h-screen w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} className="h-screen w-full" alt="" />
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-1/4 z-10 md:w-3/5  px-5 md:ml-16 md:pl-5 space-y-2 md:border-l-2 border-[#fe1313] text-center md:text-start">
          <div className="flex items-center gap-4 justify-center">
            <div className="border border-[#fe1313] w-[40px]"></div>
            <p className="text-xl font-medium text-[#fe1313]">With Srong</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white uppercase">
            Build perfect body shape for good and healthy life.
          </h2>
          <p className="text-white">
            Elevate your fitness game with our state-of-the-art Fitness Tracker!
            Seamlessly monitor steps, calories, and sleep quality. Achieve your
            wellness goals effortlessly. Your journey to a healthier you begins
            here!
          </p>
          <button className="bg-[#fe1313] px-6 py-2 rounded-md font-medium text-white p-2 text-xl hover:bg-[#c20505]">
            Classes
          </button>
        </div>
        <img
          className="absolute top-0 right-0 w-2/5 h-full z-10"
          src={bgShap}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
