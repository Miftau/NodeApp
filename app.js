const express = require('express')

const app = express()
const port = 4000

// middleware for static files
app.use(express.static('./public'))

// middleware for getting for data

app.use(express.urlencoded({extended: true}))


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})


// home route
app.get('/',(req, res)=> {
    res.sendFile(__dirname, 'index.html')
})

// post route

app.post('/submit', (req, res)=> {
    const username = req.body.username
    const email = req.body.email
    console.log(req.body)

    res.send(`
           Your username is ${username} and email is ${email}
    `)
})

// contact get route

app.get('/contact',(req, res)=> {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>Contact</title>
</head>
<body>
    <form action="/submit-form" method="post">
        <fieldset>
            <h1> Please use the form below to contact us on your query</h1>
            <input type="text" name="fullname" id="" placeholder="Enter your full name" required> <br>
            <input type="email" name="email" id="" placeholder="Enter your email" required> <br>
            <input type="text" name="subject" id="" placeholder="Enter the subject" required> <br>
            <textarea name="content" id="" cols="20" rows="10" placeholder="Enter your message here"></textarea> <br>
            <input type="submit" value="Submit">
        </fieldset>
    </form>
</body>
</html>
    `)
})

app.post('/submit-form', (req, res)=> {
    const fullname = req.body.fullname
    const email = req.body.email
    const subject = req.body.subject
    const content = req.body.content
    console.log(req.body)

    res.send(`
           Hello! ${fullname} with email ${email}, Your message has been sent successfully
    `)
})



app.get('/about',(req, res)=> {
    res.send(`<h1> You are welcome to my NodeApp</h1>`)
})

app.get('/student',(req, res)=> {
    res.send(`<h1> Mr Progress</h1>
              <h1> Mr Yusuf</h1>
              <h1> Quadtech </h1>
              <h1> Babatunde </h1>
    `)
})

app.all('*', (req, res)=> {
    res.send(`<h1> PAGE NOT FOUNG! 404 PAGE </h1>`)
})