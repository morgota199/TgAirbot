import { IGetUpdate } from "../../polling/IPolling"

export interface IAirbotOptions {
    polling: boolean
    polling_options?: IGetUpdate
}