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

function isUser(email,password){
    for(i=0;i<users.length;i++){
        if(users[i].email == email && users[i].password){
            return true
        }
        return false
    }
}


function logIn(email, password){
    if(isUser(email,password)){
        console.log(posts)
    } else{
        console.log("Bilgilerinizi doğru giriniz!")
    }
}

logIn(email,password)