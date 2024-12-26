import { useState } from "react"
import AddTask from "./components/AddTasks"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack.",
    isCompleted: false,
    }, 
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudar matemática para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    }
  ])

  // Essa function funciona da seguinte forma:
  // Ao clicar no botão, ela identifica qual foi o botão clicado, depois ela renderiza
  // apenas o botão clicado para o novo formato de concluído.
  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task;
    })
    setTasks(newTasks);
  }

  // Essa função deleta a tarefa após clicar no botão com o ícone de lixeira.
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask />
        <Tasks 
        tasks={tasks} 
        onTaskClick={onTaskClick} 
        onDeleteTaskClick={onDeleteTaskClick} />
      </div>

    </div>
  )
}

export default App