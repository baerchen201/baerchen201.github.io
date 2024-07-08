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
  STEAM_DEFAULTS: STEAM_PROFILE = {
    name: "Georg M. H.",
    user: "videocreator",
    id: "76561199245129581",
    picture: "/me/0.png",
  };
const STEAM_EXAMPLE_RESPONSES: Object[] = [
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
];

interface STEAM_PROFILE_RAW {
  response: {
    players: {
      steamid: string;
      communityvisibilitystate: number;
      profilestate: number;
      personaname: string;
      profileurl: string;
      avatar: string;
      avatarmedium: string;
      avatarfull: string;
      avatarhash: string;
      lastlogoff: number;
      personastate: number;
      realname: string;
      primaryclanid: string;
      timecreated: number;
      personastateflags: number;
      gameextrainfo?: string;
      gameid?: string;
      loccountrycode: string;
      locstatecode: string;
    }[];
  };
}

function get_steam_profile(): Promise<Response> {
  return fetch(STEAM_RELAY);
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
  window.set_steam_status = function set_steam_status(
    status?: null | 0 | 1 | 2 | { name: string; id: string },
    profile: STEAM_PROFILE = STEAM_DEFAULTS
  ) {
    steam_profile_nodes.loading_wheel.style.display = "";
    steam_profile_nodes.status.className = "steamstatus";
    steam_profile_nodes.picture.src = profile.picture;
    steam_profile_nodes.user.innerText = profile.user;
    steam_profile_nodes.name.innerText = profile.name;
    steam_profile_nodes.status.innerHTML = "";
    switch (status) {
      case undefined:
        steam_profile_nodes.loading_wheel.style.display = "initial";
        steam_profile_nodes.status.classList.add("loading");
        break;
      case null:
        steam_profile_nodes.status.classList.add("unavailable");
        steam_profile_nodes.picture.src = "/img/steam_default.jpg";
        break;
      case 0:
        steam_profile_nodes.status.classList.add("offline");
        break;
      case 1:
        steam_profile_nodes.status.classList.add("online");
        break;
      case 2:
        steam_profile_nodes.status.classList.add("away");
        break;

      default:
        steam_profile_nodes.status.classList.add("ingame");
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
  };

  window.set_steam_status(undefined);

  return;

  get_steam_profile().then(async (r: Response) => {
    if (!r.ok) set_steam_status(null);
    let json: STEAM_PROFILE_RAW = await r.json();
    set_steam_status(json.response.players[0]);
  });
  // add widgets later https://community.chrono.gg/t/what-are-your-all-time-favorite-indie-games-on-steam/15004/2
  // https://stackoverflow.com/a/69512412/25675276
});
