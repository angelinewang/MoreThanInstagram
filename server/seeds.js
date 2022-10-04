import mongoose from 'mongoose';

// import dotenv from 'dotenv';
import './config/database.js';
import Product from "./models/product.js";
// import User from "./models/user.js";

// User.deleteMany({}).then(() => {
//     console.log('User Database connected!')
// })

// User.insertMany([
//     {
//         name: "Angeline",
//         email: "angeline@angeline.com",
//         password: "123"},
//     {
//         name: "Jack",
//         email: "jack@jack.com",
//         password: "123"},   
//     {
//         name: "Matt",
//         email: "matt@matt.com",
//         password: "123"},  
//     {
//         name: "Anna",
//         email: "anna@anna.com",
//         password: "123"},  
//     {
//         name: "Peter",
//         email: "peter@peter.com",
//         password: "123"},           
// ]).then(() => {
//     console.log("User Data was asynchronously added")
// })

Product.deleteMany({}).then(() => {
    console.log('Product Database connected!')
})

Product.insertMany([
    // {
    //     name: "Lamp",
    //     photoURL: [ String ],
    //     description: "Very modern and nice LED lamp",
    //     price: 24,
    //     seller: {type: mongoose.Schema.ObjectId, ref: 'User'}},
    {
        name: "Lamp",
        description: "Very modern and nice LED lamp",
        image: "https://unsplash.com/photos/pxoZSTdAzeU",
        category: "Home",
        quantity: 4,
        price: 24,
        seller: "63380a5a46854862f76758a9"}  
    // {
    //     name: 'Matt', 
    //     description: 'Today is a good day'},  
    // {
    //     name: 'Manohisoa', 
    //     description: 'Love Express!'},  
    // {
    //     name: 'Ana', 
    //     description: 'Today is a good day'},           
]).then(() => {
    console.log("Product Data was asynchronously added")
})
// Needs to be like the schema we passed in in the model