const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req,res)=> {
    return res.json({
        message: "Hey, i am node js in conatiner"
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})