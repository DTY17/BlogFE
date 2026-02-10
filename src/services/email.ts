import emailjs from "emailjs-com";

export const sendEmail = (code: string) => {
  emailjs
    .send(
      " ", //service     
      " ", // template   
      { name: code, email : "dinanthemika.personal@gmail.com" },
      " "  // code    
    )
    .then(
      (result) => {
        console.log("Success:", result.text);
      },
      (error) => {
        console.log("Error:", error.text);
      }
    );
};
