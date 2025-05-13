function averageGrade() {
    // Get values from inputs
    var Eng = document.getElementById("engGrade").value * 1;
    var Fil = document.getElementById("filGrade").value * 1;
    var SS = document.getElementById("ssGrade").value * 1;

    // Calculate average
    var average = (Eng + Fil + SS) / 3;

    // Round off the average
    var roundedAverage = Math.round(average);

    // Format the rounded average to 2 decimal places
    var averageFinal = roundedAverage.toFixed(2);

    // Show result of the Average
    if (roundedAverage >= 94 && roundedAverage <= 100) {
        window.alert("Your average is " + averageFinal + " - EXCELLENT!");
    }
    else if (roundedAverage >= 87 && roundedAverage < 94) {
        window.alert("Your average is " + averageFinal + " - ABOVE SATISFACTORY!");
    }
    else if (roundedAverage >= 80 && roundedAverage < 87) {
        window.alert("Your average is " + averageFinal + " - Satisfactory");
    }
    else if (roundedAverage >= 75 && roundedAverage < 80) {
        window.alert("Your average is " + averageFinal + " - needs improvement");
    }
    else if (roundedAverage >= 70 && roundedAverage < 75) {
        window.alert("Your average is " + averageFinal + " - womp womp :(");
    }
    else {
        window.alert("Your average is " + averageFinal + " - womp womp :(");
    }
}
