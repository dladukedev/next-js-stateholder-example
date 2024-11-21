import { getTask } from "@/data/tasks-repository"
import { TaskDetails } from "@/feature/tasks/details/task-details"
import { notFound } from "next/navigation"

const Page = async ({ params }) => {
  const id = (await params).id
  const task = await getTask(id)

  if (!task) {
    return notFound()
  }

  return (
    <TaskDetails task={task} />
  )
}

export default Page
