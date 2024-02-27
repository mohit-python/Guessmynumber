const randomnumber = Math.floor(Math.random() * 20) + 1;
var c=0
document.getElementById("myform").addEventListener("submit",function(event){
    event.preventDefault();
    var g = document.getElementById("myinp").value;
    if(randomnumber == g)
    {
     document.getElementById("won").innerHTML=`Congratulations you guessed it in ${c} attempts`;
     c=0;
    }
    else if (randomnumber > g)
    {
        document.getElementById("won").innerHTML = "TOO LOW";
    }
    else
    {
        document.getElementById("won").innerHTML = "TOO HIGH";
    }
    c+=1;
    console.log(randomnumber);
});
