(function () {
    const grid = document.getElementById("grid");
    if (events_data.length > 0 && !!grid) {
        events_data.forEach(function (event, index) {
            console.log("jere");
            var child_ele = document.createElement("div");
            var iframe_ele = document.createElement("iframe");
            iframe_ele.setAttribute("src", event.href);
            iframe_ele.addEventListener("click", function() {
                date_clicked(event.start);
            });
            iframe_ele.setAttribute("class", "iframe");
            child_ele.append(iframe_ele);
            grid.append(child_ele);
        });
    }
})();