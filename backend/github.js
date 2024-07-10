export default {
  async fetch(request, env, ctx) {
    const USER_AGENT =
      "baerchen201.github.io via Cloudflare Worker Relay Script - baer1f@outlook.com";

    try {
      let r = await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + env.GITHUB_TOKEN,
          Accept: "application/json",
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": USER_AGENT,
        },
      });
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
          .replace(env.GITHUB_TOKEN, "*".repeat(env.GITHUB_TOKEN.length))}`,
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
