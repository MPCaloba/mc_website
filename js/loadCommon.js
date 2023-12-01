/* FUNCTION TO LOAD COMMON PAGE SECTIONS */

document.addEventListener("DOMContentLoaded", function() {
    function loadCommonHTML(url, targetId) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById(targetId).innerHTML = xhr.responseText;
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    }

    loadCommonHTML("header.html", "header");
    loadCommonHTML("footer.html", "footer");
});
