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

interface STEAM_PROFILE {
  user: string;
  name: string;
  id: string;
  picture: string;
}

const STEAM_RELAY: string = "https://still-wood-a68b.videocreator.workers.dev/",
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
          profileurl: "https://steamcommunity.com/profiles/76561199546162068/",
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
          profileurl: "https://steamcommunity.com/profiles/76561199546162068/",
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

function browser_compatible(): string[] {
  let ret: string[] = [];

  // Add compatibility checks here
  if (window.innerWidth < 480)
    ret.push(`Window width very low (${window.innerWidth}px < 480px)`);
  if (window.innerHeight < 300)
    ret.push(`Window height very low (${window.innerHeight}px < 300px)`);
  let safari_match: RegExpExecArray | null = /.* (Safari\/[\d\.]+)/.exec(
    navigator.userAgent
  );
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
