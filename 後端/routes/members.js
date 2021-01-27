const { query } = require('express')
const express = require('express')
// const router = require('express').Router()
const router = express.Router()
const member = require('../models/members')
const course = require('../models/courses')
const products = require('../models/products')


//query all member 
router.get('/:id', async (req,res) =>{
    const members = await member.findById({_id: req.params.id})
    res.json(members)
    console.log(members)
})
//Create new member
router.post('/add', async(req,res) => {
    const newmember = new member(req.body);
    const savedmember = await newmember.save();
    res.json(savedmember)
})

//search specific item
router.get('/get/:id', async(req,res) => {
    const user = await member.findById({_id: req.params.id})
    res.json(user);
})

router.get('/lesson/:course_id?', async(req, res) => {
    const per_course = await course.findById({_id: req.params.course_id})
    res.json(per_course)
})

router.get('/collections/:product_id?', async(req, res) => {
    console.log(req.params.product_id)
    const per_product = await products.findById({_id: req.params.product_id})
    res.json(per_product)
})

router.get('/:id?/:course_id?', async(req,res) => {
    console.log('會員ID:' + req.params.id)
    console.log('課程ID:' + req.params.course_booking)
    // const user = await member.findById({_id: req.params.id})
    const Course = await member.find({"_id": req.params.id})
    res.json(Course);
    
    //{course_booking: {$in: Number(req.params.course_id) }}
    // const keyword_data = await course.find({name: {$regex: req.params.keyword}, type: {$regex: req.params.type}})
    
})

//

router.get('/:id/:product_id', async(req,res) => {
    console.log('會員ID:' + req.params.id)
    console.log('商品ID:' + req.params.collections)
    const Product = await member.find({"_id": req.params.id})
    res.json(Product);
    
})




//delete specific item
router.delete('/detele/:id', async(req,res) =>{
    const result = await member.findByIdAndDelete({_id:req.params.id})
    res.json(result)
})

//update a specific item
router.put('/update/:id', async(req,res) =>{
    // console.log(req.body)
    const memb = await member.updateOne({_id: req.params.id},{$set: req.body})
    res.json(memb)
})

//delete specific item
router.delete('/deleteNotifications/:index/:member_id', async(req,res) =>{
    let user = await member.findById({_id: parseInt(req.params.member_id)})
    // console.log(req.params.index)
    user.notifications_account.splice(req.params.index, 1)
    // console.log(user)
    const newmember = new member(user);
    const savedmember = await newmember.save();
    res.json(savedmember)
})

router.delete('/deleteCollections/:index/:member_id/:product_id', async(req,res) =>{
    let user = await member.findById({_id: req.params.member_id})
    console.log(req.params.index)
    console.log(req.params.product_id)
    const product_index = (req.params.index)
    const product_id = req.params.product_id
    // await products.updateOne({_id: product_id})
    user.collections.splice(product_index, 1)
    res.send(req.params.index)
    const newmember = new member(user);
    const savedmember = await newmember.save();
    res.json(savedmember)
})

router.delete('/deleteCourse/:index/:member_id/:course_id', async(req,res) =>{
    let user = await member.findById({_id: req.params.member_id}) //找該會員的ID
    // console.log(req.params.index)
    // console.log(req.params.course_id)
    const course_index = (req.params.index) //課程的索引值位置
    const course_id = req.params.course_id  //課程的ID
    await course.updateOne({_id: course_id},{ $inc: {people: +1}}) //釋放名額，課程人數+1
    user.course_booking.splice(course_index, 1) //刪除該會員的課程預約ID
    res.send(req.params.index)
    const newmember = new member(user); //建立新的會員資料
    const savedmember = await newmember.save(); //把新會員資料寫回資料庫(覆蓋掉舊的資料)
    res.json(savedmember)
})

// mongodb find() multi condition
// ?field1=value1&field2=value2&field3=value3


module.exports = router;