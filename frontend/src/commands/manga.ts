import type { CommandInteraction } from "discord.js";
import { Discord, Slash, SlashChoice, SlashOption } from "discordx";

@Discord()
export class Manga {
    @Slash()
    manga(
        @SlashChoice("Chainsaw Man", "One Piece")
        @SlashOption("manga", { description: "What manga would you like to find?"})
        manga: string,
        interaction: CommandInteraction
    ): void {
        interaction.reply(manga);
    }
}