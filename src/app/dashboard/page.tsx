import TaskForm from '../ui/TaskForm.jsx';
import { db } from '../../db/index.js';
import { tasks } from '../../db/drizzle/schema.js';
import { revalidatePath } from 'next/cache';


export default async function DashboardPage() {
    const allTasks = await db.select().from(tasks);
    async function createTask(formData: FormData) {

        const title = formData.get('title')?.toString();
        if (!title) return;
        await db.insert(tasks).values({
            title,
            completed: false,
            createdAt: new Date()
        });
        revalidatePath('/dashboard');
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
            <TaskForm createTaskAction={createTask} />
        </div>
    )
}