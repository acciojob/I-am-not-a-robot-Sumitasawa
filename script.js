//your code here
const container = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const message = document.getElementById("para");
let selected=[];
let duplicate = null;
const imageClasses = ["img1", "img2", "img3", "img4", "img5"];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function loadImages() {
  container.innerHTML = "";
  message.textContent = "";
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  selected = [];

duplicate = imageClasses[Math.floor(Math.random() * imageClasses.length)];
  let pool = [...imageClasses, duplicate];
  pool = shuffle(pool);
  pool.forEach(cls => {
    const img = document.createElement("img");
    img.classList.add(cls);
    img.addEventListener("click", () => handleClick(img, cls));
    container.appendChild(img);
  });
}
function handleClick(img, cls) {
  if (selected.length < 2 && !img.classList.contains("selected")) {
    img.classList.add("selected");
    selected.push({ element: img, cls: cls });
    resetBtn.style.display = "inline-block";
  }

  if (selected.length === 2) {
    verifyBtn.style.display = "inline-block";
  }
}
resetBtn.addEventListener("click", loadImages);
verifyBtn.addEventListener("click", () => {
  if (selected[0].cls === selected[1].cls) {
    message.textContent = "You are a human. Congratulations!";
  } else {
    message.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
  verifyBtn.style.display = "none";
});
loadImages();