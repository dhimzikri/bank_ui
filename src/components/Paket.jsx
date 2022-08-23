import React from "react";
import styles, { layout } from "../style";
import { listPaket } from "../constant";

const Paket = () => {
  return (
    <section id="section">
      <h2 className={`${styles.heading2} flex items-center justify-center h-auto w-auto -mt-10`}>Daftar Paket</h2>
      <div className="grid grid-cols-4 gap-9">
        {listPaket && listPaket.map((n) => {
          return (
            <div key={n.id} className="bg-emerald-600 rounded-xl p-4 mt-24">
              <div className="flex items-center justify-center">
                <img
                  src={n.img}
                  alt=""
                  className="rounded-xl h-[150px] w-[300px] -mt-24"
                />
              </div>
              <p className="p-2 text-white font-poppins font-semibold flex items-center justify-center">{n.name}</p>
              <p className="p-2 text-dimWhite font-poppins font-semibold flex items-start justify-start">{n.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Paket;
