export const TaskDetails = ({ task }) => (
  <div>
    <p>id: {task.id}</p>
    <p>title: {task.title}</p>
    <p>create date: {task.created.toString()}</p>
    <p>status: {task.complete ? "COMPLETE" : "TODO"}</p>
  </div>
)
