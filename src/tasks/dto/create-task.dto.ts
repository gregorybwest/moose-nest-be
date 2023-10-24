import { Timestamp } from "typeorm"

export class CreateTaskDto {
    name: string
    doses_required: number
    doses_given: number
    createdat: Date
    updatedat: Date
}
