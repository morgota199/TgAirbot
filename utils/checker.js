"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_options = void 0;
exports.check_options = function (options, type) {
    switch (type) {
        case "offset":
            if (options.offset)
                return options.offset;
            return 0;
        case "limit":
            if (options.limit)
                return options.limit;
            return 100;
        case "timeout":
            if (options.timeout)
                return options.timeout;
            return 0;
        default: return 0;
    }
};
