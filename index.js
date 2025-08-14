const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pwGenBtn = document.getElementById("pw-generate-btn")
const leftPw = document.getElementById("left-pw")
let pwOne = ""

  pwGenBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let input = document.getElementById("password-length-input")
    let passwordLength = Number(input.value)
    
        if (passwordLength < 6 || passwordLength > 20 || !passwordLength) {
                alert("Please enter a number for password length. Minimum length: 6, Maximum length: 20.")
                return
            }
            else {
                pwOne = ""
                for (let i=0; i < passwordLength; i++) {
                        let randomNrOne = Math.floor( Math.random() * characters.length)
                        pwOne += characters[randomNrOne]
                        console.log(pwOne)
                        }}
            leftPw.textContent = pwOne
   })
   
function toggle() {
    let body = document.body
    body.classList.toggle("dark")
   }
 
let copyText = document.getElementById('copy-text');
let copyBtn = document.getElementById('copy-btn')
  
const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(pwOne);
      console.log('Content copied to clipboard');
      copyBtn.innerText = "Copied!"
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
   
   
