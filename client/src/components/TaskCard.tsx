import { useNavigate } from "react-router-dom";


interface TaskProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskCardProps {
  task: TaskProps; // Un solo objeto de tipo TaskProps
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {

    const navigate = useNavigate()

  return (
    <div key={task.id} className="text-left" onClick={()=>{navigate(`/tasks/${task.id}`)}} >
      <h1 className="text-base" >{task.title}</h1>
      <p>{task.description}</p>
      <hr/>
      <br/>
    </div>
  );
};

export default TaskCard;
