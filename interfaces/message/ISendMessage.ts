import { IInlineKeyboardMarkup } from "../keyboard/inline/IInlineKeyboardMarkup"
import { IReplyKeyboardMarkup } from "../keyboard/reply/IReplyKeyboardMarkup"
import { IReplyKeyboardRemove } from "../keyboard/reply/IReplyKeyboardRemove"
import { IForceReply } from "../keyboard/reply/IForceReply"

export interface ISendMessage {
    chat_id: number | string
    text: string
    parse_mode?: string
    disable_web_page_preview?: boolean
    disable_notification?: boolean
    reply_to_message_id?: number
    reply_markup?: 	IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
}