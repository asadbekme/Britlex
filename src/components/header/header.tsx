import { useState } from "react";
import Logo from "@/assets/logo.svg";
import { styles } from "@/utils/styles";
import { navLinks } from "@/utils/constants";
import { cn } from "@/utils/cn";
import CloseIcon from "@/icons/close-icon";
import MenuIcon from "@/icons/menu-icon";
import Button from "../button/button";

const Header = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="py-3 container">
      <div className="flex items-center justify-between gap-5">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.link}`} className={styles.link}>
                  {link.link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button variant="white" size="lg" className="hidden lg:inline-block">
          Let's Talk
        </Button>

        <button className="lg:hidden" onClick={handleClick}>
          <MenuIcon />
        </button>

        {/* mobile menu */}
        <div
          className={cn(
            "bg-white fixed left-0 top-0 z-50 w-4/5 sm:w-3/5 md:w-1/2 min-h-screen transition-all ease-in-out delay-150 duration-500 lg:hidden",
            active ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <button className="absolute right-8 top-4" onClick={handleClick}>
            <CloseIcon />
          </button>
          <div className="p-8">
            <ul className="flex flex-col gap-5 mb-5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.link}`}
                    className={styles.link}
                    onClick={handleClick}
                  >
                    {link.link}
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="white" size="lg">
              Let's Talk
            </Button>
          </div>
        </div>

        {/* overlay */}
        <div
          className={cn(
            "fixed left-0 top-0 z-40 h-full w-full bg-black opacity-50 cursor-pointer lg:hidden",
            active ? "block" : "hidden"
          )}
          onClick={handleClick}
        ></div>
      </div>
    </header>
  );
};

export default Header;
