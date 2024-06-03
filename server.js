const express = require('express')
const app = express()


const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const hourOfDay = now.getHours();

    if (dayOfWeek >= 1 && dayOfWeek <= 5 && hourOfDay >= 9 && hourOfDay < 17) {
        next(); // Continue to the next middleware/route handler
    } else {
        res.send('Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17).');
    }
};

app.get('/',(req,res) =>{
    res.sendFile(__dirname+'/static/home.html')
})
app.get('/contact',(req,res) =>{
    res.sendFile(__dirname+'/static/contactus.html')
})
app.get('/service',(req,res) =>{
    res.sendFile(__dirname+'/static/service.html')
})

app.get('/style.css',(req,res) =>{
    res.sendFile(__dirname+'/static/style.css')
})

const PORT = 5000
app.listen(PORT , () => console.log('Listening on port :',PORT))
