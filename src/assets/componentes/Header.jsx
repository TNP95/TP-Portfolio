import { useState } from "react";
import icon from "../icon.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 md:sticky md:top-0 bg-gray-700 z-20">
      <a href="/">
        <img className="h-14 w-14 ml-6" src={icon} alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div className="HAMBURGER-ICON space-y-2 mr-4"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-cyan-400"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-cyan-400"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-cyan-400"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="fixed"
              onClick={() => setIsNavOpen(false)}
            ></div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-cyan-400 ">
              <li className="my-8 uppercase">
                <a href="#about">About</a>
              </li>
              <li className=" my-8 uppercase">
                <a href="#skills">Skills</a>
              </li>
              <li className="  my-8 uppercase">
                <a href="#certificado">Certificate</a>
              </li>
              <li className=" my-8 uppercase">
                <a href="#contacto">Contact me</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-white mr-5">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#certificado">Certificate</a>
          </li>
          <li>
            <a href="#contacto">Contact me</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background:#27282F
      }
    `}</style>
    </div>
  );
}
