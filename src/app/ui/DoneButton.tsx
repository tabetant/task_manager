type Props = {
    doneTaskAction: (formData: FormData) => void;
    taskId: number;
}
export default function DoneButton({ doneTaskAction, taskId }: Props) {
    return (
        <form action={doneTaskAction}>
            <input type='hidden' name='id' value={taskId} />
            <input type='submit' value='Done' />
        </form>
    )
}
