'use client'

type Props = {
    createTaskAction: (formData: FormData) => void;
}
export default function TaskForm({ createTaskAction }: Props) {

    return (
        <form className='text-center' action={createTaskAction}>
            <input name='title' type='text' placeholder='Describe task' />
            <select name='priority'>
                <option value='low'>Low</option>
                <option value='medium' selected>Medium</option>
                <option value='high'>High</option>
            </select>
            <input type='submit' value='Add Task' />
        </form >
    );
}