import { Text } from "@chakra-ui/react";

const GetNFT = () => {
  return (
    <div className="w-full h-[1098px] bg-gradient-to-t from-[#212121] to-[#333533]">
      <div className="flex justify-center mt-[60px]">
        <div>
          <Text
            bgGradient="linear(to-r, yellowPrimary, yellowSecondary, #F7F39F , yellowTertiary)"
            bgClip="text"
            fontSize="60px"
            fontWeight="bold"
            w="fit-content"
            h="fit-content"
          >
            How to Get The NFT
          </Text>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <div className="text-[32px] text-center text-[#D6D6D6]">
            Flow & Distribution
          </div>
          <div className="w-[1076px] h-[162px] bg-[#202020] rounded-3xl mt-6">
            <div className="m-[40px] flex gap-8 items-center">
              <div className="text-[60px] text-[#D6D6D6]">1</div>
              <div>
                <img src="./Transfer.svg" alt="" />
              </div>
              <div className="flex flex-col text-[#D6D6D6]">
                <div className="text-[32px]">Transfer</div>
                <div className="text-[16px]">
                  Transfer BUSD / IDR to Decon&apos;s Wallet or Bank Account
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1076px] h-[162px] bg-[#202020] rounded-3xl mt-6">
            <div className="m-[40px] flex gap-8 items-center">
              <div className="text-[60px] text-[#D6D6D6]">2</div>
              <div className="w-[82px]">
                <img className="ml-[10px]" src="./Fill form.svg" alt="" />
              </div>
              <div className="flex flex-col text-[#D6D6D6]">
                <div className="text-[32px]">Fill The Form</div>
                <div className="text-[16px]">
                  Fill the form for membership databased
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1076px] h-[162px] bg-[#202020] rounded-3xl mt-6">
            <div className="m-[40px] flex gap-8 items-center">
              <div className="text-[60px] text-[#D6D6D6]">3</div>
              <div className="w-[82px]">
                <img src="./Wallet.svg" alt="" />
              </div>
              <div className="flex flex-col text-[#D6D6D6]">
                <div className="text-[32px]">Wallet Confirmation</div>
                <div className="text-[16px]">
                  Confirm wallet to receive NFT (We will give the tutorial for
                  those who doesn&apos;t have a wallet)
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1076px] h-[162px] bg-[#202020] rounded-3xl mt-6">
            <div className="m-[40px] flex gap-8 items-center">
              <div className="text-[60px] text-[#D6D6D6]">4</div>
              <div className="w-[82px]">
                <img src="./Distribution.svg" alt="" />
              </div>
              <div className="flex flex-col text-[#D6D6D6]">
                <div className="text-[32px]">Transfer</div>
                <div className="text-[16px]">
                  NFT Distribution to your wallet
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetNFT;
