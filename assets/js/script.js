function timeTrack() {
    var now = moment().hour()
    
    $(".time-block").each(function () {
        var hour = parseInt($(this).attr("id").split("hour"));
    
        if (hour === now) {
            $(this).removeClass("past")
            $(this).removeClass("future")
            $(this).addClass("present")
        }
    
        else if (hour > now) {
            $(this).removeClass("present")
            $(this).removeClass("future")
            $(this).addClass("past")
        }
        
        else if (hour < now) {
            $(this).removeClass("future")
            $(this).removeClass("present")
            $(this).addClass("past")
        }
    return timeTrack();
    })}

$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do, YYYY"))
    $(".saveBtn").on("click", function () {
        var des = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, des);
    })

    $("#9am .description").val(localStorage.getItem("9am"))
    $("#10am .description").val(localStorage.getItem("9am"))
    $("#11am .description").val(localStorage.getItem("9am"))
    $("#12pm .description").val(localStorage.getItem("9am"))
    $("#1pm .description").val(localStorage.getItem("9am"))
    $("#2pm .description").val(localStorage.getItem("9am"))
    $("3pm .description").val(localStorage.getItem("9am"))
    $("#4pm .description").val(localStorage.getItem("9am"))
    $("#5pm .description").val(localStorage.getItem("9am"))
})