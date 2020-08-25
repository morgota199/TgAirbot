import { IKeyboardButton } from "./IKeyboardButton"

export interface IReplyKeyboardMarkup {
    keyboard:	IKeyboardButton[][]
    resize_keyboard?: boolean
    one_time_keyboard?: boolean
    selective?: boolean
}