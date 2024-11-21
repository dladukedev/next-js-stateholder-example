'use client'

import React from "react"
import { useTasksPageSate } from "./task-list-state"

const TaskFilterRow = ({ toggleSortDirection, setSort, sortOptions, toggleShowCompleted, ...htmlProps }) => {
  return (
    <div {...htmlProps}>
      <button onClick={toggleSortDirection}>TOGGLE DIR</button>
      <button onClick={toggleShowCompleted}>TOGGLE VISIBLE</button>
      <div>
        {sortOptions.map(opt => (<React.Fragment key={opt.label}><input name="sort" type="radio" onChange={() => { setSort(opt.value) }} checked={opt.active} />{opt.label}</React.Fragment>))}
      </div>
    </div>
  )

}

const TasksListItem = ({ task, ...htmlProps }) => {
  return (
    <div {...htmlProps}>
      <span>{task.id}</span>
      <span>{task.title}</span>
      <span>{task.created.toString()}</span>
      {task.complete && <span>XXX</span>}
    </div>
  )
}

const TasksList = ({ tasks, viewTaskDetails, ...htmlProps }) => (
  <div {...htmlProps}>
    {tasks.map(task => (<TasksListItem onClick={() => { viewTaskDetails(task.id) }} key={task.id} task={task} />))}
  </div>
)


export const TaskList = ({ tasks }) => {
  const state = useTasksPageSate(tasks)

  return (
    <div>
      <TaskFilterRow toggleSortDirection={state.toggleSortDirection} sortOptions={state.sortOptions} setSort={state.setSort} toggleShowCompleted={state.toggleShowCompleted} />
      <TasksList tasks={state.tasks} viewTaskDetails={state.viewTaskDetails} />
    </div>
  )
}

