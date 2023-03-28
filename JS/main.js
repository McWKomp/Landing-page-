let planButton = document.querySelectorAll(".col-rectangle .container .button");
let colRect = document.querySelectorAll(".col-rectangle");

planButton.forEach(button => {
    button.addEventListener("mousedown", () => {
        button.parentElement.parentElement.style.boxShadow = "inset rgb(78, 78, 255, 1) 0px 0px 0px 3px";
    });
    button.addEventListener("mouseup", () => {
        button.parentElement.parentElement.style.boxShadow = "inset rgb(158, 158, 158, 0.4) 0px 0px 0px 3px";
    });
});

let listItem = document.querySelectorAll(".col-rectangle .list .list-item");

listItem.forEach(item => {
    let span = document.createElement("span");
    span.classList.add("material-symbols-outlined")
    span.innerHTML = "done"
    item.prepend(span);
});

const carouselContainer = document.querySelectorAll(".carousel .main .container");

carouselContainer.forEach(container => {
    let output = `<div class="group">
                    <div class="profile"><img src="https://pbs.twimg.com/media/FNF7gFxXMAMy9PD.jpg" alt="pfp" class="pfp">
                        <span>
                            <p>Jay Jay</p>
                            <p>Moscow, Ukraine</p>
                            <span>
                                <img alt="star" src="SVG/star.svg">
                                <p>4.5</p>
                            </span>
                        </span>
                    </div>
                </div>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad  minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>`
    container.innerHTML = output;
});