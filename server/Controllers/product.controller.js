const Product = require('../Models/product.model')

// CRUD

// Find All
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts)=> {
            console.log(allProducts)
            res.json(allProducts)
        })
        .catch(err=> {
            console.log(err)
            res.json({message: "Something went wrong", error: err})
        })
}

// Find one
module.exports.findOneProduct = (req, res) => {
    Product.findById({_id: req.params.id})
        .then(oneProduct => {
            console.log(oneProduct)
            res.json(oneProduct)
        })
        .catch(err => {
            console.log("err")
            res.json({message: "Someting went wrong", error: err})
        })
}

// CreateNew
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct=> {
            console.log(newProduct)
            res.json(newProduct)
        })
        .catch((err) => {
            console.log('Somethine went wrong while Creating a New Product...')
            res.status(400).json(err)
        })
}

// Update 
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new:true, runValidators: true}
    )
    .then(updatedProduct => {
        console.log(updatedProduct)
        res.json({item: updatedProduct})
    })
    .catch((err) => {
        console.log('Somethine went wrong while updating...')
        res.status(400).json(err)
    })
}

// Delete
module.exports.destroyProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(result => {
            console.log('result')
            res.json(result)
        })
        .catch(err => {
            console.log(err)
            res.json({message: "Something went wrong.", error: err})
        })
}