import React from "react";
import { useSelector } from "react-redux";
import MainGame from "./MainGame";

const HomeHeader = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="container">
      <div className="rounded-3xl bg-contentBg">
        <div className="flex py-6 flex-col items-center">
          <h1 className="text-4xl font-bold text-center text-primaryText">
            Quiz App
          </h1>
          <p className="text-primaryText mt-4 text-2xl">hi, {user.name}</p>
        </div>
        <MainGame />
      </div>
    </div>
  );
};

export default HomeHeader;
