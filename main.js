function submitClicked() {
    let vals = document.getElementsByTagName("input");
    for (let i = 0; i < vals.length; i++){
        if(vals[i].checked){
            let newText = "Selected Vis: " + vals[i].value;
            document.getElementById("selected-vis").innerHTML = newText;
        }

    }

}

document.getElementById("subButton")
.addEventListener('click', submitClicked);

(function() {
    console.log("my anonymous function")
})();

let note = "note";
(function(message) {
    console.log(message)
})(note);

() => {console.log("another anonymous function")}(note);

// dynamic styling
function submitClicked() {
    let maxPt = document.getElementById("max");
    maxPt.classList.add("orange");


}

document.getElementById("subButton2")
    .addEventListener("click", submitClicked);

