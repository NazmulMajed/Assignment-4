// Problem 1: customMap function
function customMap(array, callback) {
    return array.map(callback);
}

function handleCustomMap() {
    const array = JSON.parse(document.getElementById("mapArray").value);
    const callback = (num) => num * 2; // Modify as needed
    const result = customMap(array, callback);
    document.getElementById("mapResult").textContent = JSON.stringify(result);
}

// Problem 2: findDuplicates function
function findDuplicates(array) {
    const duplicates = array.filter((item, index) => array.indexOf(item) !== index);
    return [...new Set(duplicates)];
}

function handleFindDuplicates() {
    const array = JSON.parse(document.getElementById("duplicatesArray").value);
    const result = findDuplicates(array);
    document.getElementById("duplicatesResult").textContent = JSON.stringify(result);
}

// Problem 3: queryStringToObject function
function queryStringToObject(query) {
    return query.slice(1).split('&').reduce((acc, part) => {
        const [key, value] = part.split('=');
        acc[decodeURIComponent(key)] = decodeURIComponent(value);
        return acc;
    }, {});
}

function handleQueryStringToObject() {
    const query = document.getElementById("queryString").value;
    const result = queryStringToObject(query);
    document.getElementById("queryStringResult").textContent = JSON.stringify(result);
}

// Problem 4: reverseWords function
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

function handleReverseWords() {
    const str = document.getElementById("reverseWordsInput").value;
    const result = reverseWords(str);
    document.getElementById("reverseWordsResult").textContent = result;
}

// Problem 5: findMissingNumber function
function findMissingNumber(array) {
    const n = array.length;
    const total = (n * (n + 1)) / 2;
    const sum = array.reduce((a, b) => a + b, 0);
    return total - sum;
}

function handleFindMissingNumber() {
    const array = JSON.parse(document.getElementById("missingNumberArray").value);
    const result = findMissingNumber(array);
    document.getElementById("missingNumberResult").textContent = result;
}

// Problem 6: validateForm function
function validateForm({ email, password }) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return emailRegex.test(email) && passwordRegex.test(password);
}

function handleValidateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const result = validateForm({ email, password });
    document.getElementById("validateFormResult").textContent = result ? "Valid form" : "Invalid form";
}

// Problem 7: generateGreeting function
function generateGreeting(name, timeOfDay, language) {
    const greetings = {
        English: { morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening" },
        Spanish: { morning: "¡Buenos días", afternoon: "¡Buenas tardes", evening: "¡Buenas noches" }
    };
    return `${greetings[language][timeOfDay]}, ${name}!`;
}

function handleGenerateGreeting() {
    const name = document.getElementById("name").value;
    const timeOfDay = document.getElementById("timeOfDay").value;
    const language = document.getElementById("language").value;
    const result = generateGreeting(name, timeOfDay, language);
    document.getElementById("greetingResult").textContent = result;
}

// Problem 8: formatFullName function
function formatFullName({ firstName, lastName, middleName = "", title = "" }) {
    return `${title ? title + " " : ""}${firstName}${middleName ? " " + middleName : ""} ${lastName}`;
}

function handleFormatFullName() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const middleName = document.getElementById("middleName").value;
    const title = document.getElementById("title").value;
    const result = formatFullName({ firstName, lastName, middleName, title });
    document.getElementById("fullNameResult").textContent = result;
}

// Problem 9: mergeAndSortArrays function
function mergeAndSortArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

function handleMergeAndSortArrays() {
    const arr1 = JSON.parse(document.getElementById("array1").value);
    const arr2 = JSON.parse(document.getElementById("array2").value);
    const result = mergeAndSortArrays(arr1, arr2);
    document.getElementById("mergeSortResult").textContent = JSON.stringify(result);
}

// Problem 10: deepMerge function
function deepMerge(obj1, obj2) {
    const result = { ...obj1 };
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                result[key] = deepMerge(obj1[key], obj2[key]);
            } else if (obj1.hasOwnProperty(key)) {
                result[key] = Array.isArray(result[key]) ? [...result[key], obj2[key]] : [result[key], obj2[key]];
            } else {
                result[key] = obj2[key];
            }
        }
    }
    return result;
}

function handleDeepMerge() {
    const obj1 = JSON.parse(document.getElementById("object1").value);
    const obj2 = JSON.parse(document.getElementById("object2").value);
    const result = deepMerge(obj1, obj2);
    document.getElementById("deepMergeResult").textContent = JSON.stringify(result, null, 2);
}
