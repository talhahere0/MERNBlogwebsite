const Category = require('../models/category.model')


exports.createCategory = (req,res)=>{
    console.log(req.body)
    const title = req.body.title
    const creator = req.body.creator
    const message = req.body.message
    const tags = req.body.tags
    const name = req.body.name
    const image = req.file.path

    const category = new Category({
        title: title,
        creator: creator,
        message: message,
        tags: tags,
        name:name,
        image:image
    })

    category.save((err,category)=>{
        if(err){
            return res.status(400).json({
                errors:err.message
            })
        }

        return res.json({
             message:'created category successfully',
             category
        })
    })

}

exports.getalldata = async (req, res) => {
    await Category.find()
    .then((items) => {res.json(items)})
    .catch((err) => {res.status(400).json(`Error`+err)})
}