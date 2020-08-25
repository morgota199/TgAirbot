import { IMessage } from "../interfaces/message/IMessage"
import { IInlineQuery } from "../interfaces/inline/IInlineQuery"
import { IChosenInlineResult } from "../interfaces/inline/IChosenInlineResult"
import { ICallbackQuery } from "../interfaces/callback/ICallbackQuery"
import { IShippingQuery } from "../interfaces/media/payments/IShippingQuery"
import { IPreCheckoutQuery } from "../interfaces/media/payments/IPreCheckoutQuery"
import { IPoll } from "../interfaces/media/poll/IPoll"
import { IPollAnswer } from "../interfaces/media/poll/IPollAnswer"

export interface IPolling {
    delay: number,
    update_id?: number
}

export interface IGetUpdate {
    offset ?: number
    limit ?: number
    timeout ?: number
    allowed_updates ?: string[]
    /* [
        "message",
        "edited_message",
        "channel_post",
        "edited_channel_post,
        "inline_query",
        "chosen_inline_result",
        "callback_query",
        "shipping_query",
        "pre_checkout_query",
        "poll",
        "poll_answer"
     */
}

export interface IUpdate {
    update_id: number
    message?: IMessage
    edited_message?: IMessage
    channel_post?: IMessage
    edited_channel_post?: IMessage
    inline_query?:	IInlineQuery
    chosen_inline_result?:	IChosenInlineResult
    callback_query?: ICallbackQuery
    shipping_query?: IShippingQuery
    pre_checkout_query?: IPreCheckoutQuery
    poll?:	IPoll
    poll_answer?: IPollAnswer
}
