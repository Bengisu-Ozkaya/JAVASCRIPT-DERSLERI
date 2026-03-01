var users = [
    {email:"b@gmail.com", password:"1234"},
    {email:"g@gmail.com", password:"12345"},
    {email:"e@gmail.com", password:"123456"},
    {email:"d@gmail.com", password:"1234567"}
]

var posts = [
    {email:"b@gmail.com", post:"Merhabalar"},
    {email:"b@gmail.com", post:"Saçımın rengi kırmızı"},
    {email:"g@gmail.com", post:"Staj başvurusu yaptım"},
    {email:"d@gmail.com", post:"Malesef bu sabah da uyandık"}
]

var email = prompt("Email ?")
var password = prompt("Password ?")

function logIn(email, password){
    if(email == users[0].email && password == users[0].password 
        || email == users[1].email && password == users[1].password
        || email == users[2].email && password == users[2].password
        || email == users[3].email && password == users[3].password
    ){
        console.log(posts)
    } else {
        console.log("Giriş bilgilerinde hata var")
    }
}

logIn(email,password)