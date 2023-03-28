const BlogModel = require('../models/blog')
const CategoryModel = require('../models/category')
class FrontendController{
    static home = async(req,res)=>{
        try{
            // const blog_data=await BlogModel.find()
            // console.log(blog_data)
            const blog_data = await BlogModel.find().sort({_id:-1}).limit(6)
            res.render('front/home',{d:blog_data})
        }catch (err){
            console.log(err)
        }
        
    }
    static about = async(req,res)=>{
        res.render('front/about')
    }
    static contact = async(req,res)=>{
        res.render('front/contact')
    }
    static Bloglist=async(req,res)=>{
        try{
            const recent_blog = await BlogModel.find()
            res.render('front/bloglist',{d:recent_blog})
        }catch(err){
           console.log(err) 
        }
        
    }
    static blogdetail = async(req,res)=>{
        // console.log(req.params.id)
        try{
            const category = await CategoryModel.find()
            const recentblog = await BlogModel.find().sort({_id:-1}).limit(4)
            // console.log(category)
            const detail = await BlogModel.findById(req.params.id)
            // console.log(detail)
            res.render("front/blogdetail",{d:detail,c:category,r:recentblog})
        }catch(err){
            console.log(err)
        }
    }
    static login = async(req,res)=>{
        res.render('front/login',{message:req.flash('success'),error:req.flash('error')})
    }


}
module.exports = FrontendController