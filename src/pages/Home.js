import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { addToDo } from "../redux/store";

const Home = () => {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  const dispatchAddToDo = useCallback(
    (text) => dispatch(addToDo(text)),
    [dispatch]
  );

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatchAddToDo(text);
    setText("");
  };

  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

export default Home;
