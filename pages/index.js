import Head from "next/head";
import Image from "next/image";
import ActivitySection from "../components/activitySection";
import NFTSection from "../components/NFTSection";
import ProgramSection from "../components/programSection";

export default function Home() {
  return (
    <div>
      <ProgramSection />
      <ActivitySection />
      <NFTSection />
    </div>
  );
}
