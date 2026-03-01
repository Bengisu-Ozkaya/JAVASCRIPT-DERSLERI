// DOM (Document Object Model)
// document.getElementById("bio").innerHTML="Bengisu Özkaya Computer Engineering" // id'si bio olanı buluyor ve Bengisu ... yazıyor
// innerHTML -> <p>___</p>  "___" içeriğini değiştirebiliyoruz 

//getElementById
/*var par1 = document.getElementById("par1")
var msg = document.getElementById("msg")

msg.innerHTML=par1.innerHTML*/

//getElementsByTagName
/*var list = document.getElementsByTagName("ul") // ul tagli her şeyi kapsıyor
var benefit = list[0]

var benefitList = benefit.getElementsByTagName("li") //listedeki elemanları aldı

for(i=0;i<benefitList.length;i++){
    alert(benefitList[i].innerHTML) //innerHTML deme sebebimiz listedeki elemanların içinde ne yazdığını görmek
}*/

//getElementsByClassName
/*var classElements = document.getElementsByClassName("par1") //par1 sınfında olan bütün elemanlar
alert(classElements[1].innerHTML)

//querySelectorAll
var queryElement = document.querySelectorAll("p.par1") // p'lerden par1 classını kullananları çek
alert(queryElement.length)                             // getElementByClassName ile yapsaydık par1 classını kullanan bütün elemanları kapsamış olacaktık

//getElementsByName
var user = document.getElementsByName("name")
alert(user[0].value)*/

// EventListener
/*var product = document.getElementById("product").addEventListener("click", changeColor) //click ile tıklama eventi ekledik
var product = document.getElementById("product").addEventListener("mouseover", darkFunct) //mouseover ile elementin üstüne mouse ile gelinmesi
var product = document.getElementById("product").addEventListener("mouseout", lightFunct)

function changeColor(){
    document.getElementById("div").style.color="red"
    
    var nameList = document.getElementsByName("name");
    nameList[0].value = "Bengisu"

    document.getElementById("product").style.background="white";
}

function darkFunct(){
    document.getElementById("product").style.background="gray";
}
function lightFunct(){
    document.getElementById("product").style.background="white";
}*/

var heading = document.createElement("h3")
var node = document.createTextNode("Vazgeçilmeziniz olacak...")
heading.appendChild(node)
/*Burada <h3>Vazgeçilmeziniz olacak...</h3> ifadesini oluşturduk aslında*/

var div = document.getElementById("div2")
var p = document.getElementById("producer")
div.insertBefore(heading,p) //id'si producer olan yerin üstüne bu oluşturduğmuz node'u ekledik

// ekleme yapabileceğimiz gibi silme de yapabiliyoruz
alert("Producer Silinecek")
div.removeChild(p)

// değiştirme de yapılabilyor aynı zamanda
var prod = document.getElementById("product")
alert("Product Değişiyor")
div.replaceChild(heading,prod)


