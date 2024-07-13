export default {
  async fetch(request, env, ctx) {
    const USER_AGENT =
      "baerchen201.github.io via Cloudflare Worker Relay Script - baer1f@outlook.com";

    try {
      let profile = await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + env.GITHUB_TOKEN,
          Accept: "application/json",
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": USER_AGENT,
        },
      });
      if (!profile.ok)
        return new Response(
          `Response "${profile.status} ${profile.statusText}" is not OK`,
          {
            status: 502,
            headers: {
              "Content-Type": "text/plain",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
      let profile_json = await profile.json();
      console.log(profile_json);

      const properties = [[profile_json["repos_url"], "repositories"]];
      let response = { profile: profile_json };
      for (let i = 0; i < properties.length; i++) {
        const request = properties[i];
        console.log(`Requesting ${request[0]} (${request[1]})`);
        let r = await fetch(request[0], {
          method: "GET",
          headers: {
            Authorization: "Bearer " + env.GITHUB_TOKEN,
            Accept: "application/json",
            "X-GitHub-Api-Version": "2022-11-28",
            "User-Agent": USER_AGENT,
          },
        });
        if (!r.ok) {
          let err_text = `Response "${r.status} ${r.statusText}" from ${request[0]} (${request[1]}) is not OK`;
          console.log(err_text);
          return new Response(err_text, {
            status: 502,
            headers: {
              "Content-Type": "text/plain",
              "Access-Control-Allow-Origin": "*",
            },
          });
        }
        let json = await r.json();
        console.log(`Response from ${request[0]} (${request[1]}):`, json);
        response[request[1]] = json;
      }

      return new Response(JSON.stringify(response), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
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
