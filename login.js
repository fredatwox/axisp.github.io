
//import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseClient = supabase.createClient('https://hxmeiqslsecbnzrqhcgu.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4bWVpcXNsc2VjYm56cnFoY2d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMjcxMjgsImV4cCI6MTk5NjgwMzEyOH0.qFCmpQ-3hDLjdxkfFsIOdsZZuQK8UXMncvvJoDzcbRA')




async function logMeIn() {
    let username = document.getElementById("email").value 
    let password = document.getElementById("password").value
    console.log("this is your username "+username)

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: username,
        password: password,
    })

    if (username !== "freddiecom10@gmail.com" && password !== "Admin@123") {
       
      
}else{
    console.log("You are authenticated")
    console.log(data);
    window.location.assign("/AxisForm/form.html");
    
}
    if(error){
        console.log(error);
        alert("Sorry your username and password is incorrect")

    
    }

}


  