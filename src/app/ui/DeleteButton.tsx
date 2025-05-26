type Props = {
    deleteTaskAction: (formData: FormData) => void;
    taskId: number;
}
export default function DeleteButton({ deleteTaskAction, taskId }: Props) {
    return (
        <form action={deleteTaskAction}>
            <input type='hidden' name='id' value={taskId} />
            <input type='submit' value='Delete Task' />
        </form>
    )
}