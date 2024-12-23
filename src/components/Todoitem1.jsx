import { MdDoneAll } from "react-icons/md";
import { TodoItemscontext } from "../store/todo-item-store";
import { useContext } from "react";

function Todoitem1() {
  const { DeletebuttonResponse, todotask } = useContext(TodoItemscontext);

  const handleClick = (work) => {
    DeletebuttonResponse(work);
  };

  return (
    <div className="container">
      {todotask.map((task, index) => (
        <div className="row" key={index}>
          <div className="col-6">
            <h3>{task.work}</h3>
          </div>
          <div className="col-4">
            <h3>{task.time}</h3>
          </div>
          <div className="col-2">
            <button 
              type="button" 
              className="btn btn-danger" 
              onClick={() => handleClick(task.work)}
            >
              <MdDoneAll />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todoitem1;
