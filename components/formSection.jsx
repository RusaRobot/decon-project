import ButtonCustom from "./buttonCustom";

const FormSection = () => {
  return (
    <div className="w-[1349px] h-[626px] bg-[#333533] flex flex-col">
      <div className="mx-36 flex justify-center w-[1060px] h-[453px] bg-[#202020] mt-20 px-10 py-14 rounded-3xl">
        <div className="text-white">
          <div className="text-[60px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD100] to-[#D6D6D6]">
            Interested with our 2nd NFT?
          </div>
          <div className="text-center text-[32px]">
            Input your name & email, we will reach you
          </div>
          <form>
            <div className="flex justify-center gap-3 mt-10">
              <div>
                <input
                  className="w-[348px] h-[43px] rounded-full px-3 text-black focus:outline-none focus:ring-4 focus:ring-[#FFD100]"
                  placeholder="Name"
                  type="text"
                />
              </div>
              <div>
                <input
                  className="w-[348px] h-[43px] rounded-full px-3 text-black focus:outline-none focus:ring-4 focus:ring-[#FFD100]"
                  placeholder="Email"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <div className="hover:scale-110 duration-500">
                <ButtonCustom
                  text="Submit"
                  w="203px"
                  h="76px"
                  onClick={""}
                  size="32px"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
