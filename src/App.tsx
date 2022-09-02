import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { Text } from "./Text";
import { TodoType } from "./types/todo";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";
import "./styles.css";

const user: User = {
  name: "taro"
  // hobbies: ["映画", "GAME"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="30px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          userId={todo.userId}
          key={todo.id}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
