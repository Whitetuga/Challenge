function getRandomEmail(domain,length)
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < length; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text +"Cocus"+ domain;
}

function getTitle()
{
    var titles = ['Mr', 'Miss', 'Mrs', 'Miss'];
    // Randomly choose a title
    const title = titles[Math.floor(Math.random() * titles.length)];

    return title;
}

function getName()
{
    var firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Chris', 'Anna', 'James', 'Sophia'];
    // Randomly choose a First Name
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];

    return firstName;
}

function getLastName()
{
    var lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];
    // Randomly choose a Last Name
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return lastName;
}

function generateUKPhoneNumber()
{
    var possiblePhoneNumbers = ['07874049702'];
    // Randomly choose a Last Name
    const phoneNumber = possiblePhoneNumbers[Math.floor(Math.random() * possiblePhoneNumbers.length)];

    return phoneNumber;
}

function generateBirthdate(startYear, endYear) {
    // Randomly choose a year between startYear and endYear
    const year = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    
    // Randomly choose a month (0-11, where 0 is January and 11 is December)
    const month = Math.floor(Math.random() * 12);
    
    // Randomly choose a day based on the selected month and year
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month
    const day = Math.floor(Math.random() * daysInMonth) + 1; // Random day in the month
    
    // Return as separate components: day, month, and year
    return {
        day: day.toString(),
        month: (month + 1).toString(), // Months are 0-indexed in JavaScript, so add 1 for correct month
        year: year.toString()
    };
}

function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';
    let password = '';
    
    // Loop to generate random characters for the password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

function getUserData() {
    return { email: "test@gmail.com", password: "Test123456"};
}


// Export the function so it can be used in another file
export { getRandomEmail, getName, getLastName, generateBirthdate, getTitle, generatePassword, generateUKPhoneNumber, getUserData };