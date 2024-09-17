var today = new Date();
let btn = document.querySelector(".btn-1")
let birth=document.querySelector(".birth-date");
const ageCalculator=()=>{
    var b = birth.value.split("-");
    let birth_year = parseInt(b[0]);
    let birth_month = parseInt(b[1]);
    let birth_date = parseInt(b[2]);

    let year, month, date;
    let monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(today.getFullYear()>=birth_year&&today.getMonth()>=birth_month){
        if(today.getDate()>=birth_date){
            year=today.getFullYear()-birth_year;
            month=(today.getMonth()-birth_month)+1;
            date=today.getDate()-birth_date;
        }else{
            year=today.getFullYear()-birth_year;
            month=(today.getMonth()-birth_month)+1;
            date=(today.getDate()+monthdays[today.getMonth()])-birth_date
        }
    }else{
        if(today.getDate()>=birth_date){
            year=today.getFullYear()-birth_year-1;
            month=((today.getMonth()+12)-birth_month)+1;
            date=today.getDate()-birth_date;
        }else{
            year=today.getFullYear()-birth_year-1;
            month=((today.getMonth()+12)-birth_month)+1;
            date=(today.getDate()+monthdays[today.getMonth()])-birth_date;
        }
    }
    document.querySelector("p").textContent=`Your age is ${year} years ${month} months ${date} days old`;
    document.querySelector("p").style.color="black"
    }
btn.addEventListener("click",(event)=>{
    if(birth.value==""){
        document.querySelector("p").innerHTML=`Please Enter proper DOB!`;
        document.querySelector("p").style.color="red"
    }else{
        ageCalculator();
    }
})
document.querySelector(".btn-2").addEventListener("click",(event)=>{
    location.reload();
})