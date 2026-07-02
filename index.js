const axios = require("axios");

require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/f1-pulse-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();

app.command("/f1-pulse-bot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/f1-pulse-bot-ping - Check bot latency
/f1-pulse-bot-next-race - View the next race
/f1-pulse-bot-standings - View the current drivers standing
/f1-pulse-bot-random-driver - Get a random F1 driver
`
  });
});

app.command("/f1-pulse-bot-next-race", async ({ ack, respond }) => {
    await ack();

    try {
        const response = await axios.get("https://api.jolpi.ca/ergast/f1/current/next.json");
        const race = response.data.MRData.RaceTable.Races[0];
        
        await respond({ text: 
`🏁 ${race.raceName}

📍 ${race.Circuit.circuitName}
🌎 ${race.Circuit.Location.locality}, ${race.Circuit.Location.country}

📅 ${race.date}
🕒 ${race.time}`
        });

    } catch (err) {
        await respond({ text: "Failed to fetch the next race." });
    }
});


app.command("/f1-pulse-bot-standings", async ({ ack, respond }) => {
    await ack();

    try {
        const response = await axios.get("https://api.jolpi.ca/ergast/f1/current/driverStandings.json");
        const standings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        
        let message = "🏆 Current Driver Standings \n\n"
        
        standings.slice(0, 5).forEach(driver =>{
            message += `${driver.position}. ${driver.Driver.givenName} ${driver.Driver.familyName} - ${driver.points} pts\n`

        });

        await respond({ text: message });

    } catch (err) {
        await respond({ text: "Failed to fetch the standings." });
    }
});

app.command("/f1-pulse-bot-random-driver", async ({ ack, respond }) => {
    await ack();

    try {
        const response = await axios.get("https://api.jolpi.ca/ergast/f1/current/drivers.json");
        const drivers = response.data.MRData.DriverTable.Drivers;
        const driver = drivers[Math.floor(Math.random() * drivers.length)];

        await respond({ text: 
`🏎️ ${driver.givenName} ${driver.familyName}

🏳️ Nationality: ${driver.nationality}
🎂 Born: ${driver.dateOfBirth}
`
        });

    } catch (err) {
        await respond({ text: "Failed to fetch a driver." });
    }
});
