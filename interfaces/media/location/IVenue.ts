import { ILocation } from "./ILocation"

export interface IVenue {
    location: ILocation
    title: string
    address: string
    foursquare_id?: string
    foursquare_type?: string
}