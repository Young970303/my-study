import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import { MdCrueltyFree } from "react-icons/md";

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
      <MdCrueltyFree />
    </TodoTemplate>
  );
};

export default App;
