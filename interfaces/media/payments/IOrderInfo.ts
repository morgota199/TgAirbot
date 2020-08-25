import { IShippingAddress } from "./IShippingAddress"

export interface IOrderInfo {
    name?: string
    phone_number?: string
    email?: string
    shipping_address?:	IShippingAddress
}