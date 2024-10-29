const fs = require("fs");
const fetch = require("node-fetch"); // Importing node-fetch for fetch functionality
const { smd, TelegraPh } = require("../lib");
const Config = require("../config");

// List of all the cmdnames
const cmdnames = [
  'akira', 'akiyama', 'anna', 'asuna', 'ayuzawa', 'boruto', 'chitanda', 'chitoge', 
  'deidara', 'doraemon', 'elaina', 'emilia', 'asuna', 'erza', 'gremory', 'hestia', 
  'hinata', 'inori', 'itachi', 'isuzu', 'itori', 'kaga', 'kagura', 'kakasih', 'kaori', 
  'kaneki', 'kosaki', 'kotori', 'kuriyama', 'kuroha', 'kurumi', 'madara', 'mikasa', 
  'miku', 'minato', 'naruto', 'natsukawa', 'neko2', 'nekohime', 'nezuko', 'nishimiya', 
  'onepiece', 'pokemon', 'rem', 'rize', 'sagiri', 'sakura', 'sasuke', 'shina', 'shinka', 'shizuka', 'shota', 'tomori', 'toukachan', 'tsunade', 'yatogami', 'yuki'
];

// Loop through all the cmdnames and create a command for each one
cmdnames.forEach(cmdname => {
  smd(
    {
      pattern: cmdname, // Command name
      category: "anime",
      filename: __filename,
      desc: `Get a random ${cmdname} wallpaper.`,
    },
    async (m) => {
      try {
        let apiUrl = `https://raw.githubusercontent.com/KazukoGans/database/main/anime/${cmdname}.json`; // Use the cmdname.json dynamically
        let response = await fetch(apiUrl); // Using fetch to get data from the API
        let jsonResponse = await response.json(); // Parse the JSON response

        if (jsonResponse && jsonResponse.length > 0) {
          // Select a random wallpaper from the array
          let randomIndex = Math.floor(Math.random() * jsonResponse.length);
          let randomWallpaperUrl = jsonResponse[randomIndex]; // Get the random image URL

          await m.send(randomWallpaperUrl, { caption: Config.caption }, "image", m); // Send the random image
        } else {
          await m.send("*_Request not processed!_*");
        }
      } catch (error) {
        await m.error(
          error + `\n\ncommand: ${cmdname}`, // Updated command name in error message
          error,
          "*_No response from API, Sorry!!_*"
        );
      }
    }
  );
});