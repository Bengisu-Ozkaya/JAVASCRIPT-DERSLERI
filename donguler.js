/*For Döngüsü */
var city = ["Ankara","Sivas","Nevşehir","Bursa"]
for(i=1;i<=city.length;i++){
    console.log(city[i])
}

//While Döngüsü
var i = 0;
while(i<=10){
    console.log(i)
    i++
}

// Do While Döngüsü
var a = 1;
do{
    console.log(a);
    a++;
}while(a<=5){}

//For each döngüsü
city.forEach(function(city){
    console.log(city)
})