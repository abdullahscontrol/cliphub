const downloadLinks = document.querySelectorAll("[data-download]");
downloadLinks.forEach(button => {
    const id = button.dataset.download;
    const video = document.getElementById(id);
    const a = document.createElement("a");
    a.href = video.src;
    a.download = "";



});  
// Encapsulation ==> in object oriented programming when we here about encapsulation we think of 
// like grouping related variables and functions that operates on them in an object that encapsuation for example. 
const Abdullah ={
    fname: "Abdullah ",
    lname: "Muhd",                                                                                     
    fullname: () =>{
          fname + lname;                          
    } 
}      
console.log(Abdullah);  
