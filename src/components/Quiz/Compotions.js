import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRace } from "../../redux/slices/compotion";
const Compotions = ({ quiz, user }) => {
  const { races } = quiz;
  const userTurn = useMemo(() => {
    if (user) {
      return user.id === quiz.turn;
    }
    return false;
  }, [quiz]);

  const dipatch = useDispatch();
  const handleClick = () => {
    if (races?.length === 0) {
      dipatch(createRace({ quizId: quiz._id }));
      return;
    }
    if (races?.length > 0) {
      const inProgress = races.find((item) => {
        return item.status === "inProgress";
      });
      if (inProgress) {
      }
      if (!inProgress) {
        dipatch(createRace({ quizId: quiz._id }));
      }
    }
  };
  const findUser = (raceID) => {
    if (races.length > 0) {
      const compotion = races.find((item) => {
        return item._id === raceID;
      });

      return compotion.players.find((item) => {
        return item.player._id === user.id;
      });
    }
  };
  const findUserRival = (raceID) => {
    if (races.length > 0) {
      const compotion = races.find((item) => {
        return item._id === raceID;
      });
      return compotion.players.find((item) => {
        return item.player._id !== user.id;
      });
    }
  };

  return (
    <div className="min-h-[60vh] flex flex-col justify-between">
      {races?.length === 0 ? (
        <div className="grid grid-cols-7 my-4 items-center bg-primaryBg p-4 rounded-2xl">
          <div className="flex justify-center">
            <div className="w-8 h-8 rounded-full bg-primaryColor text-primaryText text-base font-semibold flex justify-center items-center">
              {user.name[0].toUpperCase()}
            </div>
          </div>
          <span className="text-primaryText text-sm text-center col-span-2">
            Your Turn
          </span>

          <span className=" text-primaryText text-base font-semibold flex justify-center items-center">
            -
          </span>
          <span className="text-primaryText text-sm text-center opacity-20 col-span-2">
            Waiting
          </span>
          <div className="flex justify-center">
            <div className="w-8 h-8 rounded-full opacity-20 bg-primaryColor text-primaryText text-base font-semibold flex justify-center items-center"></div>
          </div>
        </div>
      ) : (
        <>
          {races?.map((item) => {
            return (
              <div className="grid grid-cols-7 my-4 items-center bg-primaryBg p-4 rounded-2xl">
                <div className="flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-primaryColor text-primaryText text-base font-semibold flex justify-center items-center">
                    {findUser(item._id) &&
                      findUser(item._id).player.name[0]?.toUpperCase()}
                  </div>
                </div>
                <span className="text-primaryText text-sm text-center col-span-2">
                  {findUser(item._id) && findUser(item._id).answerd
                    ? "Answered"
                    : "Your Turn"}
                </span>

                <span className=" text-primaryText text-base font-semibold flex justify-center items-center">
                  -
                </span>
                <span className="text-primaryText text-sm text-center opacity-20 col-span-2">
                  {findUserRival(item._id) && findUser(item._id).answerd
                    ? "Answered"
                    : "Your Turn"}
                </span>
                <div className="flex justify-center">
                  <div className="w-8 h-8 rounded-full opacity-20 bg-primaryColor text-primaryText text-base font-semibold flex justify-center items-center">
                    {findUserRival(item._id)
                      ? findUserRival(item._id).player.name[0]?.toUpperCase()
                      : "-"}
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
      <div className="flex justify-center px-8">
        <button
          onClick={handleClick}
          disabled={!userTurn}
          className={`bg-primaryColor rounded-lg ${
            !userTurn && "opacity-20"
          } w-full py-4 self-center text-white text-2xl font-bold`}
        >
          {userTurn ? "Go To Quiz" : "Waiting"}
        </button>
      </div>
    </div>
  );
};

export default Compotions;
