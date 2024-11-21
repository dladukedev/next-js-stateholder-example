import { useRouter } from "next/navigation"
import { useState } from "react"

const sortByDate = (dateA, dateB) => {
  return dateA - dateB
}

const compareString = (strA, strB) => {
  return strA < strB ? -1 : strB < strA ? 1 : 0
}

const SORT_DIR = {
  ascending: "ASC",
  descending: "DESC",
}

const SORT = {
  created: "CREATED",
  title: "TITLE",
}

export const useTasksPageSate = (tasks) => {
  const [showCompleted, setShowCompleted] = useState(false)
  const [sortOrder, setSortOrder] = useState({ direction: SORT_DIR.ascending, sort: SORT.created })

  const toggleSortDirection = () => {
    const direction = sortOrder.direction === SORT_DIR.ascending ? SORT_DIR.descending : SORT_DIR.ascending
    setSortOrder({ ...sortOrder, direction })
  }

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted)
  }

  const setSort = (sort) => {
    setSortOrder({ ...sortOrder, sort })
  }


  const compareTask = (taskA, taskB) => {
    const [first, second] = sortOrder.direction === SORT_DIR.ascending ? [taskA, taskB] : [taskB, taskA]

    return sortOrder.sort === SORT.created ? sortByDate(first.created, second.created) : compareString(first.title, second.title)
  }

  const sortOptions = [{
    label: "Created Date",
    value: SORT.created,
    active: sortOrder.sort === SORT.created,
  },
  {
    label: "Title",
    value: SORT.title,
    active: sortOrder.sort === SORT.title,
  }
  ]

  const displayTasks = tasks
    .filter(task => showCompleted || !task.complete)
    .toSorted(compareTask)

  const router = useRouter()
  const viewTaskDetails = (id) => { router.push(`/tasks/${id}`) }

  return {
    tasks: displayTasks,
    setSort,
    sortOptions,
    toggleSortDirection,
    toggleShowCompleted,
    viewTaskDetails,
  }
}
