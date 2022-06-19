import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useParams } from "react-router";
import { getCompotion } from "../redux/slices/compotion";

const Race = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompotion(params.raceId));
  }, []);
  return <div>Race</div>;
};

export default Race;
