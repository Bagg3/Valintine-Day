import CatGif from "../assets/Cat-Gif.gif";

function YesPage() {
  return (
    <div className="bg-gradient-to-b from-[#e98ce1] via-[#924fdd] to-[#f00ddd] h-screen w-full flex flex-col">
      <div className="flex justify-center flex-col items-center mt-20 mb-20">
        <h1 className="text-5xl flex-col font-bold text-white font-romantic">
          Glæder mig til at have en dejlig dag sammen med dig!
        </h1>
        <img
          className="flex justify-center items-center mt-12 mb-20 rounded-xl"
          src={CatGif}
          alt="Cat Gif"
        />
      </div>
    </div>
  );
}

export default YesPage;
