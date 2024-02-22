import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

const TasksPage = async () => {
  return (
      <div>
        <h1>TasksPage</h1>
          <TaskForm />
          <TaskList />
      </div>
  );
}
export default TasksPage
