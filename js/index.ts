const VERSION: string = "v2.0";
/*
    baer1 website
    Copyright (C) 2024  baer1

    This website is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    A copy of the GNU General Public License should be hosted along with
    this website (LICENSE). If not, see <https://www.gnu.org/licenses/>.

    baer1f@outlook.com
*/

window.addEventListener("load", () => {
  let s: HTMLStyleElement = document.createElement("style");
  document.head.appendChild(s);
  s.sheet!.insertRule(`#version::after{content: "Script ${VERSION}"}`);
});

(function _init_browser_compatibility() {
  function browser_compatible(): string[] {
    let ret: string[] = [];

    // Add compatibility checks here
    if (window.innerWidth < 480)
      ret.push(`Window width very low (${window.innerWidth}px < 480px)`);
    if (window.innerHeight < 300)
      ret.push(`Window height very low (${window.innerHeight}px < 300px)`);
    let safari_match: RegExpExecArray | null =
      /.*Version\/([\d\.]+) (Safari\/[\d\.]+)/.exec(navigator.userAgent);
    if (safari_match)
      ret.push(`Safari Browser is incompatible ("${safari_match[1]}")`);
    let phone_match: RegExpExecArray | null =
      /Mozilla\/5\.0 \((iPhone|Android);.+/.exec(navigator.userAgent);
    if (phone_match) ret.push(`Phones are incompatible (${phone_match[1]})`);

    return ret;
  }
  function check_website_compatibility() {
    let is_browser_compatible = browser_compatible();
    console.log("Browser compatibility check result:", is_browser_compatible);
    if (is_browser_compatible.length)
      if (!sessionStorage.getItem("hide-compatibility-warning")) {
        if (
          confirm(
            "Warning!\nThis website may not run correctly on your browser or device:\n" +
              is_browser_compatible.join("\n") +
              "\n\nOK: Hide, don't show again for this session\nCancel: Hide"
          )
        )
          sessionStorage.setItem("hide-compatibility-warning", "true");
      }
  }

  window.addEventListener("load", check_website_compatibility);
  window.addEventListener("resize", check_website_compatibility);
})();

(function _init_steam() {
  interface STEAM_PROFILE {
    user: string;
    name: string;
    id: string;
    picture: string;
  }

  const STEAM_RELAY: string =
      "https://still-wood-a68b.videocreator.workers.dev/",
    STEAM_UPDATE_RATE_LIMIT: number = 5e3,
    STEAM_DEFAULTS: STEAM_PROFILE = {
      name: "Georg M. H.",
      user: "videocreator",
      id: "76561199245129581",
      picture: "/me/0.png",
    };
  const _STEAM_EXAMPLE_RESPONSES: Object[] = [
    {
      response: {
        players: [
          {
            steamid: "76561199245129581",
            communityvisibilitystate: 3,
            profilestate: 1,
            personaname: "videocreator",
            profileurl: "https://steamcommunity.com/id/baerchen201/",
            avatar:
              "https://avatars.steamstatic.com/76c4df28062c408667bf2279276bc6b9f068dd0b.jpg",
            avatarmedium:
              "https://avatars.steamstatic.com/76c4df28062c408667bf2279276bc6b9f068dd0b_medium.jpg",
            avatarfull:
              "https://avatars.steamstatic.com/76c4df28062c408667bf2279276bc6b9f068dd0b_full.jpg",
            avatarhash: "76c4df28062c408667bf2279276bc6b9f068dd0b",
            lastlogoff: 1720350940,
            personastate: 1,
            realname: "Georg M. Hamburg",
            primaryclanid: "103582791429521408",
            timecreated: 1645258954,
            personastateflags: 0,
            loccountrycode: "DE",
            locstatecode: "01",
          },
        ],
      },
    },
    {
      response: {
        players: [
          {
            steamid: "76561199245129581",
            communityvisibilitystate: 3,
            profilestate: 1,
            personaname: "videocreator",
            profileurl: "https://steamcommunity.com/id/baerchen201/",
            avatar:
              "https://avatars.steamstatic.com/76c4df28062c408667bf2279276bc6b9f068dd0b.jpg",
            avatarmedium:
              "https://avatars.steamstatic.com/76c4df28062c408667bf2279276bc6b9f068dd0b_medium.jpg",
            avatarfull:
              "https://avatars.steamstatic.com/76c4df28062c408667bf2279276bc6b9f068dd0b_full.jpg",
            avatarhash: "76c4df28062c408667bf2279276bc6b9f068dd0b",
            lastlogoff: 1720350940,
            personastate: 1,
            realname: "Georg M. Hamburg",
            primaryclanid: "103582791429521408",
            timecreated: 1645258954,
            personastateflags: 0,
            gameextrainfo: "Banana",
            gameid: "2923300",
            loccountrycode: "DE",
            locstatecode: "01",
          },
        ],
      },
    },
    {
      response: {
        players: [
          {
            steamid: "76561199546162068",
            communityvisibilitystate: 3,
            profilestate: 1,
            personaname: "gustav_7724",
            profileurl:
              "https://steamcommunity.com/profiles/76561199546162068/",
            avatar:
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
            avatarmedium:
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg",
            avatarfull:
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg",
            avatarhash: "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb",
            personastate: 0,
            realname: "Gustav",
            primaryclanid: "103582791429521408",
            timecreated: 1693221907,
            personastateflags: 0,
            loccountrycode: "DE",
          },
        ],
      },
    },
    {
      response: {
        players: [
          {
            steamid: "76561199546162068",
            communityvisibilitystate: 3,
            profilestate: 1,
            personaname: "gustav_7724",
            commentpermission: 2,
            profileurl:
              "https://steamcommunity.com/profiles/76561199546162068/",
            avatar:
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
            avatarmedium:
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg",
            avatarfull:
              "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg",
            avatarhash: "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb",
            personastate: 0,
            primaryclanid: "103582791429521408",
            timecreated: 1693221907,
            personastateflags: 0,
          },
        ],
      },
    },
  ]; // For development

  interface STEAM_PROFILE_RAW {
    response: {
      players: {
        steamid: string;
        communityvisibilitystate: number;
        profilestate: number;
        personaname: string;
        commentpermission?: number;
        profileurl: string;
        avatar: string;
        avatarmedium: string;
        avatarfull: string;
        avatarhash: string;
        lastlogoff?: number;
        personastate: number;
        realname?: string;
        primaryclanid: string;
        timecreated: number;
        personastateflags: number;
        gameextrainfo?: string;
        gameid?: string;
        loccountrycode?: string;
        locstatecode?: string;
      }[];
    };
  }

  interface STEAM_PROFILE_INFO {
    steamid: string;
    communityvisibilitystate: number;
    profilestate: number;
    personaname: string;
    commentpermission?: number;
    profileurl: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    avatarhash: string;
    lastlogoff?: number;
    personastate: number;
    realname?: string;
    primaryclanid: string;
    timecreated: number;
    personastateflags: number;
    gameextrainfo?: string;
    gameid?: string;
    loccountrycode?: string;
    locstatecode?: string;
  }

  function get_steam_profile(): Promise<Response> {
    return fetch(STEAM_RELAY);
  }
  function get_steam_game_name(gameid: string): string {
    return gameid; //Placeholder for now
  }

  window.addEventListener("load", () => {
    let steam_mini_profile: HTMLAnchorElement = document.getElementById(
      "steam-profile"
    ) as HTMLAnchorElement;
    let steam_profile_nodes = {
      picture: steam_mini_profile.getElementsByTagName("img")[0],
      loading_wheel: steam_mini_profile.getElementsByTagName("img")[1],
      user: steam_mini_profile.getElementsByTagName("div")[0],
      name: steam_mini_profile.getElementsByTagName("div")[1],
      status: steam_mini_profile.getElementsByTagName("div")[2],
    };
    function set_steam_status(
      status?: null | 0 | 1 | 2 | { name: string; id: string },
      profile: STEAM_PROFILE = STEAM_DEFAULTS
    ) {
      steam_profile_nodes.loading_wheel.style.display = "";
      steam_mini_profile.className = "";
      steam_profile_nodes.picture.src = profile.picture;
      steam_profile_nodes.picture.alt = `${profile.user}'s avatar`;
      steam_profile_nodes.user.innerText = profile.user;
      steam_profile_nodes.name.innerText = profile.name;
      steam_profile_nodes.status.innerHTML = "";
      switch (status) {
        case undefined:
          steam_profile_nodes.loading_wheel.style.display = "initial";
          steam_mini_profile.classList.add("loading");
          break;
        case null:
          steam_mini_profile.classList.add("unavailable");
          steam_profile_nodes.picture.src = "/img/steam_default.jpg";
          steam_profile_nodes.picture.alt = `Steam default avatar`;
          break;
        case 0:
          steam_mini_profile.classList.add("offline");
          break;
        case 1:
          steam_mini_profile.classList.add("online");
          break;
        case 2:
          steam_mini_profile.classList.add("away");
          break;

        default:
          steam_mini_profile.classList.add("ingame");
          let game_link: HTMLAnchorElement = document.createElement("a");
          game_link.href = `https://store.steampowered.com/app/${status.id}`;
          game_link.innerText = status.name;
          game_link.target = "_blank";
          steam_profile_nodes.status.appendChild(game_link);
          let game_widget: HTMLIFrameElement = document.createElement("iframe");
          game_widget.src = `https://store.steampowered.com/widget/${status.id}`;
          game_widget.setAttribute("frameborder", "0");
          game_widget.setAttribute("seamless", "seamless");
          steam_profile_nodes.status.appendChild(game_widget);
          break;
      }
    }

    function update_steam_profile(silent: boolean = false): boolean {
      if (!silent) set_steam_status();
      if (
        sessionStorage.getItem("update-steam-time") &&
        Date.now() - Number(sessionStorage.getItem("update-steam-time")) <
          STEAM_UPDATE_RATE_LIMIT
      )
        return false;
      sessionStorage.setItem("update-steam-time", Date.now().toString());

      get_steam_profile().then(async (r: Response) => {
        if (!r.ok) {
          set_steam_status(null);
          return;
        }
        let json: STEAM_PROFILE_RAW = await r.json();
        let player_info: STEAM_PROFILE_INFO = json.response.players[0];

        let status: null | 0 | 1 | 2 | { name: string; id: string };
        switch (player_info.personastate) {
          case 0:
            status = 0;
            break;
          case 1:
            status = 1;
            break;
          case 3:
            status = 2;
            break;

          default:
            status = null;
            break;
        }
        if ("gameid" in player_info)
          status = {
            id: player_info.gameid!,
            name:
              "gameextrainfo" in player_info
                ? player_info.gameextrainfo!
                : get_steam_game_name(player_info.gameid!),
          };

        set_steam_status(status, {
          id: player_info.steamid,
          name:
            "realname" in player_info
              ? player_info.realname!
              : STEAM_DEFAULTS.name,
          picture: player_info.avatarfull,
          user: player_info.personaname,
        });
      });
      return true;
    }

    let steam_kickstart_function = () => {
      if (update_steam_profile()) {
        console.log("Steam profile loaded");
        setInterval(() => {
          if (document.hasFocus()) update_steam_profile(true);
          else document.body.setAttribute("update-steam-profile", "");
        }, 300000);
      } else
        setTimeout(
          steam_kickstart_function,
          STEAM_UPDATE_RATE_LIMIT -
            (Date.now() - Number(sessionStorage.getItem("update-steam-time"))) +
            500
        );
    };
    steam_kickstart_function();

    window.addEventListener("focus", () => {
      if (!document.body.hasAttribute("update-steam-profile")) return;
      document.body.removeAttribute("update-steam-profile");
      update_steam_profile(true);
    });
    window.set_steam_status = set_steam_status; // Development thing, so the test buttons work
    window.update_steam_profile = update_steam_profile;

    // https://stackoverflow.com/a/69512412/25675276
  });
})();

(function _init_github() {
  const GITHUB_RELAY: string =
      "https://still-paper-fdc6.videocreator.workers.dev/",
    GITHUB_UPDATE_RATE_LIMIT: number = 10e3;

  interface GITHUB_PROFILE_PRIVATE {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id?: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    notification_email?: string;
    hireable?: boolean;
    bio?: string;
    twitter_username?: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    private_gists: number;
    total_private_repos: number;
    owned_private_repos: number;
    disk_usage: number;
    collaborators: number;
    two_factor_authentication: boolean;
    plan: {
      collaborators: number;
      name: string;
      space: number;
      private_repos: number;
    };
    suspended_at?: string;
    business_plus: boolean;
    ldap_dn: string;
  }

  // Unused
  interface GITHUB_PROFILE_PUBLIC {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id?: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    notification_email?: string;
    hireable?: boolean;
    bio?: string;
    twitter_username?: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
    private_gists: number;
    total_private_repos: number;
    owned_private_repos: number;
    disk_usage: number;
    collaborators: number;
    plan: {
      collaborators: number;
      name: string;
      space: number;
      private_repos: number;
    };
    suspended_at?: string;
  }

  // TODO Convert to TS interface
  interface GITHUB_USER_REPOS {
    type: "array";
    items: {
      title: "Minimal Repository";
      description: "Minimal Repository";
      type: "object";
      properties: {
        id: {
          type: "integer";
          format: "int64";
          examples: [1296269];
        };
        node_id: {
          type: "string";
          examples: ["MDEwOlJlcG9zaXRvcnkxMjk2MjY5"];
        };
        name: {
          type: "string";
          examples: ["Hello-World"];
        };
        full_name: {
          type: "string";
          examples: ["octocat/Hello-World"];
        };
        owner: {
          title: "Simple User";
          description: "A GitHub user.";
          type: "object";
          properties: {
            name: {
              type: ["string", "null"];
            };
            email: {
              type: ["string", "null"];
            };
            login: {
              type: "string";
              examples: ["octocat"];
            };
            id: {
              type: "integer";
              format: "int64";
              examples: [1];
            };
            node_id: {
              type: "string";
              examples: ["MDQ6VXNlcjE="];
            };
            avatar_url: {
              type: "string";
              format: "uri";
              examples: ["https://github.com/images/error/octocat_happy.gif"];
            };
            gravatar_id: {
              type: ["string", "null"];
              examples: ["41d064eb2195891e12d0413f63227ea7"];
            };
            url: {
              type: "string";
              format: "uri";
              examples: ["https://api.github.com/users/octocat"];
            };
            html_url: {
              type: "string";
              format: "uri";
              examples: ["https://github.com/octocat"];
            };
            followers_url: {
              type: "string";
              format: "uri";
              examples: ["https://api.github.com/users/octocat/followers"];
            };
            following_url: {
              type: "string";
              examples: [
                "https://api.github.com/users/octocat/following{/other_user}"
              ];
            };
            gists_url: {
              type: "string";
              examples: [
                "https://api.github.com/users/octocat/gists{/gist_id}"
              ];
            };
            starred_url: {
              type: "string";
              examples: [
                "https://api.github.com/users/octocat/starred{/owner}{/repo}"
              ];
            };
            subscriptions_url: {
              type: "string";
              format: "uri";
              examples: ["https://api.github.com/users/octocat/subscriptions"];
            };
            organizations_url: {
              type: "string";
              format: "uri";
              examples: ["https://api.github.com/users/octocat/orgs"];
            };
            repos_url: {
              type: "string";
              format: "uri";
              examples: ["https://api.github.com/users/octocat/repos"];
            };
            events_url: {
              type: "string";
              examples: [
                "https://api.github.com/users/octocat/events{/privacy}"
              ];
            };
            received_events_url: {
              type: "string";
              format: "uri";
              examples: [
                "https://api.github.com/users/octocat/received_events"
              ];
            };
            type: {
              type: "string";
              examples: ["User"];
            };
            site_admin: {
              type: "boolean";
            };
            starred_at: {
              type: "string";
              examples: ['"2020-07-09T00:17:55Z"'];
            };
          };
          required: [
            "avatar_url",
            "events_url",
            "followers_url",
            "following_url",
            "gists_url",
            "gravatar_id",
            "html_url",
            "id",
            "node_id",
            "login",
            "organizations_url",
            "received_events_url",
            "repos_url",
            "site_admin",
            "starred_url",
            "subscriptions_url",
            "type",
            "url"
          ];
        };
        private: {
          type: "boolean";
        };
        html_url: {
          type: "string";
          format: "uri";
          examples: ["https://github.com/octocat/Hello-World"];
        };
        description: {
          type: ["string", "null"];
          examples: ["This your first repo!"];
        };
        fork: {
          type: "boolean";
        };
        url: {
          type: "string";
          format: "uri";
          examples: ["https://api.github.com/repos/octocat/Hello-World"];
        };
        archive_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}"
          ];
        };
        assignees_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/assignees{/user}"
          ];
        };
        blobs_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}"
          ];
        };
        branches_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/branches{/branch}"
          ];
        };
        collaborators_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}"
          ];
        };
        comments_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/comments{/number}"
          ];
        };
        commits_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/commits{/sha}"
          ];
        };
        compare_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}"
          ];
        };
        contents_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/contents/{+path}"
          ];
        };
        contributors_url: {
          type: "string";
          format: "uri";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/contributors"
          ];
        };
        deployments_url: {
          type: "string";
          format: "uri";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/deployments"
          ];
        };
        downloads_url: {
          type: "string";
          format: "uri";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/downloads"
          ];
        };
        events_url: {
          type: "string";
          format: "uri";
          examples: ["http://api.github.com/repos/octocat/Hello-World/events"];
        };
        forks_url: {
          type: "string";
          format: "uri";
          examples: ["http://api.github.com/repos/octocat/Hello-World/forks"];
        };
        git_commits_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}"
          ];
        };
        git_refs_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}"
          ];
        };
        git_tags_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}"
          ];
        };
        git_url: {
          type: "string";
        };
        issue_comment_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}"
          ];
        };
        issue_events_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/issues/events{/number}"
          ];
        };
        issues_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/issues{/number}"
          ];
        };
        keys_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/keys{/key_id}"
          ];
        };
        labels_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/labels{/name}"
          ];
        };
        languages_url: {
          type: "string";
          format: "uri";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/languages"
          ];
        };
        merges_url: {
          type: "string";
          format: "uri";
          examples: ["http://api.github.com/repos/octocat/Hello-World/merges"];
        };
        milestones_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/milestones{/number}"
          ];
        };
        notifications_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}"
          ];
        };
        pulls_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/pulls{/number}"
          ];
        };
        releases_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/releases{/id}"
          ];
        };
        ssh_url: {
          type: "string";
        };
        stargazers_url: {
          type: "string";
          format: "uri";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/stargazers"
          ];
        };
        statuses_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/statuses/{sha}"
          ];
        };
        subscribers_url: {
          type: "string";
          format: "uri";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/subscribers"
          ];
        };
        subscription_url: {
          type: "string";
          format: "uri";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/subscription"
          ];
        };
        tags_url: {
          type: "string";
          format: "uri";
          examples: ["http://api.github.com/repos/octocat/Hello-World/tags"];
        };
        teams_url: {
          type: "string";
          format: "uri";
          examples: ["http://api.github.com/repos/octocat/Hello-World/teams"];
        };
        trees_url: {
          type: "string";
          examples: [
            "http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}"
          ];
        };
        clone_url: {
          type: "string";
        };
        mirror_url: {
          type: ["string", "null"];
        };
        hooks_url: {
          type: "string";
          format: "uri";
          examples: ["http://api.github.com/repos/octocat/Hello-World/hooks"];
        };
        svn_url: {
          type: "string";
        };
        homepage: {
          type: ["string", "null"];
        };
        language: {
          type: ["string", "null"];
        };
        forks_count: {
          type: "integer";
        };
        stargazers_count: {
          type: "integer";
        };
        watchers_count: {
          type: "integer";
        };
        size: {
          description: "The size of the repository, in kilobytes. Size is calculated hourly. When a repository is initially created, the size is 0.";
          type: "integer";
        };
        default_branch: {
          type: "string";
        };
        open_issues_count: {
          type: "integer";
        };
        is_template: {
          type: "boolean";
        };
        topics: {
          type: "array";
          items: {
            type: "string";
          };
        };
        has_issues: {
          type: "boolean";
        };
        has_projects: {
          type: "boolean";
        };
        has_wiki: {
          type: "boolean";
        };
        has_pages: {
          type: "boolean";
        };
        has_downloads: {
          type: "boolean";
        };
        has_discussions: {
          type: "boolean";
        };
        archived: {
          type: "boolean";
        };
        disabled: {
          type: "boolean";
        };
        visibility: {
          type: "string";
        };
        pushed_at: {
          type: ["string", "null"];
          format: "date-time";
          examples: ["2011-01-26T19:06:43Z"];
        };
        created_at: {
          type: ["string", "null"];
          format: "date-time";
          examples: ["2011-01-26T19:01:12Z"];
        };
        updated_at: {
          type: ["string", "null"];
          format: "date-time";
          examples: ["2011-01-26T19:14:43Z"];
        };
        permissions: {
          type: "object";
          properties: {
            admin: {
              type: "boolean";
            };
            maintain: {
              type: "boolean";
            };
            push: {
              type: "boolean";
            };
            triage: {
              type: "boolean";
            };
            pull: {
              type: "boolean";
            };
          };
        };
        role_name: {
          type: "string";
          examples: ["admin"];
        };
        temp_clone_token: {
          type: "string";
        };
        delete_branch_on_merge: {
          type: "boolean";
        };
        subscribers_count: {
          type: "integer";
        };
        network_count: {
          type: "integer";
        };
        code_of_conduct: {
          title: "Code Of Conduct";
          description: "Code Of Conduct";
          type: "object";
          properties: {
            key: {
              type: "string";
              examples: ["contributor_covenant"];
            };
            name: {
              type: "string";
              examples: ["Contributor Covenant"];
            };
            url: {
              type: "string";
              format: "uri";
              examples: [
                "https://api.github.com/codes_of_conduct/contributor_covenant"
              ];
            };
            body: {
              type: "string";
              examples: [
                "# Contributor Covenant Code of Conduct\n\n## Our Pledge\n\nIn the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.\n\n## Our Standards\n\nExamples of behavior that contributes to creating a positive environment include:\n\n* Using welcoming and inclusive language\n* Being respectful of differing viewpoints and experiences\n* Gracefully accepting constructive criticism\n* Focusing on what is best for the community\n* Showing empathy towards other community members\n\nExamples of unacceptable behavior by participants include:\n\n* The use of sexualized language or imagery and unwelcome sexual attention or advances\n* Trolling, insulting/derogatory comments, and personal or political attacks\n* Public or private harassment\n* Publishing others' private information, such as a physical or electronic address, without explicit permission\n* Other conduct which could reasonably be considered inappropriate in a professional setting\n\n## Our Responsibilities\n\nProject maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response\n                  to any instances of unacceptable behavior.\n\nProject maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.\n\n## Scope\n\nThis Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address,\n                  posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.\n\n## Enforcement\n\nInstances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [EMAIL]. The project team will review and investigate all complaints, and will respond in a way that it deems appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.\n\nProject maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.\n\n## Attribution\n\nThis Code of Conduct is adapted from the [Contributor Covenant](http://contributor-covenant.org), version 1.4, available at [http://contributor-covenant.org/version/1/4](http://contributor-covenant.org/version/1/4/).\n"
              ];
            };
            html_url: {
              type: ["string", "null"];
              format: "uri";
            };
          };
          required: ["url", "html_url", "key", "name"];
        };
        license: {
          type: ["object", "null"];
          properties: {
            key: {
              type: "string";
            };
            name: {
              type: "string";
            };
            spdx_id: {
              type: "string";
            };
            url: {
              type: "string";
            };
            node_id: {
              type: "string";
            };
          };
        };
        forks: {
          type: "integer";
          examples: [0];
        };
        open_issues: {
          type: "integer";
          examples: [0];
        };
        watchers: {
          type: "integer";
          examples: [0];
        };
        allow_forking: {
          type: "boolean";
        };
        web_commit_signoff_required: {
          type: "boolean";
          examples: [false];
        };
        security_and_analysis: {
          type: ["object", "null"];
          properties: {
            advanced_security: {
              type: "object";
              properties: {
                status: {
                  type: "string";
                  enum: ["enabled", "disabled"];
                };
              };
            };
            dependabot_security_updates: {
              description: "Enable or disable Dependabot security updates for the repository.";
              type: "object";
              properties: {
                status: {
                  description: "The enablement status of Dependabot security updates for the repository.";
                  type: "string";
                  enum: ["enabled", "disabled"];
                };
              };
            };
            secret_scanning: {
              type: "object";
              properties: {
                status: {
                  type: "string";
                  enum: ["enabled", "disabled"];
                };
              };
            };
            secret_scanning_push_protection: {
              type: "object";
              properties: {
                status: {
                  type: "string";
                  enum: ["enabled", "disabled"];
                };
              };
            };
            secret_scanning_non_provider_patterns: {
              type: "object";
              properties: {
                status: {
                  type: "string";
                  enum: ["enabled", "disabled"];
                };
              };
            };
          };
        };
      };
      required: [
        "archive_url",
        "assignees_url",
        "blobs_url",
        "branches_url",
        "collaborators_url",
        "comments_url",
        "commits_url",
        "compare_url",
        "contents_url",
        "contributors_url",
        "deployments_url",
        "description",
        "downloads_url",
        "events_url",
        "fork",
        "forks_url",
        "full_name",
        "git_commits_url",
        "git_refs_url",
        "git_tags_url",
        "hooks_url",
        "html_url",
        "id",
        "node_id",
        "issue_comment_url",
        "issue_events_url",
        "issues_url",
        "keys_url",
        "labels_url",
        "languages_url",
        "merges_url",
        "milestones_url",
        "name",
        "notifications_url",
        "owner",
        "private",
        "pulls_url",
        "releases_url",
        "stargazers_url",
        "statuses_url",
        "subscribers_url",
        "subscription_url",
        "tags_url",
        "teams_url",
        "trees_url",
        "url"
      ];
    };
  }

  interface GITHUB_RELAY_RESPONSE {
    profile: GITHUB_PROFILE_PRIVATE;
    repositories: any; // GITHUB_USER_REPOS
  }

  window.addEventListener("load", () => {
    let github_card: HTMLDivElement = document.getElementById(
      "github-card"
    ) as HTMLDivElement;
    if (!sessionStorage.getItem("update-github-time"))
      sessionStorage.setItem("update-github-time", Date.now().toString());

    setTimeout(() => {
      sessionStorage.setItem("update-github-time", Date.now().toString());

      fetch(GITHUB_RELAY).then(async (r: Response) => {
        let json: GITHUB_RELAY_RESPONSE = await r.json();
        console.log("Github data loaded:", json);
        github_card.innerHTML = "";
        Object.keys(json.profile).forEach((key: string) => {
          github_card.innerText += `${key}: ${String(json.profile[key])}\n`;
        });
      });
    }, GITHUB_UPDATE_RATE_LIMIT - (Date.now() - Number(sessionStorage.getItem("update-github-time"))) + 500);
  });
})();
