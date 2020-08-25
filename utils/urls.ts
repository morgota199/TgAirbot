import { IGetUpdate } from "../polling/IPolling"
import {ISendMessage} from "../interfaces/message/ISendMessage";
import {IForwardMessage} from "../interfaces/message/IForwardMessage";
import {ISendPhoto} from "../interfaces/message/ISendPhoto";

export class Urls {
    base_url: string

    constructor(private token: string) {
        this.base_url = `https://api.telegram.org/bot${token}`
    }

    get_update(params?: IGetUpdate) {
        let url = this.base_url + "/getUpdates?"

        if(params)
            for(const param in params) {
                switch (param) {
                    case "offset":          url += param + "=" + params[param] + "&"; break;
                    case "limit":           url += param + "=" + params[param] + "&"; break;
                    case "timeout":         url += param + "=" + params[param] + "&"; break;
                    case "allowed_updates": url += param + "=" + params[param] + "&"; break;
                }
            }

        return url
    }

    get_me() {
        return this.base_url + "/getMe"
    }

    send_message(params?: ISendMessage) {
        let url = this.base_url + "/sendMessage?"

        if(params)
            for(const param in params) {
                switch (param) {
                    case "chat_id":
                        url += param + "=" + params[param] + "&"; break;
                    case "text":
                        url += param + "=" + params[param] + "&"; break;
                    case "parse_mode":
                        url += param + "=" + params[param] + "&"; break;
                    case "disable_web_page_preview":
                        url += param + "=" + params[param] + "&"; break;
                    case "disable_notification":
                        url += param + "=" + params[param] + "&"; break;
                    case "reply_to_message_id":
                        url += param + "=" + params[param] + "&"; break;
                    case "reply_markup":
                        url += param + "=" + params[param] + "&"; break;
                }
            }

        return url
    }

    send_forward(params?: IForwardMessage) {
        let url = this.base_url + "/forwardMessage?"

        if(params)
            for(const param in params) {
                switch (param) {
                    case "chat_id":
                        url += param + "=" + params[param] + "&"; break;
                    case "from_chat_id":
                        url += param + "=" + params[param] + "&"; break;
                    case "disable_notification":
                        url += param + "=" + params[param] + "&"; break;
                    case "message_id":
                        url += param + "=" + params[param] + "&"; break;
                }
            }

        return url
    }

    send_photo(params?: ISendPhoto) {
        let url = this.base_url + "/sendPhoto?"

        if(params)
            for(const param in params) {
                switch (param) {
                    case "chat_id":
                        url += param + "=" + params[param] + "&"; break;
                    case "photo":
                        url += param + "=" + params[param] + "&"; break;
                    case "caption":
                        url += param + "=" + params[param] + "&"; break;
                    case "parse_mode":
                        url += param + "=" + params[param] + "&"; break;
                    case "disable_notification":
                        url += param + "=" + params[param] + "&"; break;
                    case "reply_to_message_id":
                        url += param + "=" + params[param] + "&"; break;
                    case "reply_markup":
                        url += param + "=" + params[param] + "&"; break;
                }
            }

        return url
    }
}