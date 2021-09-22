"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("./routes/users"));
var path_1 = __importDefault(require("path"));
var products_1 = __importDefault(require("./routes/products"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/auth", users_1.default);
app.use("/api/products", products_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(function (err, req, res, next) {
    res.json({ message: err.message });
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("app start at", port);
});
