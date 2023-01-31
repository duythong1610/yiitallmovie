import React from "react";

export default function Header() {
  return (
    <>
      <header>
        <div className="header h-36 px-7 absolute top-0 left-0 right-0 flex justify-between items-center text-white ">
          <div>
            <ul className="inline-flex gap-10">
              <li>TV shows</li>
              <li>Movies</li>
            </ul>
            <div className="inline-flex gap-10">
              <button>a</button>
              <button>a</button>
              <button>a</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
