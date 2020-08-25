import { IEncryptedPassportElement } from "./IEncryptedPassportElement"
import { IEncryptedCredentials } from "./IEncryptedCredentials"

export interface IPassportData {
    data: IEncryptedPassportElement[]
    credentials: IEncryptedCredentials
}