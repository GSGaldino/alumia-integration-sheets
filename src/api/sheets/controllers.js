// BEFORE RUNNING:
// ---------------
// 1. If not already done, enable the Google Sheets API
//    and check the quota for your project at
//    https://console.developers.google.com/apis/api/sheets
// 2. Install the Node.js client library by running
//    `npm install googleapis --save`

const {google} = require('googleapis');
const sheets = google.sheets('v4');

async function main (req, res) {
  const authClient = await authorize();

  const request = {
    spreadsheetId: '1CXU1RCsDIxiSHB7N7R12E6ANNbszIlI1z3I6o9PBuQ8',
    range: req.query.range,
    auth: authClient,
  };

  try {
    const response = (await sheets.spreadsheets.values.get(request)).data;
    res.json(response)

  } catch (err) {
    console.error(err);
  }
}

async function authorize() {
  // TODO: Change placeholder below to generate authentication credentials. See
  // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
  //
  // Authorize using one of the following scopes:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/drive.readonly'
  //   'https://www.googleapis.com/auth/spreadsheets'
  //   'https://www.googleapis.com/auth/spreadsheets.readonly'
  let authClient = new google.auth.OAuth2('176371533383-qvq14pubsu0ibirkmnp73ah6ist6eagv.apps.googleusercontent.com', '979VJSaDOEZxBcrmhYdR6UXf', 'urn:ietf:wg:oauth:2.0:oob');
  authClient.setCredentials({"access_token":"ya29.a0AfH6SMCRlkdOnXwwcj0Z80xNWEeYZWwmUfG9UVFrZ49hOSlrojYmBnw2BA9iQXmHtby1fW_m41bsofRw-fBW32oWrfwBeDKVMNUICrsJBIg36-O9KKJaixHQjz1Y06aToMIkFv858Go_YNF5ULhUhgYl4nDVlxT0--I","refresh_token":"1//0hVVxOHuazXzmCgYIARAAGBESNwF-L9Irn75IxU3qEjWYZafZuKWHAnRdCa9syWNZbn2OnNX3buT4Yb-XXAJ75msv2CXMG5Euzfk","scope":"https://www.googleapis.com/auth/spreadsheets.readonly","token_type":"Bearer","expiry_date":1600702959031})

  if (authClient == null) {
    throw Error('authentication failed');
  }

  return authClient;
}

module.exports = {
  main,
  authorize
}
