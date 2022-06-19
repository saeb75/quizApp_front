import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../../redux/slices/startGame";

const MainGame = () => {
  const { isLoading } = useSelector((state) => state.start);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(startGame());
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="bg-innerContentInnerBg h-32 py-8">
        <div className="flex justify-center px-8">
          <button
            onClick={handleClick}
            className="bg-primaryColor rounded-lg w-full py-4 self-center text-white text-2xl font-bold"
          >
            Start Game
          </button>
        </div>
      </div>
      <div className="bg-innerContentInnerBg py-8 px-4">
        <h2 className="text-primaryText font-bold">Your Matches</h2>
        <div className="flex justify-between my-4 items-center bg-primaryBg p-4 rounded-2xl">
          <div className="w-16 h-16 rounded-full bg-primaryColor text-primaryText text-2xl font-semibold flex justify-center items-center">
            S
          </div>
          <span className=" text-primaryText text-2xl font-semibold flex justify-center items-center">
            2
          </span>
          <span className=" text-primaryText text-2xl font-semibold flex justify-center items-center">
            -
          </span>
          <span className=" text-primaryText text-2xl font-semibold flex justify-center items-center">
            2
          </span>
          <div className="w-16 h-16 rounded-full bg-primaryColor text-primaryText text-2xl font-semibold flex justify-center items-center">
            B
          </div>
        </div>
        <div className="flex justify-between my-4 items-center bg-primaryBg p-4 rounded-2xl">
          <div className="w-16 h-16 rounded-full bg-primaryColor text-primaryText text-2xl font-semibold flex justify-center items-center">
            S
          </div>
          <span className=" text-primaryText text-2xl font-semibold flex justify-center items-center">
            2
          </span>
          <span className=" text-primaryText text-2xl font-semibold flex justify-center items-center">
            -
          </span>
          <span className=" text-primaryText text-2xl font-semibold flex justify-center items-center">
            2
          </span>
          <div className="w-16 h-16 rounded-full bg-primaryColor text-primaryText text-2xl font-semibold flex justify-center items-center">
            B
          </div>
        </div>
        <div className="flex justify-between my-4 items-center bg-primaryBg p-4 rounded-2xl">
          <div className="w-16 h-16 rounded-full bg-primaryColor text-primaryText text-2xl font-semibold flex justify-center items-center">
            S
          </div>
          <span className=" text-primaryText text-2xl font-semibold flex justify-center items-center">
            2
          </span>
          <span className=" text-primaryText text-2xl font-semibold flex justify-center items-center">
            -
          </span>
          <span className=" text-primaryText text-2xl font-semibold flex justify-center items-center">
            2
          </span>
          <div className="w-16 h-16 rounded-full bg-primaryColor text-primaryText text-2xl font-semibold flex justify-center items-center">
            B
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainGame;
