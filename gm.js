let today = new Date()
let currentHour = today.getHours()

if (currentHour < 12) {
    console.log("good morning");
} else if (currentHour < 18) {
    console.log("good afternoon");
} else {
    console.log("good evening");
}
