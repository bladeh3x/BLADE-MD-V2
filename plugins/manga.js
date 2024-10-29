const {
  smd,
  fetchJson,
  astroJson,
  fancytext,
  yt,
  getBuffer,
  smdBuffer,
  prefix,
  Config,
} = require("../lib");
const { search, download } = require("aptoide-scraper");
const googleTTS = require("google-tts-api");
const ytdl = require("alya");
const yts = require("secktor-pack");
const fs = require("fs-extra");
const fetch = require("node-fetch");
var videotime = 2000;
const { cmd } = require("../lib/plugins");
const axios = require('axios');

smd(
  {
    pattern: "mangadl",
    desc: "Downloads specific manga chapters from MangaDex (English only).",
    category: "anime",
    filename: __filename,
    use: "<manga title> chapter <number> e.g., mangadl one piece chapter 1",
  },
  async (_0x1ae8f8, _0x1c586e) => {
    try {
      let searchQuery = _0x1c586e
        ? _0x1c586e
        : _0x1ae8f8.reply_message
        ? _0x1ae8f8.reply_message.text
        : "";

      if (!searchQuery) {
        return await _0x1ae8f8.reply(
          "*Provide a manga title and chapter number, e.g., .mangadl One Piece chapter 1*"
        );
      }

      // Extract the manga title and chapter number from the input
      const queryMatch = searchQuery.match(/(.+?)\s+chapter\s+(\d+)/i);
      if (!queryMatch) {
        return await _0x1ae8f8.reply(
          "*Invalid query format. Use: .mangadl <manga title> chapter <number>*"
        );
      }

      const mangaTitle = queryMatch[1].trim();
      const chapterNumber = queryMatch[2];

      // Search for manga by title on MangaDex (filtered to English)
      const mangaSearchUrl = `https://api.mangadex.org/manga?title=${encodeURIComponent(mangaTitle)}&limit=1&availableTranslatedLanguage[]=en`;
      const searchResponse = await axios.get(mangaSearchUrl);

      if (!searchResponse.data || !searchResponse.data.data || searchResponse.data.data.length === 0) {
        return await _0x1ae8f8.reply(
          `*No English manga found with the title "${mangaTitle}".*`
        );
      }

      const mangaId = searchResponse.data.data[0].id;

      // Get the chapters of the manga, filtering by chapter number and English
      const chaptersUrl = `https://api.mangadex.org/chapter?manga=${mangaId}&chapter=${chapterNumber}&translatedLanguage[]=en`;
      const chaptersResponse = await axios.get(chaptersUrl);

      if (!chaptersResponse.data || chaptersResponse.data.data.length === 0) {
        return await _0x1ae8f8.reply(
          `*No English chapter ${chapterNumber} found for "${mangaTitle}".*`
        );
      }

      // Get the first available chapter's ID and download it
      const chapterId = chaptersResponse.data.data[0].id;
      const chapterApiUrl = `https://api.mangadex.org/at-home/server/${chapterId}`;
      const chapterResponse = await axios.get(chapterApiUrl);

      if (!chapterResponse.data || !chapterResponse.data.baseUrl) {
        return await _0x1ae8f8.reply(
          "*Error: Unable to fetch the chapter.*"
        );
      }

      const imageUrls = chapterResponse.data.chapter.data.map(
        (imageFileName) => `${chapterResponse.data.baseUrl}/data/${chapterResponse.data.chapter.hash}/${imageFileName}`
      );

      // Send the chapter images one by one
      for (const imageUrl of imageUrls) {
        await _0x1ae8f8.bot.sendMessage(_0x1ae8f8.jid, {
          image: { url: imageUrl },
          caption: `Here is a page from chapter ${chapterNumber} of "${mangaTitle}" (English)`,
        });
      }
    } catch (error) {
      console.error(error); // Log error for debugging
      return _0x1ae8f8.error(
        "Error: " + error.message + "\n\ncommand: mangadl",
        error,
        "*_Failed to fetch manga chapter!!!_*"
      );
    }
  }
);
smd(
  {
    pattern: "anisearch",
    desc: "Get information about an anime.",
    category: "anime",
    filename: __filename,
    use: "<anime_name>",
  },
  async (m, animeName) => {
    try {
      if (!animeName) {
        return await m.send("*_Please provide an anime name!_*");
      }

      const apiUrl = `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(
        animeName
      )}`;
      const response = await axios.get(apiUrl);

      if (response.status !== 200) {
        return await m.send(
          `*_Error: ${response.status} ${response.statusText}_*`
        );
      }

      const data = response.data;

      if (!data || !data.data || data.data.length === 0) {
        return await m.send("*_No anime found!_*");
      }

      for (const anime of data.data) {
        const {
          attributes: { canonicalTitle, synopsis, episodeCount, averageRating, startDate, posterImage },
        } = anime;

        const caption = `
*Anime Information*

*Title:* ${canonicalTitle}
*Episodes:* ${episodeCount || "N/A"}
*Average Rating:* ${averageRating || "N/A"}
*Aired From:* ${startDate || "N/A"}

*Synopsis:* ${synopsis || "No synopsis available"}

*Anime Poster:*
`;

        const imageUrl = posterImage?.medium;

        await m.bot.sendFromUrl(m.from, imageUrl, caption, m, {}, "image");
      }
    } catch (e) {
      await m.error(`${e}\n\ncommand: animesearch`, e);
    }
  }
);