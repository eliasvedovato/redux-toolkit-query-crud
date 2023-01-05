import {
	useGetTasksQuery,
	useDeleteTaskMutation,
	useUpdateTaskMutation,
} from '../api/apiSlice'

const TasksList = () => {
	const { data: tasks, isError, isLoading, error } = useGetTasksQuery()
	const [deleteTask] = useDeleteTaskMutation()
	const [updateTask] = useUpdateTaskMutation()

	if (isLoading) return <div>Loading...</div>
	else if (isError) return <div>Error: {error.message}</div>

	return (
		<ul
			style={{
				display: 'flex',
				alignItems: 'center',
        flexDirection: 'column'
			}}
		>
			{tasks.map(task => (
				<li key={task.id}>
					<h3>{task.name}</h3>
					<p>{task.description}</p>
					<button onClick={() => deleteTask(task.id)}>Delete</button>
					<input
						type='checkbox'
						checked={task.completed}
						id={task.id}
						onChange={e =>
							updateTask({
								...task,
								completed: e.target.checked,
							})
						}
					/>
					<label htmlFor={task.id}>Completed</label>
				</li>
			))}
		</ul>
	)
}

export default TasksList
