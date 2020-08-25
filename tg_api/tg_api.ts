import { EventEmitter } from "events"
import { IUpdate } from "../polling/IPolling"
import { EventD } from "../utils/events"
import { IMessage } from "../interfaces/message/IMessage"
import { IInlineQuery } from "../interfaces/inline/IInlineQuery"
import { IChosenInlineResult } from "../interfaces/inline/IChosenInlineResult"
import { ICallbackQuery } from "../interfaces/callback/ICallbackQuery"
import { IShippingQuery } from "../interfaces/media/payments/IShippingQuery"
import { IPreCheckoutQuery } from "../interfaces/media/payments/IPreCheckoutQuery"
import { IPoll } from "../interfaces/media/poll/IPoll"
import { IPollAnswer } from "../interfaces/media/poll/IPollAnswer"


@EventD()
export class TgApi {
    event!: EventEmitter

    update() {
        this.event.on("update", (update: IUpdate) => {
            for(const param in update) {
                if(param === "message")
                    this.event.emit(param, update[param])
                if(param === "edited_message")
                    this.event.emit(param, update[param])
                if(param === "channel_post")
                    this.event.emit(param, update[param])
                if(param === "edited_channel_post")
                    this.event.emit(param, update[param])
                if(param === "inline_query")
                    this.event.emit(param, update[param])
                if(param === "chosen_inline_result")
                    this.event.emit(param, update[param])
                if(param === "callback_query")
                    this.event.emit(param, update[param])
                if(param === "shipping_query")
                    this.event.emit(param, update[param])
                if(param === "pre_checkout_query")
                    this.event.emit(param, update[param])
                if(param === "poll")
                    this.event.emit(param, update[param])
                if(param === "poll_answer")
                    this.event.emit(param, update[param])
            }
        })
    }
}