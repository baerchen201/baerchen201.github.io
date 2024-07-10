export default {
  async fetch(request, env, ctx) {
    const USER_AGENT =
        "baerchen201.github.io via Cloudflare Worker Relay Script - baer1f@outlook.com",
      STEAM_ID = "76561199245129581";

    try {
      let r = await fetch(
        `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${env.STEAM_KEY}&steamids=${STEAM_ID}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "User-Agent": USER_AGENT,
          },
        }
      );
      return new Response(await r.text(), {
        status: r.status,
        statusText: r.statusText,
        headers: {
          "Content-Type": r.headers.has("Content-Type")
            ? r.headers.get("Content-Type")
            : "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      return new Response(
        `Error processing request:\n${error
          .toString()
          .replace(env.STEAM_KEY, "*".repeat(env.STEAM_KEY.length))}`,
        {
          status: 500,
          headers: {
            "Content-Type": "text/plain",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }
  },
};
