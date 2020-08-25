import { IPassportFile } from "./IPassportFile"

export interface IEncryptedPassportElement {
    type: string
    data?: string
    phone_number?: string
    email?: string
    files?:	IPassportFile[]
    front_side?: IPassportFile
    reverse_side?: IPassportFile
    selfie?: IPassportFile
    translation?: IPassportFile[]
    hash: string
}