var date_clicked = function (selected_date) {
    const clickedDate = new Date(selected_date);
    const isEventPresent = events_data.daily_challenge.some(event => {
        const eventStartDate = new Date(event.start);
        const eventEndDate = new Date(event.end);
        return clickedDate >= eventStartDate && clickedDate <= eventEndDate;
    });
    if (isEventPresent) {
        window.location.href = "/css-battle-challenge/" + date + month + year + "/"
    }
};
var battle_clicked = function (id) {
    const isEventPresent = events_data.battles.some(event => {
        return event.id === id;
    });
    if (isEventPresent) {
        window.location.href = "/css-battle-challenge/battles/" + id + "/"
    }
};
(function () {
    const el = document.getElementById("home");
    const grid = document.getElementById("grid");
    if (!!el) {
        el.addEventListener("click", function () {
            window.location.href = "../";
        })
    }
})();