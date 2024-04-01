const el = document.getElementById("home");
if (!!el) {
    el.addEventListener("click", function () {
        window.location.href = "../";
    })
}

var date_clicked = function (selected_date) {
    const clickedDate = new Date(selected_date);
    const isEventPresent = events_data.some(event => {
        const eventStartDate = new Date(event.start);
        const eventEndDate = new Date(event.end);
        return clickedDate >= eventStartDate && clickedDate <= eventEndDate;
    });
    const [year, month, date] = selected_date.split("-");
    if (isEventPresent) {
        window.location.href = "/css-battle-challange/" + date + month + year + "/"
    }
}