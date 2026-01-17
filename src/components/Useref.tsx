import { useRef, useState } from "react";

const Useref = () => {
  const [bg,setBg] = useState<boolean>(true)
  const inputref = useRef<HTMLInputElement | null>(null);
  const handlefocus = () => {
    inputref.current?.focus();
   const inp= document.getElementById("input")
   inp.style.backgroundColor="white"
    setBg(bg=>!bg)
  };
  return (
    <div className="h-screen bg-indigo-900 text-white p-4 text-center text-4xl font-bold">
                <h1>UseRef</h1>
       <section  className="bg-indigo-900 h-screen flex justify-center items-center  ">
      <input type="text"
       id="input"
      ref={inputref} 
      className="px-4 py-2 bg-indigo-400 text-gray-800"
      />
      <button
        className="bg-blue-400 text-white m-2 rounded px-4 py-2"
        onClick={handlefocus}>
        Focus
      </button>
      </section>
    </div>
  );
};

export default Useref;
