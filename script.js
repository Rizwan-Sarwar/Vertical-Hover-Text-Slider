var items = ['BRAND IT', 'ELGANT', 'CREATIVE', 'YOUNG', 'SHARP', 'UNIQUE'];
var unorderList = document.getElementById("listWrap");
var List = new Array;

function rs_windowLoad() {
    for (let i = 0; i < items.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = items[i];
        List.push(li)
        unorderList.appendChild(li)
    }
    viewPort()
}

function viewPort() {
    observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add("animate");
                entry.target.classList.add("view-port");
            } else {
                entry.target.classList.remove("animate");
                if (entry.target.classList[0] == "view-port") {
                    entry.target.remove()
                }
            }
        });
    });
    List.forEach(child => {
        observer.observe(child);
    });
}

document.getElementById("listWrap").addEventListener("mouseover", function() {
    document.querySelector(".animate").style.animationName = "rs_animation";
    if (unorderList.children.length <= 1) {
        rs_windowLoad()
    }
})
document.getElementById("listWrap").addEventListener("mouseout", function() {
    document.querySelector(".animate").style.animationName = "rs_animation";
    if (unorderList.children.length <= 1) {
        rs_windowLoad()
    }
})