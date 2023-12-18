import React ,{useState}from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from "./Updatetask";

import{useSelector,useDispatch} from 'react-redux';
import { selectedTask,removeTaskFromList } from "./Taskslice";

const Tasklist=()=>{

  const{taskList}=useSelector((state)=>state.tasks)
  const dispatch=useDispatch()
  //const dispatch=removeTaskFromList()

    const updateTask=(task)=>{
        console.log("update task")
         setModalShow(true)
         dispatch(selectedTask(task))
         console.log(task)
    }

    const deleteTask=(task)=>{
         console.log("delete task")
         dispatch(removeTaskFromList(task))
       
    }
    const [modalShow, setModalShow] = useState(false);
//     const [name,setName]= useState("")
//  const [description,SetDescrip]=useState("")
    return(
        <div>


<Table striped bordered hover variant="dark">
      <thead>
        <tr>
        <th>#</th>
          <th>Task Name</th>
          <th>Task Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {
          taskList && taskList.map((task,index)=>{
              return( 
              <tr key={task.id}>
                <td>{index+1}</td>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td> 
                <Button variant="danger" className="mx-3"
                
                onClick={()=>updateTask(task)}>
                  <i class="bi bi-pencil-square"></i>
                 </Button>
      
      
                <Button variant="danger"
                onClick={()=>deleteTask(task)}
                >
                  <i class="bi bi-trash3-fill"></i>
                  </Button>
                </td>
              </tr>
             )
          })
        }
       
       
      </tbody>
    </Table>


    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    )
}
export default Tasklist ;