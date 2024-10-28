import Image from "next/image";
import thumnails from "@/assets/CHORKI ORIGINAL FILMS/thumbnails_KacherManushDureThuiya.webp";

const Originals = () => {
  return (
    <div>
      <h1>CHORKI ORIGINAL FILMS</h1>
      <Image src={thumnails} alt=""></Image>
    </div>
  );
};

export default Originals;
