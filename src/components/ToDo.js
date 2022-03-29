import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../redux/store";

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();
  const dispatchDeleteToDo = useCallback(
    (id) => dispatch(deleteToDo(id)),
    [dispatch]
  );
  const onBtnClick = () => {
    dispatchDeleteToDo(id);
  };
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

export default ToDo;
