import { TaskProps } from '../../domain/types'
import { Container, ListTask, InputCheckbox, ButtonDelete, Line} from './styled'
type todoTaskPorps = {
    task: TaskProps;
    handleDeleteTask: (id: number) => void;
    handleCompletedTask: (id: number) => void;
}

export const TodoTask = ({task, handleDeleteTask,handleCompletedTask }: todoTaskPorps) => {

  return (
    <>
      <Container>
        <InputCheckbox className='checkbox' type="checkbox"  onChange={()=> handleCompletedTask(task.id)}/>
        <ListTask isCompleted={task.isCompleted}>{task.nameTask}</ListTask>
        <ButtonDelete onClick={()=> handleDeleteTask(task.id)}>X</ButtonDelete>
      </Container>
    </>
  )
}


