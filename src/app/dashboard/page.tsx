import TaskForm from '../ui/TaskForm';
import { db } from '../../db/index';
import { tasks } from '../../db/drizzle/schema';
import { revalidatePath } from 'next/cache';
import DeleteButton from '../ui/DeleteButton';
import { eq } from 'drizzle-orm';
import DoneButton from '../ui/DoneButton';

export default async function DashboardPage() {
    const allTasks = await db.select().from(tasks);
    async function createTask(formData: FormData) {
        'use server';
        const title = formData.get('title')?.toString();
        const priority = formData.get('priority')?.toString() ?? 'medium';
        if (!title) return
        await db.insert(tasks).values({
            title,
            completed: false,
            createdAt: new Date(),
            priority: priority as 'low' | 'medium' | 'high',
        });
        revalidatePath('/dashboard');
    }

    async function deleteTask(formData: FormData) {
        'use server';
        const id = Number(formData.get('id'));
        if (!id) return;
        await db.delete(tasks).where(eq(tasks.id, id));
        revalidatePath('/dashboard');
    }

    async function doneTask(formData: FormData) {
        'use server'
        const id = Number(formData.get('id'));
        if (!id) return;
        await db.update(tasks).set({ completed: true }).where(eq(tasks.id, id));
        revalidatePath('/dashboard');
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
            <TaskForm createTaskAction={createTask} />
            <ul className='text-center'>
                {allTasks.map(task =>
                    <li key={task.id}>{task.title} <DeleteButton deleteTaskAction={deleteTask} taskId={task.id} /> <DoneButton taskId={task.id} doneTaskAction={doneTask} /></li>
                )
                }
            </ul>
        </div>
    )
}