import { deprecate } from "util";

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

interface STEAM_GAME_INFO {
  success: boolean;
  data: {
    type: string;
    name: string;
    steam_appid: number;
    required_age: number;
    is_free: boolean;
    dlc: number[];
    detailed_description: string;
    about_the_game: string;
    short_description: string;
    supported_languages: string;
    reviews: string;
    header_image: string;
    capsule_image: string;
    capsule_imagev5: string;
    website: string;
    pc_requirements: {
      minimum: string;
    };
    mac_requirements: {
      minimum: string;
    };
    linux_requirements: {
      minimum: string;
    };
    developers: string[];
    publishers: string[];
    price_overview: any;
    packages: number[];
    package_groups: any;
    platforms: {
      windows: boolean;
      mac: boolean;
      linux: boolean;
    };
    categories: {
      id: number;
      description: string;
    }[];
    genres: {
      id: string;
      description: string;
    }[];
    screenshots: {
      id: number;
      path_thumbnail: string;
      path_full: string;
    }[];
    movies: {
      id: number;
      name: string;
      thumbnail: string;
      highlight: true;
    }[];
    recommendations: any;
    achievements: any;
    release_date: {
      coming_soon: boolean;
      date: string;
    };
    support_info: any;
    background: string;
    background_raw: string;
    content_descriptors: any;
    ratings: any;
  };
}

async function create_steam_game_node(appid: number) {
  let response = await fetch(
    `https://store.steampowered.com/api/appdetails?appids=${appid}`
  );

  let game_info: STEAM_GAME_INFO = (await response.json())[appid];
  if (!game_info["success"]) return null;

  let game_node: HTMLDivElement = document.createElement("div");
  if (game_info.data.header_image)
    game_node.style.backgroundImage = `url(${game_info.data.header_image})`;
  else if (game_info.data.capsule_image)
    game_node.style.backgroundImage = `url(${game_info.data.capsule_image})`;
  /* Ok I found out how to embed steam store widgets in iframes, so there go the last 2 hours of my life. */
}

function get_steam_profile(): Promise<Response> {
  return fetch(STEAM_RELAY);
}

window.addEventListener("load", () => {
  let steam_mini_profile: HTMLDivElement = document.getElementById(
    "steam-profile"
  ) as HTMLDivElement;
  let steam_profile_nodes = {
    picture: steam_mini_profile.querySelector("img") as HTMLImageElement,
    user: steam_mini_profile.getElementsByTagName("div")[0],
    name: steam_mini_profile.getElementsByTagName("div")[1],
    status: steam_mini_profile.getElementsByTagName("div")[2],
  };
  function set_steam_status(
    status: null | 0 | 1 | 2 | { name: string; url: string },
    profile: STEAM_PROFILE = STEAM_DEFAULTS
  ) {
    switch (status) {
      case null:
        steam_profile_nodes.picture.src = profile.picture;
        steam_profile_nodes.user.innerText = profile.user;
        break;

      default:
        break;
    }
  }

  return;

  get_steam_profile().then(async (r: Response) => {
    if (!r.ok) set_steam_status(null);
    let json: STEAM_PROFILE_RAW = await r.json();
    set_steam_status(json.response.players[0]);
  });
  // add widgets later https://community.chrono.gg/t/what-are-your-all-time-favorite-indie-games-on-steam/15004/2
  // https://stackoverflow.com/a/69512412/25675276
});
