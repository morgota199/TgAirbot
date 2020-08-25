import { IUser } from "../user/IUser"
import { ILocation } from "../media/location/ILocation"

export interface IInlineQuery {
    id: string
    from: IUser
    location?:	ILocation
    query: string
    offset: string
}