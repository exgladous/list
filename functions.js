var button = document.getElementById("submit");
button.addEventListener("click", () => {
    appendlist();
});

var list = document.getElementsByTagName("ul")[0];

function appendlist() {
    var input = document.getElementById("input").value,
        li = document.createElement("li"),
        content = document.createElement("span"),
        deletebutton = document.createElement("button");

    document.getElementById("input").value = ""

    deletebutton.textContent = "Delete";
    deletebutton.className = "delete"

    deletebutton.addEventListener("click", () => {
        var target = deletebutton.parentElement;
        target.remove();
    });

    content.textContent = input + " ";

    li.appendChild(content);
    li.appendChild(deletebutton);

    list.appendChild(li);

}
