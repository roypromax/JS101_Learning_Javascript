let stored_uname = "abcd@gmail.com";
let stored_pass = "abc456";

let uname = "abcd@gmail.com";
let pass = "abc456";

if(uname == stored_uname){
  if(pass == stored_pass){
    console.log("Welcome");
  }else{
    console.log("Wrong Password");
  }
}else{
  console.log("Wrong Details");
}