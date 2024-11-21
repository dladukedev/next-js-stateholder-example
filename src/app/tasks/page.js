import { getTasks } from "@/data/tasks-repository"
import { TaskList } from "@/feature/tasks/list/task-list"

const Page = async () => {
  const tasks = await getTasks()

  return (
    <TaskList tasks={tasks} />
  )
}

export default Page

