const tasks = [
  { id: "b9846d30-2fdf-4748-92f8-273e81b19721", title: "Task 1", created: new Date(1732114465000), complete: false },
  { id: "4f379f86-203b-49cd-b928-52fb8738cb50", title: "Task 2", created: new Date(1732112463000), complete: false },
  { id: "83a4cd1c-b19f-4c48-aa89-edd84a5db31d", title: "Task 3", created: new Date(1718909659000), complete: true },
  { id: "35dbf975-9f26-414a-a432-937df8fd6441", title: "Task 4", created: new Date(1732114510000), complete: false },
]

export const getTasks = async () => tasks
export const getTask = async (id) => tasks.find(task => task.id === id)
