
let formDataArray = [];

let medicalRisk = `Gender,Blood Group Type,Medical Condition,Count
Female,A+,Asthma,117
Female,A-,Cancer,117
Female,AB+,Obesity,114
Female,AB-,Hypertension,120
Female,B+,Cancer,115
Female,B-,Diabetes,128
Female,O+,Cancer,131
Female,O-,Diabetes,102
Male,A+,Hypertension,109
Male,A-,Hypertension,113
Male,AB+,Arthritis,114
Male,AB-,Obesity,117
Male,B+,Asthma,109
Male,B-,Cancer,114
Male,O+,Arthritis,114
Male,O-,Hypertension,116`;

console.log(medicalRisk.split('\n'));
var arrObj = [];
var lines = medicalRisk.split('\n');
var headers = lines[0].split(',')

function submitForm() {
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let bloodGroup = document.getElementById("bloodGroup").value;

    for(let i = 1; i < lines.length; i++) {
        let data = lines[i].split(',');
        if (gender === data[0] && bloodGroup === data[1]) {
            console.log("Medical Condition: ",data[2]);
            var medicalRisk = data[2]; // This will log the medical condition
        }
    }
    document.getElementById("result").textContent = medicalRisk;
    console.log(medicalRisk);
     


    let formData = {
        "name": name,
        "gender": gender,
        "bloodGroup": bloodGroup
    };

    formDataArray.push(formData); // Assuming formDataArray is declared elsewhere
    console.log(formDataArray);

    // Define headers
    let headers = ["Name", "Gender", "Blood Group"];

    
    // Convert formDataArray to a CSV-formatted string with headers
    let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n";

    formDataArray.forEach((dataObject) => {
        csvContent += Object.values(dataObject).join(",") + "\n";
    });
    console.log(csvContent);

    // Create a hidden link element to trigger the download
    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "userdata.csv");
    document.body.appendChild(link);

    // Trigger the download
    link.click();
}


