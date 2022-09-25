// ============================= copy text functionality ===================================
document.addEventListener("click", (e) => {
  let navEle = e.target.closest(".sticky-box-nav-item");
  if (navEle) {
    navEle.classList.toggle("click-show");
    if (navEle.classList.contains("copy")) {
      const textContent =
        navEle.parentElement.parentElement.lastElementChild.firstElementChild;
      console.log(textContent);
      textContent.select();
      textContent.setSelectionRange(0, 99);
      document.execCommand("copy");
    }
  }
});

// ==============================color changing functionality ==================================
document.addEventListener("input", (e) => {
  const navEle = e.target.closest(".color");
  if (navEle) {
    console.log(navEle);
    const colorValue = navEle.firstElementChild.value;
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
                <li class="sticky-box-nav-item bold">B</li>
                <li class="sticky-box-nav-item color">U</li>
                <li class="sticky-box-nav-item copy"><img src="images/copy-img.png" alt=""></li>
                <div class="color">
                    <input class="color-picker" type="color" value="#ffff00" id='picker'>
                </div>
            </ul>
            <div class="title">
                <input class="title-input" placeholder="Title" required type="text" id="title">
            </div>
            <div class=" text-area">
                <textarea name="text-area" id="" cols="30" required rows="15"></textarea>
            </div>
        </div>
    `;
  container.insertAdjacentHTML("beforeend", createNewNote);
});
