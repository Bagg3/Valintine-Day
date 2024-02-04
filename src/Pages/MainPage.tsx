import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function MainPage() {
  const [message, setMessage] = useState("");
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleNoClick = () => {
    setMessage("Forkert svar, prøv igen!");
  };

  const handleNoHover = () => {
    const noButton = noButtonRef.current;
    if (noButton) {
      const x = Math.floor(Math.random() * window.innerWidth * 0.8);
      const y = Math.floor(Math.random() * window.innerHeight * 0.8);
      noButton.style.position = "absolute";
      noButton.style.left = `${x}px`;
      noButton.style.top = `${y}px`;
    }
  };

  useEffect(() => {
    const noButton = noButtonRef.current;
    if (noButton) {
      noButton.addEventListener("mouseover", handleNoHover);
      return () => {
        noButton.removeEventListener("mouseover", handleNoHover);
      };
    }
  }, []);

  return (
    <div className="items-center justify-center flex flex-col bg-gradient-to-b from-[#9b7bd6] via-[#9845cf] to-[#f00ddd] h-screen w-full">
      <h1 className="text-5xl font-bold items-center flex-col mb-10 font-romantic text-white">
        Vil du være min Valentines Date?
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
          ref={noButtonRef}
          onClick={handleNoClick}
          onMouseOver={handleNoHover}
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
