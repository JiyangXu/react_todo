import React,{useState} from 'react';
import {Button,TextField,FormControl,List,ListItem } from '@mui/material';


const App = () => {
    const [todo, setTodo] = useState("");
    const [todos,setTodos] =useState([])
    const [editMode, setEditMode]=useState(false)
    const [editValue, setEditValue] = useState("")
    // const todos = ["Finish homework", "Wash dishes", "Clean room", "Make waffles"];
    const handleAdd=()=>{
       setTodos([...todos, todo])
       setTodo("")
        // console.log(todos)
    }
    const handleDelete=(item)=>{
        
        setTodos(todos.filter((e)=> e !== item))
    }

    const handleEdit=(item)=>{
        console.log(item)
        setEditValue(item)
        setEditMode(!editMode)
    }

    const handleDone=(e)=>{
        setEditMode(!editMode)
        console.log(e)
    }

    return (
        <>
         <FormControl variant="standard">
        <TextField id="standard-basic" label="To Dos" variant="standard" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
        
        <Button variant="contained" color="primary" onClick={handleAdd}>
            Add Tesk
        </Button>
        <List>
            {todos.length===0 ? <listItem>There are no items.</listItem>: todos.map(task => (
                editValue===task ?<>
                <TextField key={task} placeholder={task} onChange={(e)=>setTodo(e.target.value)}/><Button onClick={()=>handleDelete(task)}> remove </Button> 
                <Button onClick={()=>handleDone(todo)}> Done </Button></>
                :<ListItem key={task}>  {task} <Button onClick={()=>handleDelete(task)}> remove </Button> 
                <Button onClick={()=>handleEdit(task)}> Edit </Button></ListItem>
            ))}
        </List>
        </FormControl>
        </>
    )
}
 
export default App;