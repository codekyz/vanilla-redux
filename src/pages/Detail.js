import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
  const id = useParams();
  const toDos = useSelector((state) => state);
  const detailTodo = toDos.filter((todo) => todo.id === parseInt(id.id));
  return (
    <>
      <h1>{detailTodo[0].text}</h1>
      <h4>createAt : {detailTodo[0].id}</h4>
    </>
  );
};

export default Detail;
