/**
 * =========================================================================
 * GOOGLE APPS SCRIPT: CONTACT FORM STATIC BACKEND
 * =========================================================================
 * 
 * HOW TO DEPLOY IN 5 EASY STEPS:
 * 
 * 1. Go to https://sheets.google.com and create a new blank spreadsheet.
 *    Name it e.g. "Portfolio Dispatches".
 * 
 * 2. In Google Sheets menu, click: "Extensions" > "Apps Script".
 * 
 * 3. Delete any default code in the editor, paste this entire Code.gs file,
 *    and click the "Save" (floppy disk) icon.
 * 
 * 4. In the top right, click "Deploy" > "New deployment".
 *    - Click the gear icon next to "Select type" and choose "Web app".
 *    - Description: "Portfolio Contact Form API"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (CRITICAL: this allows static site form submissions)
 *    - Click "Deploy".
 *    - Grant permissions when prompted by Google.
 * 
 * 5. Copy the generated "Web app URL" (ends with /exec).
 *    Open `src/data/portfolioData.js` in your portfolio project and paste
 *    your URL into `contactConfig.googleScriptUrl`.
 * 
 * That's it! Every contact submission on your static portfolio will now
 * instantly appear as a new row in your Google Sheet!
 * =========================================================================
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-create headers if sheet is brand new and empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Subject", "Message"]);
      // Style header row
      var headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0F172A");
      headerRange.setFontColor("#00F0FF");
    }

    var name = "";
    var email = "";
    var subject = "";
    var message = "";
    var timestamp = new Date();

    // Check if received via JSON payload or FormData / URLSearchParams
    if (e.postData && e.postData.contents) {
      try {
        var jsonData = JSON.parse(e.postData.contents);
        name = jsonData.name || "";
        email = jsonData.email || "";
        subject = jsonData.subject || "Portfolio Inquiry";
        message = jsonData.message || "";
      } catch (jsonErr) {
        // Fall back to parameter parsing
        if (e.parameter) {
          name = e.parameter.name || "";
          email = e.parameter.email || "";
          subject = e.parameter.subject || "Portfolio Inquiry";
          message = e.parameter.message || "";
        }
      }
    } else if (e.parameter) {
      name = e.parameter.name || "";
      email = e.parameter.email || "";
      subject = e.parameter.subject || "Portfolio Inquiry";
      message = e.parameter.message || "";
    }

    // Append new row
    sheet.appendRow([timestamp, name, email, subject, message]);

    // Optional: Send an instant email notification to yourself whenever a message arrives!
    // MailApp.sendEmail({
    //   to: Session.getActiveUser().getEmail(),
    //   subject: "⚡ New Portfolio Dispatch from " + name,
    //   htmlBody: "<h3>New transmission received:</h3>" +
    //             "<p><b>Name:</b> " + name + "</p>" +
    //             "<p><b>Email:</b> " + email + "</p>" +
    //             "<p><b>Subject:</b> " + subject + "</p>" +
    //             "<p><b>Message:</b><br/>" + message + "</p>"
    // });

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Submission recorded successfully",
      timestamp: timestamp
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*");

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader("Access-Control-Allow-Origin", "*");
  }
}

// Handle OPTIONS preflight request for CORS compliance
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
