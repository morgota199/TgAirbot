import { IChatPhoto } from "./IChatPhoto"
import { IMessage } from "../message/IMessage"
import { IChatPermissions } from "./IChatPermissions"

export interface IChat {
    id: number
    type: string
    title?: string
    username?: string
    first_name?: string
    last_name?: string
    photo?: IChatPhoto
    description?: string
    invite_link?: string
    pinned_message?: IMessage
    permissions?: 	IChatPermissions
    slow_mode_delay?: number
    sticker_set_name?: string
    can_set_sticker_set?: boolean
}