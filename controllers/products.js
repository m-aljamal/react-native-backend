"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products = [
    {
        id: 101,
        image: "red-jacket.jpeg",
        title: "Red jacket",
        price: 100,
    },
    {
        id: 102,
        image: "green.jpeg",
        title: "Green sweter",
        price: 50,
    },
];
var productList = function (req, res) {
    res.json({ products: products });
};
exports.default = { productList: productList };
