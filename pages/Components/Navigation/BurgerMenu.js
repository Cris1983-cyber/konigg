import Link from "next/link";
import { useState } from "react"; // import state


export default function BurgerMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between bg-blue-300 bg-opacity-20 backdrop-blur-sm px-4 py-2 fixed w-full">
      <a href="/">
      <img src='./img/21.jpg' alt="logo" height={40} width={30}/>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <button className="text-blue-800 focus:outline-none">
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    </path>
                </svg>
            </button>
          </div>

          <div onClick={() => setIsNavOpen(false)} className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-4 py-2"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-10 w-10 text-blue-800"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col text-blue-700 items-center justify-between min-h-[250px] text-center">
              <li className="my-4 p-4 uppercase w-full">
                <Link href="/">
                <a>Home</a>
                </Link>
              </li>
              <li className="my-4 p-4 uppercase w-full">
                <Link href="#about">
                <a>About</a>
                </Link>
              </li>
              <li className="my-4 p-4 uppercase w-full">
                <Link href="#gallery">
                <a>Gallery</a>
                </Link>
              </li>
              <li className="my-4 p-4 uppercase w-full">
                <Link href="#contacts">
                <a>Contacts</a>
                </Link>
              </li>
              <li className="my-16 bg-yellow-400 font-semibold p-2 rounded-md uppercase text-gray-800">
                <Link href="/">
                <a>Start learning</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <Link href='/'>
            <a className="text-lg uppercase mx-3 text-blue-900 cursor-pointer hover:text-gray-300">
                Home
            </a>
            </Link>
          </li>
          <li>
            <Link href='#about'>
            <a className="text-lg uppercase mx-3 text-blue-900 cursor-pointer hover:text-gray-300">
                About
            </a>
            </Link>
          </li>
          <li>
            <Link href='#gallery'>
            <a className="text-lg uppercase mx-3 text-blue-900 cursor-pointer hover:text-gray-300">
                Gallery
            </a>
            </Link>
          </li>   
          <li>
            <Link href='#contacts'>
            <a className="text-lg uppercase mx-3 text-blue-900 cursor-pointer hover:text-gray-300">
                Contacts
            </a>
            </Link>
          </li>    
          <li>
            <Link href='/'>
            <a className="text-lg uppercase mx-3 text-gray-800 cursor-pointer hover:text-gray-300 bg-yellow-400 font-semibold p-2 rounded-md">
                Start learning
            </a>
            </Link>
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
        background: white;
        width: 80%;
        max-Width: 300px;
        height: 100vh;
        top: 0;
        right: 0;
        z-index: 40;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}