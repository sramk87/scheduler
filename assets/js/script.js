var blockHr = new Date();
var hours = blockHr.getHours();

    if(".hour" > hours) {
        $(".row").addClass("past")
        $(".row").removeClass("present")
        $(".row").removeClass("future")
    }
    else if(".hour" < hours) {
        $(".row").addClass("future")
        $(".row").removeClass("present")
        $(".row").removeClass("past")
    }
    else {
        $(".row").addClass("present")
        $(".row").removeClass("past")
        $(".row").removeClass("future")
    } 

$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do, YYYY"))
    $(".saveBtn").on("click", function () {
        var des = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, des);
    })

    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))
})