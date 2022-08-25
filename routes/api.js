const express = require('express');
const QuotePost = require('../model/quotePost');

const router = express.Router();

//retrieve the data from the database
router.get('/',(req,res)=>{
    QuotePost.find({ })
    .then((data)=>{
        console.log("Data: " ,data);
        res.json(data);
    })
    .catch((err)=>{ "Error: " ,daerrorta});
});
//save new data
router.post('/save',(req,res)=>{
    const datas = req.body;
    const newQuotePost = new QuotePost(datas);
    newQuotePost.save((err)=>{
        if (err) {
            res.status(500).json({msg:"Internal Server Error"});
        }
        return res.json({
            msg: "Successly saved the quote",
        });
    });
});
// QuotePost.deleteMany({},(err)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log("succesfully deleted")
// })
module.exports = router;