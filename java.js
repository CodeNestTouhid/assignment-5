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

// for card 1

document.getElementById('call-btn-1').addEventListener('click', function (e) {
  e.preventDefault()
  const coinText = document.getElementById('coin-text')
  const number = parseInt(coinText.innerText)
    if (number < 20) {
      alert("Insufficient balance!");
      return;
  }
    else {
      alert("Calling National Emergency Number (999)")
      addCallHistory("National Emergency Number", "999");
  }
    const updateNumber = number - 20
    coinText.innerText = updateNumber;
    return updateNumber;
})


// for card 2

document.getElementById('call-btn-2').addEventListener('click', function (e) {
  e.preventDefault()
  const coinText = document.getElementById('coin-text')
  const number = parseInt(coinText.innerText)
    if (number < 20) {
      alert("Insufficient balance!");
      return;
  }
    else {
      alert("Calling Police Helpline Number (999)")
      addCallHistory("Police Helpline Number", "999");
  }
    const updateNumber = number - 20
    coinText.innerText = updateNumber;
    return updateNumber;
})

// for card-3

document.getElementById('call-btn-3').addEventListener('click', function (e) {
  e.preventDefault()
  const coinText = document.getElementById('coin-text')
  const number = parseInt(coinText.innerText)
    if (number < 20) {
      alert("Insufficient balance!");
      return;
  }
    else {
      alert("Calling Fire Service Number (999)")
      addCallHistory("Fire Service Number", "999");
  }
    const updateNumber = number - 20
    coinText.innerText = updateNumber;
    return updateNumber;
})

// for card 4


document.getElementById('call-btn-4').addEventListener('click', function (e) {
  e.preventDefault()
  const coinText = document.getElementById('coin-text')
  const number = parseInt(coinText.innerText)
    if (number < 20) {
      alert("Insufficient balance!");
      return;
  }
    else {
      alert("Calling Ambulance Service (1994-999999)")
      addCallHistory("Ambulance Service", "1994-999999");
  }
    const updateNumber = number - 20
    coinText.innerText = updateNumber;
    return updateNumber;
})

// for card 5
document.getElementById('call-btn-5').addEventListener('click', function (e) {
  e.preventDefault()
  const coinText = document.getElementById('coin-text')
  const number = parseInt(coinText.innerText)
    if (number < 20) {
      alert("Insufficient balance!");
      return;
  }
    else {
      alert("Calling Women & Child Helpline (109)")
      addCallHistory("Women & Child Helpline", "109");
  }
    const updateNumber = number - 20
    coinText.innerText = updateNumber;
    return updateNumber;
})

// for card 6
document.getElementById('call-btn-6').addEventListener('click', function (e) {
  e.preventDefault()
  const coinText = document.getElementById('coin-text')
  const number = parseInt(coinText.innerText)
    if (number < 20) {
      alert("Insufficient balance!");
      return;
  }
    else {
      alert("Calling Anti-Corruption Helpline (106)")
      addCallHistory("Anti-Corruption Helpline", "106");
  }
    const updateNumber = number - 20
    coinText.innerText = updateNumber;
    return updateNumber;
})



// for card 7
document.getElementById('call-btn-7').addEventListener('click', function (e) {
  e.preventDefault()
  const coinText = document.getElementById('coin-text')
  const number = parseInt(coinText.innerText)
    if (number < 20) {
      alert("Insufficient balance!");
      return;
  }
    else {
      alert("Calling Electricity Helpline (16216)")
      addCallHistory("Electricity Helpline", "16216");

  }
    const updateNumber = number - 20
    coinText.innerText = updateNumber;
    return updateNumber;
})


// for card 8
document.getElementById('call-btn-8').addEventListener('click', function (e) {
  e.preventDefault()
  const coinText = document.getElementById('coin-text')
  const number = parseInt(coinText.innerText)
    if (number < 20) {
      alert("Insufficient balance!");
      return;
  }
    else {
      alert("Calling Brac Helpline (16445)")
      addCallHistory("Brac Helpline", "16445");

  }
    const updateNumber = number - 20
    coinText.innerText = updateNumber;
    return updateNumber;
})


// for card 9
document.getElementById('call-btn-9').addEventListener('click', function (e) {
  e.preventDefault()
  const coinText = document.getElementById('coin-text')
  const number = parseInt(coinText.innerText)
    if (number < 20) {
      alert("Insufficient balance!");
      return;
  }
    else {
      alert("Calling Bangladesh Railway Helpline (163)")
      addCallHistory("Bangladesh Railway Helpline", "163");

  }
    const updateNumber = number - 20
    coinText.innerText = updateNumber;
    return updateNumber;
})


// copy button....
 
 const totalButtons = 9;


let copyCount = parseInt(document.getElementById("copy-count")?.innerText) || 0;

for (let i = 1; i <= totalButtons; i++) {
  const btn = document.getElementById(`copy-btn-${i}`);
  const text = document.getElementById(`copy-text-${i}`);

  if (btn && text) {
    btn.addEventListener("click", function () {
      const numberToCopy = text.innerText;

      navigator.clipboard.writeText(numberToCopy)
        .then(() => {
          // কপি কাউন্ট বাড়ানো
          copyCount++;
          const countElement = document.getElementById("copy-count");
          if (countElement) {
            countElement.innerText = copyCount;
          }

          alert(`"${numberToCopy}" has been copied .`);
        })
        .catch((err) => {
          alert("Failed to copy.");
          console.error(err);
        });
    });
  }
}






function addCallHistory(serviceName, number) {
  const historyContainer = document.getElementById("call-history");
  if (!historyContainer) return;

  const now = new Date();
  const time = now.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });

  const newEntry = document.createElement("div");
  newEntry.className = "bg-[#f8f8f8] rounded-xl p-3 flex justify-between items-center";

  newEntry.innerHTML = `
    <div class="flex flex-col">
      <span class="font-bold text-[16px] text-[#000000]">${serviceName}</span>
      <span class="text-[14px] text-[#5C5C5C] mt-0.5">${number}</span>
    </div>
    <span class="text-[12px] text-[#5C5C5C]">${time}</span>
  `;

  historyContainer.prepend(newEntry);
}





// clear history

document.getElementById("clear-history")?.addEventListener("click", function () {
  const historyContainer = document.getElementById("call-history");
  if (historyContainer) {
    historyContainer.innerHTML = '';
  }
});
