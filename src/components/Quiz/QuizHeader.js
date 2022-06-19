import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
const QuizHeader = ({ quiz }) => {
  const { user } = useSelector((state) => state.auth);
  const userTurn = useMemo(() => {
    if (user) {
      return user.id === quiz.turn;
    }
    return false;
  }, [quiz]);

  return (
    <div className="container">
      <div className="rounded-3xl bg-contentBg">
        <div className="flex py-6 flex-col items-center">
          <h1 className="text-4xl font-bold text-center text-primaryText">
            Quiz App
          </h1>
          <p className="text-primaryText mt-4 text-xl">
            {userTurn
              ? `Yes, ${user.name} now Your Are Turn`
              : "wait for your opponent's turn"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;
