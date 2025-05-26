'use client'

type Props = {
    createTaskAction: (formData: FormData) => void;
}
export default function TaskForm({ createTaskAction }: Props) {

    return (
        <form className='text-center' action={createTaskAction}>
            <input name='title' type='text' placeholder='Describe task' />
            <input type='submit' value='Add Task' />
        </form >
    );
}