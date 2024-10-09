function taskCalendar() {
    let day = prompt("Enter a day of the week:").toLowerCase();

    switch (day) {
        case "monday":
            alert("Task for Monday: Go to billard.");
            break;
        case "tuesday":
            alert("Task for Tuesday: Rest day.");
            break;
        case "wednesday":
            alert("Task for Wednesday: Playing games.");
            break;
        case "thursday":
            alert("Task for Thursday: Have fun with your friends.");
            break;
        case "friday":
            alert("Task for Friday:Go to tournament.");
            break;
        case "saturday":
            alert("Task for Saturday: Washing motorcylcle.");
            break;
        case "sunday":
            alert("Task for Sunday: Go back to your boarding house.");
            break;
        default:
            alert("Invalid day entered, please enter a valid day of the week.");
    }
}