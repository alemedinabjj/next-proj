import { BaseIcon } from "@utils/BaseIcon";
import { useTheme } from "@hooks/ThemeContext";
import { Logo } from "@utils/IconsSvg";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(true);
  const showMenu = () => {
    setOpen(!open);
  };

  const { theme, toggleTheme } = useTheme();
  return (
    <header className="w-full bg-darkprimary dark:bg-primary text-white flex justify-between items-center px-20 py-4 sticky top-0 z-10">
      <div className="flex items-center gap-20">
        <Logo />
        <div>
          <div className="flex gap-2 items-center cursor-pointer px-6 py-1 dark:bg-darkprimary bg-primary rounded"  onClick={showMenu}>
            <p
             
              className=""
            >
              MAPS
            </p>
            <BaseIcon name="FaLongArrowAltDown" size="1rem"/>
          </div>
          <ul className={`${!open ? "flex" : "hidden"} flex flex-col fixed gap-6 mt-4 dark:bg-primary bg-darkprimary px-10 py-6 rounded`}>
            <li className="inline-block mr-4">
              <a href="#">Home</a>
            </li>
            <li className="inline-block mr-4">
              <a href="#">About</a>
            </li>
            <li className="inline-block mr-4">
              <a href="#">Contact</a>
            </li>
            <li className="inline-block mr-4">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button onClick={toggleTheme} 
          aria-label="Toggle Dark Mode"
        >
          <BaseIcon name={theme === "dark" ? "FaSun" : "FaMoon"} />
        </button>
        <div className="px-6 py-1 dark:bg-darkprimary bg-primary rounded flex items-center gap-2">
          <p>Sign In</p>
          <BaseIcon name="FaUser" size="1rem" color={undefined} />
        </div>
      </div>
    </header>
  );
};
