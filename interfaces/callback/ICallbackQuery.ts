import { IUser } from "../user/IUser"
import { IMessage } from "../message/IMessage"

export interface ICallbackQuery {
    id: string
    from: IUser
    message?: IMessage
    inline_message_id?: string
    chat_instance: string
    data?: string
    game_short_name?: string
}