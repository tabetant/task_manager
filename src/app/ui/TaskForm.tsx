'use client'

type Props = {
    createTaskAction: (formData: FormData) => void;
}
export default function TaskForm({ createTaskAction }: Props) {

    return (
        <div className='text-center'>
            <form action={createTaskAction}>
                <input type='text' placeholder='Describe task' />
                <input type='submit' value='Add Task' />
            </form>
        </div>
    );
}