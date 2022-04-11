import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Animated } from "react-animated-css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [y, setY] = useState(window.scrollY);
  const history = useNavigate();

  const handleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleHome = () => {
    history("/");
  };

  const handleAbout = () => {
    history("/about");
  };

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        const head = document.getElementsByTagName("header");
        head[0].classList.remove("bg-transparent");
        head[0].classList.add("bg-blue-500");
        head[0].classList.add("text-white");
        console.log(y);
      } else if (y < window.scrollY) {
        if (y > 100) {
          const head = document.getElementsByTagName("header");
          head[0].classList.add("bg-transparent");
          head[0].classList.remove("text-white");
          head[0].classList.remove("bg-blue-500");
          console.log("scrolled");
        }
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div>
      <header className="fixed top-0 w-full z-10 bg-blue-500 p-5 text-white transition delay-75 ease-in-out">
        <div className="flex justify-between items-center container">
          <div>
            <Link to="/" className="uppercase font-semibold">
              navbar
            </Link>
          </div>
          {/* Large Menu */}
          <nav className="space-x-4 md:block hidden">
            <Link to="/" className="capitalize">
              Home
            </Link>
            <Link to="/about" className="capitalize">
              About
            </Link>
          </nav>
          {/* End of Large Menu */}
          {/* Small Menu */}
          <div className="md:hidden">
            {isOpen ? (
              <button onClick={handleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button onClick={handleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}

            {isOpen ? (
              <nav className="w-full bg-blue-500 fixed left-0 top-16 p-5 min-h-screen opacity-100  transition delay-200 ease-in-out">
                <Animated animationIn="fadeIn" animationOut="fadeOut">
                  <div className="flex justify-center items-center flex-col flex-wrap  h-80 space-y-5">
                    <button
                      type="button"
                      onClick={handleHome}
                      className="bg-white text-black w-3/4 p-3 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300"
                    >
                      Home
                    </button>
                    <button
                      type="button"
                      onClick={handleAbout}
                      className="bg-white text-black w-3/4  p-3 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300"
                    >
                      About
                    </button>
                  </div>
                </Animated>
              </nav>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* End of Small Menu */}
      </header>
    </div>
  );
}
