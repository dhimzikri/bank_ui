import styles from "../style";
import { discount, head2 } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Agustus 2022,</span> Desa Favorit{" "}
            <span className="text-white">Kiarasari,</span> Sukajaya
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Desa Wisata <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Kiarasari</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Yang Potensial.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Dibangun atas rasa syukur masyarakat yang peduli akan lingkungan dan
          keindahan alam. Desa{" "}
          <span className="text-gradient font-semibold">Kiarasari</span> berada
          di Kecamatan Sukajaya, Kabupaten Bogor dan saat ini menjadi salah satu
          Desa Favorite untuk warga Kiarasari.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={head2}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] ml-auto rounded-2xl"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
