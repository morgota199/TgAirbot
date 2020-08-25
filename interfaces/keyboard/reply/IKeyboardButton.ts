import { IKeyboardButtonPollType } from "./IKeyboardButtonPollType"

export interface IKeyboardButton {
    text: string
    request_contact?: boolean
    request_location?: boolean
    request_poll?:	IKeyboardButtonPollType
}