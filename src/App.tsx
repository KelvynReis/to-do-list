import React, { useState } from 'react'
import { TodoTask } from './components/TodoTask';
import { TaskProps } from './domain/types';

import { Container, InputForm, ButtonSubmit, FormContainer } from './styles/app-styled'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [value, setValue] = useState("");
  const [ todoList, setTodoList ] = useState<TaskProps[]>([]);


  const handleAddTask = () => {

    if (value === "") {
      toast.error("Digite uma tarefa");
      return;
    }
    const newTask = {id: todoList.length + 1, nameTask: value, isCompleted: false};
    setTodoList([...todoList, newTask]);
    setValue("");

    toast.success("Tarefa adicionada com sucesso!")
  }

  const handleDeleteTask = (id: number) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  }


  const handleCompletedTask = (id: number) => {
    const changedone = todoList.map((task) => {
      if(task.id === id) {
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    })
    setTodoList(changedone);
  }

  return (
    <Container>
      <ToastContainer 
        autoClose={2000}
        pauseOnHover={false}
        
      />
      <h2>To do List</h2>
      <FormContainer
        onSubmit={ event =>{
          event.preventDefault();
         handleAddTask();
        }}
      >
        <InputForm
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
          className='input'
        />

        <ButtonSubmit className='btn' type="submit">Adicionar Tarefa</ButtonSubmit>
      </FormContainer>
        {todoList.map((item, index) => (
          <TodoTask key={index} task={item} handleDeleteTask={handleDeleteTask} handleCompletedTask={handleCompletedTask}/>
        ))}
    </Container>
  )
}


