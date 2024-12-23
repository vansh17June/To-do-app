import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitem1 from "./components/Todoitem1";
import Welcome from "./components/Welcome";
import {TodoItemscontext} from "./store/todo-item-store";
import { useState,useReducer } from "react";
import './App.css'
let todoitemreducer=(todotask,action)=>{
  let newTodoitems=todotask
  if(action.type==="NEW_ITEM"){
     newTodoitems=[...todotask,{work:action.payload.task,time:action.payload.due_time}]
  }
  else if (action.type === "DELETE_ITEM") {
    let newTodo = todotask.filter(item => item.work !== action.payload.todoname);
    return newTodo;
  }
  

return newTodoitems
}
function App(){
  // let [todotask,Updateval]=useState([
  // ])
  let [todotask,dispatch]=useReducer(todoitemreducer,[])
  const AddbuttonResponse=(task,due_time)=>{
      const newAction={
        type:"NEW_ITEM",
        payload:{
          task,
          due_time
        }
      }
      dispatch(newAction)

        // let newTodoitems=[...todotask,{work:task,time:due_time}]
        // Updateval(newTodoitems)
  }
  const DeletebuttonResponse=(todoname)=>{
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        todoname,
      }
    };
    
    dispatch(deleteAction)
    // let newTodoitems=[]
    // for( let i=0;i<todotask.length;i++){
    //   if(todotask[i].work!=todoname){
    //     newTodoitems=[...newTodoitems,todotask[i]]
    //   }
    // }
    // Updateval(newTodoitems)
}

  return <center>
    <Appname/>
    <TodoItemscontext.Provider value={{todotask,AddbuttonResponse,DeletebuttonResponse}}>
   <Addtodo/>
   <div className="todocontainer">
    <Welcome/>

  <Todoitem1 />

 
   </div>
   </TodoItemscontext.Provider>
    </center>
}
export default  App;