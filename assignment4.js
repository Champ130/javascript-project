    // Median
    function fun1(){
        var a=document.getElementById("input1").value;
        var b=document.getElementById("input2").value;
        var c=document.getElementById("input3").value;
        var p=document.getElementById("ans");
    


        if(a>b && a<c || a<b && a>c){
            p.value= a+" is the median"
        } else if(b>a && b<c || b<a && b>c){
            p.value= b+" is the median"
        }else if(c<a && c>b || c<a && c>b){
            p.value= c+" is the median"
        }
    }


    // odd or even

    function fun2(){
                var z=document.getElementById("input4").value;

                if(z%2==0){
                    alert("even")
                }else{
                    alert("odd")
                }
            }


    // divisible by 3
    function fun4(){
        var a=document.getElementById("input6").value;

        if(a%3==0){
            alert("Divisible by 3")
        }else{
            alert("Not divisible by 3")
        }
    }


    // grades

    function fun7(){
        var a=Number(document.getElementById("x").value);

        if(a>=0 && a<25){
            alert("grade: F");
        }else if(a>=25 && a<45){
            alert("grade: E");
        }else if(a>=45 && a<50){
            alert("grade: D");
        }else if(a>=50 && a<60){
            alert("grade: C");
        }else if(a>=60 && a<80){
            alert("grade: B");
        }else if (a>80 && a<=100){
            alert("grade: A");
        }else {
            alert("not valid")
        }
    }


    // Month

    function month(){
        var y=document.getElementById("y").value;

        if(y==1){
            alert("January")
        }else if(y==2){
            alert("February");
        }else if(y==3){
            alert("March");
        }else if(y==4){
            alert("April");
        }else if(y==5){
            alert("May");
        }else if(y==6){
            alert("June");
        }else if(y==7){
            alert("July");
        }else if(y==8){
            alert("August");
        }else if(y==9){
            alert("September");
        }else if(y==10){
            alert("October");
        }else if(y==11){
            alert("November");
        }else if(y==12){
            alert("December");
        }else{
            alert("There is no month after 12");
        }
    }












