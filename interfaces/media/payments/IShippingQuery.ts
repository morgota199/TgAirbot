import { IUser } from "../../user/IUser"
import { IShippingAddress } from "./IShippingAddress"

export interface IShippingQuery {
    id: string
    from: IUser
    invoice_payload: string
    shipping_address: IShippingAddress
}