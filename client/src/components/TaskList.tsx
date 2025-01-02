import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api.ts";
import TaskCard from "./TaskCard.tsx";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const res = await getAllTasks();
        setTasks(res);
      } catch (error) {
        console.error("Error loading tasks:", error);
      }
    };
    loadTasks();
  }, []);

  return (
    <div>
      {tasks.map((item) => {
        return (
          <TaskCard task={item} />
        );
      })}
    </div>
  );
};

export default TaskList;
