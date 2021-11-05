

const log_in_btn_section=document.getElementById("log-in");
const log_in=document.getElementById("login-btn");

const provider=new firebase.auth.GoogleAuthProvider();

log_in.onclick=function(){
    auth.signInWithPopup(provider);
}

auth.onAuthStateChanged(function(firebaseUser)
{
    if(firebaseUser!=null)
    {
        window.location="todos.html";
    }
    else
    {
      log_in_btn_section.style.visibility="visible";
    }
})