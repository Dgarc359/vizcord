import "reflect-metadata";

import { dirname, importx } from "@discordx/importer";
import type { Interaction, Message } from "discord.js";
import { Intents } from "discord.js";
import { Client } from "discordx";
import dotenv from 'dotenv';
dotenv.config();

export const bot = new Client({

  intents: [
    Intents.FLAGS.GUILD_MESSAGES
  ],

  silent: false,
});

bot.once("ready", async () => {

  await bot.guilds.fetch();

  await bot.initApplicationCommands();

  console.log("Bot started");
});

bot.on("interactionCreate", (interaction: Interaction) => {
  bot.executeInteraction(interaction);
});

bot.on("messageCreate", (message: Message) => {
  bot.executeCommand(message);
});

async function run() {
  await importx(dirname(import.meta.url) + "/{events,commands}/**/*.{ts,js}");

  if (!process.env.BOT_TOKEN) {
    throw Error("Could not find BOT_TOKEN in your environment");
  }

  await bot.login(process.env.BOT_TOKEN);
}

run();