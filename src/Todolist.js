
import { useEffect, useState } from "react";
import { MdCheckBox } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export const Todolist = () => {

    const [inputValue, setInputValue] = useState("");

    const [task, setTask] = useState([]);

    const [dateTime,setDateTime] = useState("");

    const handleInputChange = (value) =>{

        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!inputValue) return;

        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue(""); 
    };

    //todo date and time 

    useEffect(() => {

        const interval = setInterval(() => {   
            const  now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate}-${formattedTime}`);
           },1000)

           return () => clearInterval(interval);
    }, []);
    
    //todo handleDeleteTodo function
     
    const handleDeleteTodo
    return(

        <section>
            <header>

            <h1>Todo List</h1>

            <h2>{dateTime}</h2>

            </header>

            <section>
                     <form onSubmit={handleFormSubmit}>
                              <div>
                                <input type="text" autoComplete="off"
                                 value={inputValue}
                                 onChange={(event) => handleInputChange(event.target.value) }/>
                              </div>
                                
                              <div>
                                <button type="submit">Add</button>
                              </div>
                            
                     </form>
            </section>

            <section>
            <ul>
                {
                task.map((curTask, index) => {
                    return (
                    <li key={index}>
                        <span>{curTask}</span>

                        <button><MdCheckBox /></button>
                        <button><MdDeleteForever onClick={handleDeleteTodo} /></button>

                       
                          
                    </li>
                    )
                })

            }
            </ul>
            </section>

        </section>


    )
}