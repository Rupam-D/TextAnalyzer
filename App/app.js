const textarea = document.getElementById("textarea");
const UpperCase = document.getElementById("UpperCase");
const LowerCase = document.getElementById("LowerCase");
const removeextraspace = document.getElementById("removeextraspace");
const removeextraline = document.getElementById("removeextraline");
const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const body = document.getElementsByClassName("container")[0];

//
UpperCase.addEventListener("click", () => {
  textarea.value = textarea.value.toUpperCase();
});
LowerCase.addEventListener("click", () => {
  textarea.value = textarea.value.toLowerCase();
});

// Read :https://stackoverflow.com/questions/16974664/how-to-remove-the-extra-spaces-in-a-string

removeextraspace.addEventListener("click", () => {
  textarea.value = textarea.value.replace(/\s+/g, " ").trim();
});
removeextraline.addEventListener("click", () => {
  textarea.value = textarea.value.replace(/\n+/g, "\n");
});

bold.addEventListener("click", () => {
  textarea.style.fontWeight = "bold";
});
italic.addEventListener("click", () => {
  textarea.style.fontStyle = "italic";
});
// let charCount = 15;
// let wordCount = 10;
word.innerText = 0;
textarea.addEventListener("input", () => {
  char.innerText = textarea.value.length;
  word.innerText = textarea.value.trim().split(" ").length;
  // console.log(typeof (charCount), typeof (wordCount))
  // let a = charCount
  // let b = wordCount
});

// console.log(charCount)

// console.log(word)
// let a = charCount
// let b = wordCount
// // console.log(a, b)
// const info = document.createElement("div");
// info.className = "info";
// info.innerHTML = `
// <p>
//    <b>${this.charCount}</b> Words & <b>${this.wordCount}</b> Charecters
// </p>`;
// body.appendChild(info);

