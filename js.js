function saveOrder() {
    var container = document.getElementById("sortable");
    var divIds = Array.from(container.getElementsByTagName("div")).map(function (div) {
        return div.id;
    });
    localStorage.setItem("sortedDivIds", JSON.stringify(divIds));

}
// دالة لاسترجاع الترتيب المحفوظ
function restoreOrder() {
    var container = document.getElementById("sortable");
    var sortedDivIds = JSON.parse(localStorage.getItem("sortedDivIds"));
    if (sortedDivIds) {
        sortedDivIds.forEach(function (id) {
            var div = document.getElementById(id);
            container.appendChild(div);
        });
    }
}
