import { useState,useContext } from "react";
import { IoIosAdd } from "react-icons/io";
import { TodoItemscontext } from "../store/todo-item-store";

function Addtoname() {
  const [work, updateWork] = useState("");
  const [time, updateTime] = useState("");
  const {AddbuttonResponse}=useContext(TodoItemscontext);

  const handleWorkChange = (event) => {
    updateWork(event.target.value);
  };

  const handleTimeChange = (event) => {
    updateTime(event.target.value);
  };

  const handleClick = () => {
    AddbuttonResponse(work,time)
    updateWork("")
    updateTime("")
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            placeholder="Enter Todo here"
            type="text"
            value={work}
            onChange={handleWorkChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleClick}
          >
            <IoIosAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtoname;
