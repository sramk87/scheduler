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
    $("#10am .description").val(localStorage.getItem("10am"))
    $("#11am .description").val(localStorage.getItem("11am"))
    $("#12pm .description").val(localStorage.getItem("12am"))
    $("#1pm .description").val(localStorage.getItem("1pm"))
    $("#2pm .description").val(localStorage.getItem("2pm"))
    $("3pm .description").val(localStorage.getItem("3pm"))
    $("#4pm .description").val(localStorage.getItem("4pm"))
    $("#5pm .description").val(localStorage.getItem("5pm"))
})