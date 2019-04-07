document.onload(function () {
    const current = document.getElementById("current-page");
    current.innerHTML = `{{ ${document.title} }}`;
});
