import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="fixed mobile:bg-black mobile:justify-center mobile:text-sm mobile:text-white mobile:fixed mobile:bottom-0 mobile:left-0 mobile:right-0 left-0 right-0 px-10 py-4 z-30 backdrop-blur-sm text-white text-lg font-bold">
          <div className="h-full flex justify-between items-center">
            <div className="flex gap-10">
              <Link to={"/Home"}>Trang chủ</Link>
              <Link to={"/"}>Phim</Link>
              <Link to={"/"}>TV Shows</Link>
              <Link to={"/"}>Mới & Phổ biến</Link>
            </div>
            <div className="inline-flex gap-10 mobile:hidden">
              <button className="bg-red-700 px-6 py-1 rounded-lg">
                Đăng nhập
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
