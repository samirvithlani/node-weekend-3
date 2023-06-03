const userProductSchema = require("../models/User_ProductSchema");

exports.addProductToCart = (req, res) => {

    console.log(req.body);
    const userProduct = new userProductSchema(req.body);
    userProduct
        .save()
        .then((data) => {
        res.status(200).json({
            message: "Product added to cart successfully",
            data: data,
        });
        })
        .catch((err) => {
        res.status(500).json({
            message: "Error while adding product to cart",
            error: err,
        });
        });

}

exports.getAllProductsFromCart = (req, res) => {

    userProductSchema.find().populate('user').populate('product').then((data) => {
        res.status(200).json({
        message: "All products from cart",
        data: data,
        });
    }).catch((err) => {
        res.status(500).json({
        message: "Error while fetching products from cart",
        error: err,
        });
    });


}