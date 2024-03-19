let input = document.querySelector("#in")
let button = document.querySelectorAll(".bu")
let ac = document.querySelector("#is")
button.forEach((but) => {
    but.addEventListener("click", () => {
        const entNum = but.getAttribute("Id")
        if (entNum === "ent") {
            try {
                let result = eval(input.textContent);
                if (isNaN(result) || result === Infinity || result === -Infinity) {
                    input.textContent = "Invalid input";
                } else {
                    input.textContent = result.toFixed(1);
                }
            } catch (error) {
                input.textContent = "Invalid input";
            }
        } else if (entNum === "is") {
            input.textContent = ""
        } else if (entNum == "c") {
            input.textContent = input.textContent.slice(0, -1);
        }
        else {
            input.textContent += entNum
        }
    })
});
