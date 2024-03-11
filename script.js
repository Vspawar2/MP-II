function calculateAge() {
    // Get the input value
    var dobInput = document.getElementById("dob").value;

    // Parse the input value to obtain the birthdate
    var dob = new Date(dobInput);

    // Get the current date
    var currentDate = new Date();

    // Calculate the age
    var age = currentDate.getFullYear() - dob.getFullYear();

    // Adjust age based on the birthdate in the current year
    if (currentDate.getMonth() < dob.getMonth() || (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById("result").innerText = "Your age is " + age + " years old.";

}