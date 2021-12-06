
$(function () {
    // get current date and time from moment
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    // save button to set time and text to local storage
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr("id");
        console.log(timeBlock, text)
        localStorage.setItem(timeBlock, text);
    })

    // check local storage for data and load
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // button to clear storage refresh page
    $(".clearButton").on("click", function () {
            localStorage.clear();
            location.reload();
    });

    function hoursTracker() {
        //get current hour
        var hour = moment().hour();

        // loop through time blocks
        $(".time-block").each(function () {
            var block = parseInt($(this).attr("id").split("hour")[1]);
            console.log( block, hour)

            // remove all classes
            $(this).removeClass("past present future");

            // if statement add classes back based on time
            if (block < hour) {
                $(this).addClass("past");
            }
            else if (block === hour) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }
        })
    }
    hoursTracker();
})

