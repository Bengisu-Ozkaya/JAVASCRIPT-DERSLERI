//DOM (Document Object Model)
//document.getElementById("bio").innerHTML="Bengisu Özkaya Computer Engineering" // id'si bio olanı buluyor ve Bengisu ... yazıyor
//innerHTML -> <p>___</p>  "___" içeriğini değiştirebiliyoruz 

// var par1 = document.getElementById("par1")
// var msg = document.getElementById("msg")

// msg.innerHTML=par1.innerHTML

// /*var list = document.getElementsByTagName("ul") // ul tagli her şeyi kapsıyor
// var benefit = list[0]

// var benefitList = benefit.getElementsByTagName("li") //listedeki elemanları aldı

// for(i=0;i<benefitList.length;i++){
//     alert(benefitList[i].innerHTML) //innerHTML deme sebebimiz listedeki elemanların içinde ne yazdığını görmek
// }*/

// var classElements = document.getElementsByClassName("par1") //par1 sınfında olan bütün elemanlar
// alert(classElements[1].innerHTML)

//var queryElement = document.querySelectorAll("p.par1") // p'lerden par1 classını kullananları çek
//alert(queryElement.length)                                                      // getElementByClassName ile yapsaydık par1 classını kullanan bütün elemanları kapsamış olacaktık

var user = document.getElementsByName("name")
alert(user[0].value)

