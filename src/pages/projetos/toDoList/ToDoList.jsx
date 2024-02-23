import { useState } from 'react'
import ToDo from '../../../components/ToDo'
import ToDoForm from '../../../components/ToDoForm'
import Search from '../../../components/Search'
import Filter from '../../../components/navbar/Filter'

function ToDoList() {    
    //Inicializa os todos
    const[todos, setTodos] = useState(
        [{
            id:1, 
            text:"Estudar React",
            category:"Estudo",
            isCompleted:false,
        }]
    ) 
    //Buscar
    const [search, setSearch]= useState("");
    const [filter, setFilter] = useState("All");
    const [categorias, setCategorias] = useState("Selecione uma categoria");

    // Adcionada os todos 
    const addTodo =(text,category) => {
        const newTodos = [...todos, 
        {
        id:todos.length + 1,
        text,
        category,
        isCompleted:false,
        },
    ];
        setTodos(newTodos);
    }

    //Excluir todo
    const removeTodo = (id) =>{
        const newTodos = [...todos]
        const filteredTodos = newTodos.filter((todo) => todo.id !== id? todo: null);
        setTodos(filteredTodos);
    };

    //Risca todos completados

    const completeTodo =(id) =>{
        const newTodos = [...todos]
        newTodos.map((todo) => todo.id === id ? todo.isCompleted =!  todo.isCompleted : todo)
        setTodos(newTodos);
    }

    return (
    <>
        <div className="todo-list">
        <h1> Lista de Tarefas</h1>
        <Search search={search} setSearch={setSearch}/>
        <Filter filter={filter} setFilter={setFilter} />    
        {todos
        .filter((todo) => filter === "All" 
        ? true 
        : filter === "Complete" 
        ? todo.isCompleted : !todo.isCompleted)

        .filter((todo) => categorias === "trabalho" 
        ? true 
        : categorias === "pessoal" 
        ? categorias === "estudos": categorias === "Selecione uma categoria")

        .filter((todo) => 
        todo.text.toLowerCase().includes(search.toLowerCase()))
        .map((todo) => (
        <ToDo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))}
        </div>
         <ToDoForm addTodo={addTodo}/>
    </>
  )
}

export default ToDoList
