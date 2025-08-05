import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div className={`checkbox ${checked ? 'checked' : ''}`}>
        <MdCheckBoxOutlineBlank />
      </div>
      <div className="text">{text}</div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};
export default TodoListItem;
