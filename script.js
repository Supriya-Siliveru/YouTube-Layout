
document.getElementById('searchButton').addEventListener('click', function () {
    var searchValue = document.getElementById('searchInput').value;
    alert('Searching for: ' + searchValue);
});
function resetSearchbar() {
    document.getElementById("searchInput").value = ""
}
