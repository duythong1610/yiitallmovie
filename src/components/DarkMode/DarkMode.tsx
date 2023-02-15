import React, { useEffect, useState } from "react";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const element = document.documentElement;

  const options = [
    {
      icon: <LightModeIcon />,
      text: "light",
    },
    {
      icon: <DarkModeIcon />,
      text: "dark",
    },
  ];

  useEffect(() => {
    switch (theme) {
      case "light":
        element.classList.add("dark");
        localStorage.setItem("theme", "light");
        break;

      case "dark":
        element.classList.remove("dark");
        localStorage.setItem("theme", "dark");

        break;

      default:
        break;
    }
  }, [theme]);
  return (
    <div>
      {" "}
      <div className="darkMode">
        {options.map((opt) => (
          <button
            onClick={() => setTheme(opt.text)}
            className={`w-8 h-8 leading-9 text-white text-xl rounded-full m-1 ${
              theme === opt.text && "!text-pink-500"
            }`}
          >
            {opt.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DarkMode;
