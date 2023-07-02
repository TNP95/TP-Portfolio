import React from "react";


function Introducao() {
  return (
    <div>
      <h2 className="flex justify-center p-10 text-white text-2xl">
        Tiago Pinto
      </h2>
    
        <div className="flex items-center justify-center p-6">
          <button className="bg-cyan-400 hover:bg-cyan-500  font-bold py-2 px-4 rounded-3xl animate-bounce">
            <a href="/Curriculo.pdf" download>
              Download CV
            </a>
          </button>
        </div>
     
      <p className="text-center italic text-white mt- ">
        “Every great developer you know got there by solving problems they were
        unqualified to solve until they actually did it.” <br />
        
      </p>
      <p className="flex items-center justify-center text-white">– Patrick McKenzie</p>
    </div>
  );
}

export default Introducao;
