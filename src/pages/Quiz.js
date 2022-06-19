import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Compotions from "../components/Quiz/Compotions";
import Compotion from "../components/Quiz/Compotions";
import QuizHeader from "../components/Quiz/QuizHeader";
import { getQuiz } from "../redux/slices/quiz";
const Quiz = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { isLoading, quiz } = useSelector((state) => state.quiz);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getQuiz(params));
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!quiz) {
    return <div>this is a problem</div>;
  }
  return (
    <div>
      <div className="bg-primaryBg w-full min-h-screen">
        <div className=" py-16 container mx-auto">
          <QuizHeader quiz={quiz} />
          <Compotions quiz={quiz} user={user} />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
