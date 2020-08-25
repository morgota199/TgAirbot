import { IUser } from "../../user/IUser"

export interface IPollAnswer {
    poll_id: string
    user: IUser
    option_ids: number[]
}