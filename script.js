document.getElementById("eligibility-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Input values
  const sscGPA = parseFloat(document.getElementById("sscGPA").value);
  const hscGPA = parseFloat(document.getElementById("hscGPA").value);
  const hscMarks = parseInt(document.getElementById("hscMarks").value);
  const hscSubjectsGPA = parseFloat(document.getElementById("hscSubjectsGPA").value);
  const hscYear = parseInt(document.getElementById("hscYear").value);

  let result = "Thanks for checking!\n Your given Results satisfies with those universities accroding to universities cirulars of 2024-2025 :\n";

  // BUET eligibility
  if (
    sscGPA >= 4 && 
    hscGPA === 5 &&
    hscMarks >= 500 &&
    hscYear === 2024 
  ) {
    result += "✔ Eligible for BUET\n";
  } else {
    result += "✘ Not Eligible for BUET\n";
  }

  // KUET, CUET, RUET eligibility
  if (
    hscSubjectsGPA >= 18 &&
    hscYear ===2024 
  ) {
    result += "✔ Eligible for KUET\n ✔ Eligible for CUET\n✔ Eligible for RUET\n";
  } else {
    result += "✘ Not Eligible for KUET\n ✘ Not Eligible for CUET\n ✘ Not Eligible for RUET\n";
  }

  // DU & RU eligibility
  if (
    sscGPA >= 3.5 &&
    hscGPA >= 3.5 &&
    sscGPA + hscGPA >= 8 &&
    hscYear ===2024
  ) {
    result += "✔ Eligible for Dhaka University\n✔ Eligible for Rajshahi University\n";
  } else {
    result += "✘ Not Eligible for Dhaka University\n✘ Not Eligible Rajshahi University\n";
  }
  
    // CU & JU eligibility
  if (
    sscGPA >= 3.5 &&
    hscGPA >= 3.5 &&
    sscGPA + hscGPA >= 8 &&
    hscYear >= 2023
  ) {
    result += "✔ Eligible for Chattogram University\n✔ Eligible for Jahangirnagar University\n";
  } else {
    result += "✘ Not Eligible for Chattogram University\n✘ Not Eligible for Jahangirnagar University\n";
  }
  
      // Shahjalal University Science & Technology eligibility
  if (
    sscGPA >= 3 &&
    hscGPA >= 3 &&
    sscGPA + hscGPA >= 7 &&
    hscYear ===2024
  ) {
    result += "✔ Eligible for Shahjalal University Science & Technology\n";
  } else {
    result += "✘ Not Eligible for Shahjalal University Science & Technology\n";
  }

  // Display result
  document.getElementById("result").innerText = result;
});