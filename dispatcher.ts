import { EventEmitter } from "events"
import { EventD } from "./utils/events"
import { TgApi } from "./tg_api/tg_api"
import { IUpdate } from "./polling/IPolling"
import { IMessage } from "./interfaces/message/IMessage"
import { IInlineQuery } from "./interfaces/inline/IInlineQuery"
import { IChosenInlineResult } from "./interfaces/inline/IChosenInlineResult"
import { ICallbackQuery } from "./interfaces/callback/ICallbackQuery"
import { IShippingQuery } from "./interfaces/media/payments/IShippingQuery"
import { IPreCheckoutQuery } from "./interfaces/media/payments/IPreCheckoutQuery"
import { IPoll } from "./interfaces/media/poll/IPoll"
import { IPollAnswer } from "./interfaces/media/poll/IPollAnswer"
import {Urls} from "./utils/urls";
import request from "request-promise"
import {ISendMessage} from "./interfaces/message/ISendMessage";
import {IForwardMessage} from "./interfaces/message/IForwardMessage";
import {ISendPhoto} from "./interfaces/message/ISendPhoto";
import {Airbot} from "./airbot";

@EventD()
export class Dispatcher {
    private event!: EventEmitter
    private tg_api: TgApi = new TgApi()
    private airbot: Airbot
    private url: Urls

    constructor(airbot: Airbot) {
        this.tg_api.update()
        this.airbot = airbot
        this.url = new Urls(airbot.token)
    }

    update() {
        return (target: object, key: string, descriptor: PropertyDescriptor) => {
            this.event.on("update", (update: IUpdate) => {
                descriptor.value()
            })
        }
    }

    message() {
        return (target: object, key: string, descriptor: PropertyDescriptor) => {
            this.event.on("message", (message: IMessage) => {
                descriptor.value(message)
            })
        }
    }

    edited_message() {
        return (target: object, key: string, descriptor: PropertyDescriptor) => {
            this.event.on("edited_message", (edited_message: IMessage) => {
                descriptor.value(edited_message)
            })
        }
    }

    channel_post() {
        return (target: object, key: string, descriptor: PropertyDescriptor) => {
            this.event.on("channel_post", (channel_post: IMessage) => {
                descriptor.value(channel_post)
            })
        }
    }

    edited_channel_post() {
        return (target: object, key: string, descriptor: PropertyDescriptor) => {
            this.event.on("edited_channel_post", (edited_channel_post: IMessage) => {
                descriptor.value(edited_channel_post)
            })
        }
    }

    inline_query() {
        return (target: object, key: string, descriptor: PropertyDescriptor) => {
            this.event.on("inline_query", (inline_query: IInlineQuery) => {
                descriptor.value(inline_query)
            })
        }
    }

    chosen_inline_result() {
        return (target: object, key: string, descriptor: PropertyDescriptor) => {
            this.event.on("chosen_inline_result", (chosen_inline_result: IChosenInlineResult) => {
                descriptor.value(chosen_inline_result)
            })
        }
    }

    callback_query() {
        return (target: object, key: string, descriptor: PropertyDescriptor) => {
            this.event.on("callback_query", (callback_query: ICallbackQuery) => {
                descriptor.value(callback_query)
            })
        }
    }

    shipping_query() {
        return (target: object, key: string, descriptor: PropertyDescriptor) => {
            this.event.on("shipping_query", (shipping_query: IShippingQuery) => {
                descriptor.value(shipping_query)
            })
        }
    }

    pre_checkout_query() {
        return (target: object, key: string, descriptor: PropertyDescriptor) => {
            this.event.on("pre_checkout_query",(pre_checkout_query: IPreCheckoutQuery) => {
                descriptor.value(pre_checkout_query)
            })
        }
    }

    poll() {
        return (target: object, key: string, descriptor: PropertyDescriptor) => {
            this.event.on("poll", (poll: IPoll) => {
                descriptor.value(poll)
            })
        }
    }

    poll_answer() {
        return (target: object, key: string, descriptor: PropertyDescriptor) => {
            this.event.on("poll_answer", (poll_answer: IPollAnswer) => {
                descriptor.value(poll_answer)
            })
        }
    }

    async get_me() {
        const data = await request({
            url: this.url.get_me(),
            method: "GET"
        })

        return JSON.parse(data).result
    }

    async send_message(params: ISendMessage) {
        const data = await request({
            url: this.url.send_message(params),
            method: "GET"
        })

        return JSON.parse(data).result
    }

    async send_forward(params: IForwardMessage) {
        const data = await request({
            url: this.url.send_forward(params),
            method: "GET"
        })

        return JSON.parse(data).result
    }

    async send_photo(params: ISendPhoto) {
        const form_data = new FormData()

        form_data.append("photo", params.photo)

        const data = await request({
            url: this.url.send_photo(params),
            method: "POST",
            body: form_data
        })

        return JSON.parse(data).result
    }
}