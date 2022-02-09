import express, { response } from 'express'

const app = express()

app.get("/github" , (request , response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})


app.get('/signin/callback' , (request , response )=> {
    const { code } = request.query
    console.log(code)
    return response.json(code )
})
app.listen(3000 , () => console.log('Server listenning at 3000 '))