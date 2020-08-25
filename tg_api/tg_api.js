"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TgApi = void 0;
var events_1 = require("../utils/events");
var TgApi = /** @class */ (function () {
    function TgApi() {
    }
    TgApi.prototype.update = function () {
        var _this = this;
        this.event.on("update", function (update) {
            for (var param in update) {
                if (param === "message")
                    _this.event.emit(param, update[param]);
                if (param === "edited_message")
                    _this.event.emit(param, update[param]);
                if (param === "channel_post")
                    _this.event.emit(param, update[param]);
                if (param === "edited_channel_post")
                    _this.event.emit(param, update[param]);
                if (param === "inline_query")
                    _this.event.emit(param, update[param]);
                if (param === "chosen_inline_result")
                    _this.event.emit(param, update[param]);
                if (param === "callback_query")
                    _this.event.emit(param, update[param]);
                if (param === "shipping_query")
                    _this.event.emit(param, update[param]);
                if (param === "pre_checkout_query")
                    _this.event.emit(param, update[param]);
                if (param === "poll")
                    _this.event.emit(param, update[param]);
                if (param === "poll_answer")
                    _this.event.emit(param, update[param]);
            }
        });
    };
    TgApi = __decorate([
        events_1.EventD()
    ], TgApi);
    return TgApi;
}());
exports.TgApi = TgApi;
