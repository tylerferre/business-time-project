var form = document.searchForm

form.addEventListener("submit", (e) => {
    e.preventDefault()
    var searchItem = form.search.value

    form.search.value = ""
})

//color picker for fun

// var enter = document.getElementById("enter")
// .addEventListener("click", function(){
//     var colorPicked = document.getElementById("colorPic").value;
//     var bodyInput = document.body
//     var changedColor = bodyInput.style.backgroundColor = colorPicked
// }
// )