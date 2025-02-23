import { useContext, useEffect } from "react";
import { NewTask } from "../components/NewTask/NewTask";
import { TasksList } from "../components/TasksList/TasksList";
import { ThemeContext } from "../contexts/ThemeContext";
import { TasksFilter } from "../components/TasksFilter/TasksFilter";
import { TasksContext } from "../contexts/TasksContext";

export const TodoContainer = () => {
  const { theme } = useContext(ThemeContext);
  const { tasks, fetchTasks, createTask } = useContext(TasksContext);

  useEffect(() => {
    fetchTasks();
  }, [tasks]);

  return (
    <div className="grid gap-4">
      <NewTask createTask={createTask} />
      <TasksList />
      <TasksFilter />
    </div>
  );
};
