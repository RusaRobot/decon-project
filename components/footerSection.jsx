import Image from "next/image";

const FooterSection = () => {
  return (
    <div className="w-full h-[200px] bg-[#333533]">
      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-6">
          <Image width="110px" height="46px" src="/DECON.svg" alt="" />

          <p className="text-[#D6D6D6] text-[12px] w-full text-center">
            Copyright © 2022 Decon DAO. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
