"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
app_1.default.listen(process.env.PORT || 3333, function () {
    console.log('🚀 Server started on port 3333!');
});
//# sourceMappingURL=server.js.map