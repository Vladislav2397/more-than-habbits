import type { BrandedType } from './globals'

type TaskId = BrandedType<number, 'TaskId'>
type Task = {
    id: TaskId
}
