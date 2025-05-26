import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { tasks } from './drizzle/schema'

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(process.env.DATABASE_URL!, { prepare: false })
export const db = drizzle(client);

const allUsers = await db.select().from(tasks);
