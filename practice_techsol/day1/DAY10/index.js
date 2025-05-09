function fun() {
    const nam = document.getElementsByClassName("name")[0].value;
    const pas = document.getElementsByClassName("pass")[0].value;
    const pp = document.getElementsByClassName("valid")[0];
    const page=document.getElementsByClassName("container")[0];
    

   if(nam=="midhin" && pas=="midhin"){
    page.style.display="none";  
    document.getElementsByClassName("welcome")[0].textContent=`welcome ${nam}`;
  
    document.getElementsByClassName("welcome")[0].style.cssText="padding-top:200px;padding-left:350px;color: white; font-size: 100px;";
    document.getElementsByClassName("welcome").style.display="block";
   }
   else{
    pp.textContent="please enter valid credentials";
    setTimeout(()=>{
     alert("enter a valid")
    },1000)
   
   }
}
function regist(){
    const page=document.getElementsByClassName("container")[0];
    const rpage=document.getElementsByClassName("register")[0];
    page.style.display="none";
    rpage.style.display="block";
}
