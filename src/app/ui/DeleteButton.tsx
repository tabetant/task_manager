type Props = {
    deleteTaskAction: (formData: FormData) => void;
}
export default function DeleteButton({ deleteTaskAction }: Props) {
    return (
        <form action={deleteTaskAction}>
            <input type='submit' value='Delete Task' />
        </form>
    )
}