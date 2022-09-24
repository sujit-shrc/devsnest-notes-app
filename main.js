// const stickyNav = document.querySelector(".sticky-box-nav");

document.addEventListener("click", (e) => {
  let navEle = e.target.closest(".sticky-box-nav-item");
  navEle.classList.toggle("click-show");
});

// =========== create new note ===================

const newNote = document.querySelector(".create-note");
const container = document.querySelector(".container");
console.log(newNote);
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
                <textarea name="text-area" id="" cols="30" required rows="18"></textarea>
            </div>
        </div>
    `;
  container.insertAdjacentHTML("beforeend", createNewNote);
});
