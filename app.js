var form = document.searchForm

form.addEventListener("submit", (e) => {
    e.preventDefault()
    var searchItem = form.search.value

    form.search.value = ""
})