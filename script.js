$(document).ready(function(){
    checkTime();
    loadSavedTasks();
    function saveToLocal() {
        var textInput = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, textInput);
    }
    $(".saveBtn").on("click", saveToLocal)
    function checkTime() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss"));
        var timeMom = moment().hours();
    $(".time-block").each(function() {
        var hour = $(this).attr("id");
        var hourInt = parseInt(hour)
        var currentHour = moment().hours()
        if(currentHour > hourInt) {
    $(this).children(".description").addClass("past")
    }
        else if (currentHour < hourInt) {
    $(this).children(".description").addClass("future")
    $(this).children(".description").removeClass("past")
    }
        else {
    $(this).children(".description").removeClass("past")
    $(this).children(".description").removeClass("future")
    $(this).children(".description").addClass("present")
    }
    })
}
function loadSavedTasks() {
    $(".time-block").each(function() {
        var hour = $(this).attr("id");
        $(this).children(".description").val(localStorage.getItem(hour));

    })
}
})
