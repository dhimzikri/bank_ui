import React from 'react'
import { wisata } from '../constant'
import styles, { layout } from '../style'
import Button from './Button'


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== wisata.length - 1 ? "mb-6" : "mb-0"} wisata-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="wisata" className={layout.section}>
    <div className={layout.sectionInfon}>
      <h2 className={styles.heading2}>
        Tidak perlu khawatir, <br className="sm:block hidden" /> Akan Kami
        Sajikan yang Terbaik.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Disini anda bisa berpetualang dan ditemani pemandangan hijau
        yang menyegarkan mata. Konsep kami adalah{" "}
        <span className="text-gradient font-medium">ADVENTURE ETHNIC</span>{" "}
        dimana sebuah olahraga air yang sekaligus menjadi salah satu wisata air
        bergendre petualangan yang memacu saraf adrenalin ini dapat dirasakan
        sepaket dengan pengalaman berwisata adat komunitas Sunda.
      </p>
      <Button styles={`mt-10`} />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {wisata.map((wisata, index) => (
        <FeatureCard key={wisata.id} {...wisata} index={index} />
      ))}
    </div>
  </section>
);

export default Business