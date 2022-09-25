// ============================= copy text functionality ===================================
// document.addEventListener("click", (e) => {
//   let navEle = e.target.closest(".sticky-box-nav-item");
//   if (navEle) {
//     navEle.classList.toggle("click-show");
//     if (navEle.classList.contains("copy")) {
//       const textContent = navEle.parentElement.parentElement.lastElementChild.firstElementChild;
//       console.log(textContent);
//       console.log(textContent.textContent);
//       // textContent.setSelectionRange(0, 99);
//       // document.execCommand("copy");
//     }
//   }
// });

// ==============================color changing functionality ==================================
document.addEventListener("input", (e) => {
  const navEle = e.target.closest(".color");
  if (navEle) {
    const colorValue = navEle.value;
    navEle.parentElement.parentElement.lastElementChild.firstElementChild.style.background =
      colorValue;
    navEle.parentElement.nextElementSibling.firstElementChild.style.background =
      colorValue;
  }
});

// =========== create new note functionality===================

const newNote = document.querySelector(".create-note");
const container = document.querySelector(".container");
newNote.addEventListener("click", (e) => {
  const createNewNote = `
  <div class="sticky-box">

  <ul class="sticky-box-nav">
      <button onclick = "bold()" class="sticky-box-nav-item bold">B</button>
      <button onclick = "underline()" class="sticky-box-nav-item underline">U</button>
      <li class="sticky-box-nav-item copy "><img src="images/copy-img.png" alt=""></li>
      <input class="sticky-box-nav-item color" id="picker" type="color" name="color1"
          value="#ffff00" />
  </ul>

  <div class="title">
      <input id="title" class="title-input" placeholder="Title" required type="text" id="title">
  </div>

  <div class=" text-area">
      <!-- <textarea name="text-area" id="text" cols="30" required rows="18"></textarea> -->
      <div id="getText" contenteditable="true" class="editable">
          
      </div>
  </div>
</div>
    `;
  container.insertAdjacentHTML("beforeend", createNewNote);
});

// ============================ Bold and Underline functionality ======================

function bold() {
  {
    var selection = window.getSelection().getRangeAt(0);
    if (window.getSelection().baseNode.parentNode.id != "getText") return;
    var selectedText = selection.extractContents();
    var span = document.createElement("span");
    span.classList.toggle("bold");
    span.appendChild(selectedText);
    selection.insertNode(span);
  }
}

function underline() {
  {
    var selection = window.getSelection().getRangeAt(0);
    if (window.getSelection().baseNode.parentNode.id != "getText") return;
    var selectedText = selection.extractContents();
    var span = document.createElement("span");
    span.classList.toggle("underline");
    span.appendChild(selectedText);
    selection.insertNode(span);
  }
}
