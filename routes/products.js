"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_1 = __importDefault(require("../controllers/products"));
var router = (0, express_1.Router)();
router.get("/", products_1.default.productList);
exports.default = router;
