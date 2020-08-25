import { IUser } from "../../user/IUser"
import { IOrderInfo } from "./IOrderInfo"

export interface IPreCheckoutQuery {
    id: string
    from: IUser
    currency: string
    total_amount: number
    invoice_payload: string
    shipping_option_id?: string
    order_info?: IOrderInfo
}