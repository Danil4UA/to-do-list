const container = document.getElementById("container")
const clear = document.getElementById("clear-all")
const input = document.getElementById("input")

document.getElementById("button").addEventListener("click", (event) => {
    event.preventDefault();
    const data = input.value.trim();
    if(data === ""){
        alert("please enter data first")
        return
    }
    const newElement = document.createElement("p");
    newElement.textContent = data;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", () => {
        newElement.remove();
    });

    newElement.appendChild(deleteButton);
    container.appendChild(newElement);

    input.value = ""
});


clear.addEventListener("click", ()=>{
    const confirmation = confirm("Are you sure you want to delete all the data from the list ?")
    if(!confirmation){
        return
    }
    const allParagraphs = document.querySelectorAll("p")
    allParagraphs.forEach((element)=>{
        element.remove()
    })
})