const bob = document.querySelector(".face");
let count = 0;

function moveBob() {
  // count += 50;
  bob.style.right = "50px";
  console.log("hi");
}

bob.addEventListener("click", moveBob);
