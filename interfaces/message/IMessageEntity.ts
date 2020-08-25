import { IUser } from "../user/IUser"

export interface IMessageEntity {
    type: string
    offset: number
    length: number
    url?: string
    user?: IUser
    language?: string
}