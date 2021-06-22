var main=document.getElementById("main")

 console.log(main)


 var plus=document.getElementsByClassName("plus")
 var counter=document.getElementsByClassName("compteur")
 var minus=document.getElementsByClassName("moin")
 for(let i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function(){

        counter[i].innerHTML=Number(counter[i].innerHTML)+1
        })
        minus[i].addEventListener("click",function(){
              if(Number(counter[i].innerHTML)>0)  counter[i].innerHTML=Number(counter[i].innerHTML)-1
            else counter[i].innerHTML=0
          })
        
 }
 
   
  