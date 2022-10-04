const spaceButton = document.getElementById("space");
const display = document.getElementsByClassName("showCase");

function disp(result) {
    form.textarea.value = form.textarea.value + result;
    spaceButton.onclick = (() => {
        form.textarea.value += " ";
    });
     display.ondblclick = (() => {
        form.textarea.value = "";
     });
}