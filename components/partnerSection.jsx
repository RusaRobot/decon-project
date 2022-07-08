const PartnerSection = () => {
  return (
    <div className="w-full h-[850px] bg-[#202020]">
      <div className="text-4xl flex justify-center mt-20">
        <div className="text-[#FFD100] tracking-widest font-bold">
          OUR <span className="text-white">PARTNERS</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-white mx-auto w-[1060px] mt-28">
        <div>
          <img
            className="w-[225px]"
            src="/Logo_Nobubank.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div>
          <img className="w-[225px]" src="/bitwyre.png" alt="" loading="lazy" />
        </div>
        <div>
          <img
            className="w-[225px]"
            src="/Logo-Anteraja.png"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex justify-between items-center text-white mx-auto w-[900px] mt-20">
        <div>
          <img
            className="w-[225px]"
            src="/Logo-Pluang.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div>
          <img
            className="w-[225px]"
            src="/Mandiri_logo.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div>
          <img className="w-[225px]" src="/pacmann.png" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
