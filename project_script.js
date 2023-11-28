document.addEventListener("DOMContentLoaded", function(){
    // checks which page is loaded and it calls the corresponding function for that particular  page.
    if (document.title == "SignUp/soapbottle"){
        checkCredentials();
        
        
    }
    else if (document.title == "SOAPBOTTLE/home"){
        Welcome();

    }
    
})


function Welcome(){
    var visited = localStorage.getItem("visitedBefore");
    if(!visited){

    
    let name = prompt("Please enter your name:");
    alert("Welcome"+" "+ name+""+","+" "+"to the SOAPBOTTLE site"+""+ "!");
    console.log("Welcome"  +" "+ name + "!"); }
    else{
        alert("Glad to have you back"+""+"!");
        
    }
    localStorage.setItem("visitedBefore",true);

} 

function checkCredentials(){
    
    
    if(document.signupform.FirstName.value == ""){
        alert("Please provide your first Name ");
        document.signupform.FirstName.focus();
        return false;
        
        }
        if(document.signupform.FirstName.value == ""){
            alert("Please provide your first Name ");
            document.signupform.FirstName.focus();
            return false;}

        if(document.signupform.Surname.value == ""){
                alert("Please provide your Surname ");
                document.signupform.Surname.focus();
                return false;}

        if(document.signupform.Email.value == ""){
                    alert("Please provide your Email ");
                    document.signupform.Email.focus();
                    return false;}
        if(document.signupform.Phone.value == ""){
                        alert("Please provide your Phone number ");
                        document.signupform.Phone.focus();
                        return false;}
        if(document.signupform.password.value == ""){
                            alert("Please provide your Password ");
                            document.signupform.password.focus();
                            return false;}
        if(document.signupform.conpassword.value == ""){
                                alert("Please provide your password confirmation ");
                                document.signupform.conpassword.focus();
                                return false;}
       
        if(document.signupform.password.value!==document.conpassword.value){
            alert("Password does not match.");
            document.signupform.password.focus();
            return false;

            
        }
        else{
            alert("You have successfully signed up for SOAPBOTTLE services");
        }
        return (true);
       
        }
    
       
        
        
        
    
    



 