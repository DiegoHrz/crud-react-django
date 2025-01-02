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
  return (
    <div key={task.id} className="text-left" >
      <h1 className="text-base" >{task.title}</h1>
      <p>{task.description}</p>
      <hr/>
      <br/>
    </div>
  );
};

export default TaskCard;
