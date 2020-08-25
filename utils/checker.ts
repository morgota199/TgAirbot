import { IGetUpdate } from "../polling/IPolling"

export const check_options = (options: IGetUpdate, type: string) => {
    switch (type) {
        case "offset":
            if(options.offset)
                return options.offset

            return 0
        case "limit":
            if(options.limit)
                return options.limit

            return 100
        case "timeout":
            if(options.timeout)
                return options.timeout

            return 0
        default: return 0
    }
}