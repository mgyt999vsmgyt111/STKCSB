
function startServer() {
    let html = `<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span class="">Starting</span>`;
    let button = document.querySelector("#start-server");
    button.innerHTML = html;
}