const { google } = require("googleapis");

module.exports.listEvents = function (auth, cb) {
  const calendar = google.calendar({ version: "v3", auth });
  calendar.events.list(
    {
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    },
    (err, res) => {
      if (err) {
        cb({
          isError: true,
          response: err,
        });
      }
      cb({
        isError: false,
        response: res.data.items,
      });
    }
  );
};
