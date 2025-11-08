function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var intent = data.queryResult.intent.displayName;
    var queryText = data.queryResult.queryText
      ? data.queryResult.queryText.toLowerCase()
      : "";
    var response = "";

    switch (intent) {
      case "UniBuddy-Admissions-Intent":
        if (queryText.indexOf("transfer") !== -1) {
          response =
            "For transfer admissions, please contact admissions@aau.edu or call 555-123-4567.";
        } else if (queryText.indexOf("document") !== -1) {
          response =
            "Required documents include transcripts, ID, and test scores. Submit them online or to the Admissions Office.";
        } else if (queryText.indexOf("deadline") !== -1) {
          response =
            "Application deadlines are announced each semester on our portal. Please check regularly for updates.";
        } else {
          response =
            "You can apply for admission on our official university portal. See the Admissions section for details.";
        }
        break;

      case "UniBuddy-Exams-Grades-Intent":
        if (queryText.indexOf("transcript") !== -1) {
          response =
            "Transcripts can be requested from the Registrar’s section of your student portal.";
        } else if (queryText.indexOf("schedule") !== -1) {
          response =
            "Your exam schedule is available in the Exams section of your student portal.";
        } else if (queryText.indexOf("regrade") !== -1) {
          response =
            "For regrade requests, consult your department's website or registrar.";
        } else if (queryText.indexOf("past paper") !== -1) {
          response =
            "Past exam papers can be found via your department's resources page.";
        } else if (
          queryText.indexOf("grade") !== -1 ||
          queryText.indexOf("result") !== -1
        ) {
          response =
            "You can check your grades and results by logging into your student account.";
        } else {
          response =
            "Exam dates and schedules are available on the student portal under 'Exams.' See your academic calendar for all important dates.";
        }
        break;

      case "UniBuddy-Campus-Services-Intent":
        if (queryText.indexOf("counsel") !== -1) {
          response =
            "The counseling office is in Building B, Room 105. Call 555-765-4321 for appointments.";
        } else if (queryText.indexOf("library") !== -1) {
          response =
            "You can book library slots online via the library portal or your student app.";
        } else if (
          queryText.indexOf("lost and found") !== -1 ||
          queryText.indexOf("lost") !== -1
        ) {
          response =
            "Contact lostfound@aau.edu or go to the lost and found desk for help.";
        } else if (queryText.indexOf("health") !== -1) {
          response =
            "The health center is in Building E. Check your campus map for directions.";
        } else if (
          queryText.indexOf("it support") !== -1 ||
          queryText.indexOf("wifi") !== -1
        ) {
          response =
            "IT support is available at helpdesk@aau.edu or through the IT portal.";
        } else if (
          queryText.indexOf("print") !== -1 ||
          queryText.indexOf("scan") !== -1
        ) {
          response =
            "Print and scan documents at labs in Building C with your student ID card.";
        } else if (queryText.indexOf("id card") !== -1) {
          response =
            "Student ID cards are issued at the registration office. Bring your acceptance letter and photo ID.";
        } else {
          response =
            "For campus services, check the student portal or ask for a specific office or service.";
        }
        break;

      case "UniBuddy-Fees-Payments-Intent":
        if (
          queryText.indexOf("installment") !== -1 ||
          queryText.indexOf("installments") !== -1 ||
          queryText.indexOf("plan") !== -1 ||
          queryText.indexOf("pay in parts") !== -1
        ) {
          response =
            "Installment plans are available. Check with the Finance Office for options or see your portal.";
        } else if (queryText.indexOf("receipt") !== -1) {
          response =
            "Fee receipts are available in your student profile after payment.";
        } else if (queryText.indexOf("deadline") !== -1) {
          response =
            "Payment deadlines are shown in your student profile for every semester.";
        } else if (queryText.indexOf("aid") !== -1) {
          response =
            "For financial aid queries, email finance@aau.edu or visit the Finance Office.";
        } else {
          response =
            "Tuition fees can be paid online through the student portal or in person at the Finance Office, Building D, Room 201.";
        }
        break;

      case "UniBuddy-Events-Clubs-Intent":
        if (queryText.indexOf("club") !== -1) {
          response =
            "You can join clubs via the Clubs section or at the Student Activities desk.";
        } else if (queryText.indexOf("workshop") !== -1) {
          response =
            "Upcoming workshops are shown on the campus events portal and sent as email invites.";
        } else if (queryText.indexOf("career fair") !== -1) {
          response =
            "Career fairs are scheduled each semester. See the events portal or notice boards for updated details.";
        } else if (queryText.indexOf("seminar") !== -1) {
          response =
            "Sign up for seminars via your student portal or at the department office.";
        } else if (queryText.indexOf("activity") !== -1) {
          response =
            "Campus activities are announced weekly on the campus events page and through posters on site.";
        } else {
          response =
            "Event schedules are updated every week on the campus events portal. See notice boards for more details.";
        }
        break;

      case "UniBuddy-Contact-Emergency-Intent":
        if (queryText.indexOf("registrar") !== -1) {
          response = "The Registrar’s Office: 555-123-4567, registrar@aau.edu";
        } else if (queryText.indexOf("emergency") !== -1) {
          response =
            "For campus emergencies, call security at 555-999-0000 or visit their office on the ground floor of Building A.";
        } else if (queryText.indexOf("lost") !== -1) {
          response =
            "Lost property can be reported to lostfound@university.edu. Visit the lost and found desk for help.";
        } else if (queryText.indexOf("medical") !== -1) {
          response =
            "For medical emergencies, visit the health center or call campus emergency.";
        } else if (queryText.indexOf("incident") !== -1) {
          response =
            "Report incidents to campus security or at the administrative desk.";
        } else if (queryText.indexOf("student helpline") !== -1) {
          response =
            "The student helpline is 555-888-2222 for any urgent or counseling needs.";
        } else if (queryText.indexOf("security") !== -1) {
          response =
            "Security office is located on the ground floor of Building A. Call 555-999-0000.";
        } else {
          response =
            "Who do you want to contact? Registrar, security, lost and found, or another department?";
        }
        break;

      case "UniBuddy-Default-Fallback-Intent":
        response =
          "Sorry, I didn’t understand your question. Could you please rephrase or contact human support at helpdesk@aau.edu?";
        break;

      default:
        response =
          "I'm UniBuddy! Try asking about admissions, exams, campus services, or events.";
    }

    return ContentService.createTextOutput(
      JSON.stringify({ fulfillmentText: response })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({
        fulfillmentText: "⚠️ Error: " + err.message,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
