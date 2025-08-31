// heart section

const hearts = document.getElementsByClassName("heart")

for (const heart of hearts) {
  heart.addEventListener('click', function (e) {
    e.preventDefault()

    const heartText = document.getElementById("heart-text")
    const number = parseInt(heartText.innerText)  // ✅ correct spelling

    const updateNumber = number + 1
    heartText.innerText = updateNumber

    return updateNumber
  })
}

// coin section



call-btn  
coin 
