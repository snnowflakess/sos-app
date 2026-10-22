const menuButton = document.getElementById("menuButton")
const fanMenu = document.querySelector(".fan-container")

menuButton.addEventListener("click", () => {
fanMenu.classList.toggle("active")
})

/* SOS HOLD SYSTEM */

const sosButton = document.getElementById("sosButton")
const sosStage = document.getElementById("sosStage")

let holdTimer = null

function startHoldSOS(){
  if(holdTimer) return

  const holdSeconds = 3

  sosStage.classList.add("show")

  holdTimer = setTimeout(()=>{
    holdTimer = null
    startSOSFlow()
  }, holdSeconds * 1000)
}

function cancelHoldSOS(){
  if(holdTimer){
    clearTimeout(holdTimer)
    holdTimer = null
    sosStage.classList.remove("show")
  }
}

sosButton.addEventListener("mousedown", startHoldSOS)
sosButton.addEventListener("mouseup", cancelHoldSOS)
sosButton.addEventListener("mouseleave", cancelHoldSOS)

sosButton.addEventListener("touchstart", startHoldSOS)
sosButton.addEventListener("touchend", cancelHoldSOS)
sosButton.addEventListener("touchcancel", cancelHoldSOS)