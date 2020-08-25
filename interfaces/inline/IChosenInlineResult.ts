import { IUser } from "../user/IUser"
import { ILocation } from "../media/location/ILocation"

export interface IChosenInlineResult {
    result_id: string
    from: IUser
    location?:	ILocation
    inline_message_id?: string
    query: string
}