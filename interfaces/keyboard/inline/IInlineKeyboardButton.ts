import { ILoginUrl } from "../../media/other/ILoginUrl"
import { ICallbackGame } from "../../media/game/ICallbackGame"

export interface IInlineKeyboardButton {
    text: string
    url?: string
    login_url?:	ILoginUrl
    callback_data?: string
    switch_inline_query?: string
    switch_inline_query_current_chat?: string
    callback_game?:	ICallbackGame
    pay?: boolean
}