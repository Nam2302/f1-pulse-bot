# 🏎️ F1 Pulse Bot

F1 Pulse Bot is a Slack bot that brings live Formula 1 information into your workspace, letting you check the next race, current driver standings, and random driver facts without leaving Slack.

<p align="center">
  <img width="200" src="https://github.com/user-attachments/assets/d32492b0-dcfb-4d65-9f81-4992fe1ddd97" alt="F1 Pulse Bot">
</p>

## Try It

The bot is designed to run inside a Slack workspace.
- You can test out the bot here: https://app.slack.com/client/E09V59WQY1E/C0BEM9CFYRH

---

## Quick Start

```bash
git clone https://github.com/Nam2302/f1-pulse-bot.git
cd f1-pulse-bot
npm install
npm start
```

Create a `.env` file with your Slack bot token and app token before starting the bot.

---

## Features

- View the next Formula 1 race
- See the current top 5 driver standings
- Generate a random Formula 1 driver
- Check bot latency and health
- Slash commands integrated directly into Slack

---

## Commands

| Command | Description |
|---------|-------------|
| `/f1-pulse-bot-ping` | Check bot latency and health |
| `/f1-pulse-bot-help` | View all commands |
| `/f1-pulse-bot-next-race` | View the next Formula 1 race |
| `/f1-pulse-bot-standings` | View the current top 5 driver standings |
| `/f1-pulse-bot-random-driver` | Get a random Formula 1 driver |

---

## Slack App Permissions

Required OAuth scopes:

- `commands`
- `chat:write`

---

## How It Works

F1 Pulse Bot is built with Node.js using Slack's Bolt framework. When a slash command is executed, the bot fetches live Formula 1 data from public APIs and formats the results into clean, readable Slack messages. This means race schedules and standings stay up to date without requiring manual updates.

---

## Credits

- Built with the Slack Bolt SDK
- Formula 1 data provided by public F1 APIs
