 
 
 


let getstarted = document.getElementById("getstarted")
getstarted.addEventListener('click', ()=>{
   
    location.href =  'signup.html'
   
})

const LiveChat = document.querySelector('#LiveChat')
LiveChat.addEventListener("click" , async ()=>{
    console.log("msg Here");
    const { value: text } = await Swal.fire({
        input: "textarea",
        inputLabel: "Message",
        inputPlaceholder: "Type your message here...",
        inputAttributes: {
          "aria-label": "Type your message here"
        },
        showCancelButton: true
      });
      if (text) {
        Swal.fire(text);
      }
})




 