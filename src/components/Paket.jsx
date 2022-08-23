import React from "react";
import styles, { layout } from "../style";
import { listPaket } from "../constant";

const Paket = () => {
  return (
    <section id="section">
      <h2
        className={`${styles.heading2} relative before:absolute before:rounded-lg before:content before:w-72 before:h-1 
          before:-bottom-0 before:left-100 before:bg-gradient-to-tr from-emerald-700 to-cyan-300 
          transition-all ease-in-out duration-100 flex items-center justify-center h-auto w-auto -mt-10`}
      >
        Daftar Paket
      </h2>
      <div className="grid lg:grid-cols-4 gap-9 md:grid-cols-2">
        {listPaket &&
          listPaket.map((n) => {
            return (
              <div
                key={n.id}
                className="bg-emerald-800 rounded-xl p-4 mt-28 drop-shadow-md"
              >
                <div className="flex items-center justify-center h-auto w-auto  ">
                  <img
                    src={n.img}
                    alt=""
                    className="rounded-xl h-[150px] w-[250px] -mt-24"
                  />
                </div>
                <p className="p-2 text-white uppercase font-poppins font-semibold flex items-center justify-center ">
                  {n.name}
                </p>
                <p className="p-2 text-dimWhite font-poppins font-light flex items-start justify-start">
                  {n.desc}
                </p>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Paket;
