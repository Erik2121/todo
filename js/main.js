const firebaseConfig = {
    apiKey: "AIzaSyABY3OuhwyjIOJx3s6Gu4BTvHBJlTN-esA",
    authDomain: "todo-ffe7f.firebaseapp.com",
    projectId: "todo-ffe7f",
    storageBucket: "todo-ffe7f.appspot.com",
    messagingSenderId: "118413710250",
    appId: "1:118413710250:web:ecdf0d35226c420a0091d3",
    measurementId: "G-25E7L7S4FF"
  };

firebase.initializeApp(firebaseConfig);

 const auth=firebase.auth();
 const db=firebase.firestore();

 const logout_btn=document.getElementById("logout-btn");

 logout_btn.onclick=function(){
     auth.signOut();
 }

 auth.onAuthStateChanged(function(firebaseUser){

    if(firebaseUser!=null)
    {
        logout_btn.style.visibility="visible";
    }


 })