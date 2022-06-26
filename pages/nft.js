import DeconSection from "../components/deconSection";
import NFTSection from "../components/NFTSection";
import GetNFT from "../components/howToGetNftSection";

const Nft = () => {
  return (
    <div className="flex flex-col">
      <DeconSection />
      <NFTSection hiddenProp={true} />
      <GetNFT />
    </div>
  );
};

export default Nft;
