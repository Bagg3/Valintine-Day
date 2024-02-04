import { useState } from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [message, setMessage] = useState("");

  const handleNoClick = () => {
    setMessage("Forkert svar, prøv igen!");
  };

  return (
    <div className="items-center justify-center flex flex-col bg-gradient-to-b from-[#9b7bd6] via-[#9845cf] to-[#f00ddd] h-screen w-full">
      <h1 className="text-5xl font-bold items-center flex-col mb-10 font-romantic text-white">
        Vil du være min Valintines Date?
      </h1>
      <img
        className="flex-col w-1/5 rounded-full"
        src="https://media.giphy.com/media/J5dTZWVfDnCeVgkENg/giphy.gif"
        alt="Giphy GIF"
      />
      <div className="flex mb-52 mt-8">
        <Link to="/yes">
          <button className="bg-green-600 hover:bg-green-700 text-white text-2xl flex-row font-bold py-2 px-4 rounded-2xl mx-8 h-16 w-32 font-romantic">
            Ja
          </button>
        </Link>
        <button
          onClick={handleNoClick}
          className="bg-red-500 hover:bg-red-700 text-white text-2xl flex-row font-bold py-2 px-4 rounded-2xl mx-8 h-16 w-32 font-romantic"
        >
          Nej
        </button>
      </div>
      <div className="flex-col -mt-32">
        {message && <p className="text-2xl text-white">{message}</p>}
      </div>
    </div>
  );
}

export default MainPage;
