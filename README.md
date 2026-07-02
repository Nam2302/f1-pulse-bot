# 🏎️ F1 Pulse Bot

F1 Pulse Bot is a Slack bot that provides real-time Formula 1 updates directly inside Slack. It lets users check the next race, view current driver standings, and get random driver facts using live F1 data APIs.

---

## 🚀 Features

- 🏁 Next F1 race information
- 🏆 Current driver standings (top 5)
- 🏎️ Random F1 driver generator
- ⚡ Bot health check (latency ping)

---

## 💬 Commands

| Command | Description |
|--------|-------------|
| `/f1-pulse-bot-ping` | Check bot latency and health |
| `/f1-pulse-bot-help` | View all commands |
| `/f1-pulse-bot-next-race` | View the next Formula 1 race |
| `/f1-pulse-bot-standings` | View current driver standings |
| `/f1-pulse-bot-random-driver` | Get a random F1 driver |

---

## 🔐 Required Permissions (Slack App Scopes)

Make sure your Slack app has:

- `commands`
- `chat:write`

---

## 🌐 Demo

This bot runs inside a Slack workspace.

To try it:
- Add the app to your Slack workspace using your Slack app install link
- Or invite reviewers to your test workspace

---

## ⚙️ Setup / Self-Host Instructions

If running locally or on a server:

```bash
git clone https://github.com/Nam2302/f1-pulse-bot.git
cd f1-pulse-bot
npm install
