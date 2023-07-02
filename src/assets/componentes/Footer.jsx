import React from "react";
import linkedin from "../linkedin.png";
import github from "../github.png";
function Footer() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center mt-10 animate-bounce space-x-4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tiago-pinto-523b2527a/"
          >
            <img
              src={linkedin}
              alt="Linkedin"
              className=" w-[6rem] h-[8vh] md:w-[6rem] md:h-[9vh]"
            />
          </a>
          <div className="flex items-center justify-center ">
            <a target="_blank" href="https://github.com/TNP95">
              <img
                src={github}
                alt="Linkedin"
                className=" w-[6rem] h-[9vh] md:w-[6rem] md:h-[10vh]"
              />
            </a>
          </div>
        </div>{" "}
        <hr class="h-px bg-cyan-400 h-[0.5vh]"></hr>
      </div>

      <h4 className="text-center p-6 font-bold text-xl text-cyan-400 animate-pulse">
        2023-TP | All Rights Reserved
      </h4>
    </div>
  );
}

export default Footer;
