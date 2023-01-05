import { useCreateTaskMutation } from '../api/apiSlice'

const TaskForm = () => {
	const [createTask] = useCreateTaskMutation()

	const handleSubmit = e => {
		e.preventDefault()
		console.log(e)
		const name = e.target.elements.name.value.trim()
		const description = e.target.elements.description.value.trim()
		const completed = e.target.elements.completed.checked

		createTask({ name, description, completed })
	}

	return (
		<form onSubmit={handleSubmit}>
			<div
				style={{
					display: 'flex',
					gap: 5,
					margin: '15px 0px 15px 0px',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<input
					type='text'
					placeholder='Add a task'
					name='name'
					style={{ width: 300 }}
				/>
				<input
					type='text'
					placeholder='Description'
					name='description'
					style={{ width: 300 }}
				/>
				<input type='checkbox' name='completed' />
			</div>

			<button style={{ display: 'block', width: 200, margin: 'auto' }}>
				Add Task
			</button>
		</form>
	)
}

export default TaskForm
