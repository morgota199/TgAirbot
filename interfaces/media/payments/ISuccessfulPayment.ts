import { IOrderInfo } from "./IOrderInfo"

export interface ISuccessfulPayment {
    currency: string
    total_amount: number
    invoice_payload: string
    shipping_option_id?: string
    order_info?: IOrderInfo
    telegram_payment_charge_id: string
    provider_payment_charge_id: string
}