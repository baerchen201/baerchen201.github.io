var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var VERSION = "v2.0";
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
window.addEventListener("load", function () {
    var s = document.createElement("style");
    document.head.appendChild(s);
    s.sheet.insertRule("#version::after{content: \"Script ".concat(VERSION, "\"}"));
});
function _init_browser_compatibility() {
    function browser_compatible() {
        var ret = [];
        // Add compatibility checks here
        if (window.innerWidth < 480)
            ret.push("Window width very low (".concat(window.innerWidth, "px < 480px)"));
        if (window.innerHeight < 300)
            ret.push("Window height very low (".concat(window.innerHeight, "px < 300px)"));
        var safari_match = /.*Version\/([\d\.]+) (Safari\/[\d\.]+)/.exec(navigator.userAgent);
        if (safari_match)
            ret.push("Safari Browser is incompatible (\"".concat(safari_match[1], "\")"));
        var phone_match = /Mozilla\/5\.0 \((iPhone|Android);.+/.exec(navigator.userAgent);
        if (phone_match)
            ret.push("Phones are incompatible (".concat(phone_match[1], ")"));
        return ret;
    }
    function check_website_compatibility() {
        var is_browser_compatible = browser_compatible();
        console.log("Browser compatibility check result:", is_browser_compatible);
        if (is_browser_compatible.length)
            if (!sessionStorage.getItem("hide-compatibility-warning")) {
                if (confirm("Warning!\nThis website may not run correctly on your browser or device:\n" +
                    is_browser_compatible.join("\n") +
                    "\n\nOK: Hide, don't show again for this session\nCancel: Hide"))
                    sessionStorage.setItem("hide-compatibility-warning", "true");
            }
    }
    window.addEventListener("load", check_website_compatibility);
    window.addEventListener("resize", check_website_compatibility);
}
function _init_steam() {
    var STEAM_RELAY = "https://still-wood-a68b.videocreator.workers.dev/", STEAM_UPDATE_RATE_LIMIT = 5e3, STEAM_DEFAULTS = {
        name: "Georg M. H.",
        user: "videocreator",
        id: "76561199245129581",
        picture: "/me/0.png",
    };
    var _STEAM_EXAMPLE_RESPONSES = [
        {
            response: {
                players: [
                    {
                        steamid: "76561199245129581",
                        communityvisibilitystate: 3,
                        profilestate: 1,
                        personaname: "videocreator",
                        profileurl: "https://steamcommunity.com/id/baerchen201/",
                        avatar: "https://avatars.steamstatic.com/76c4df28062c408667bf2279276bc6b9f068dd0b.jpg",
                        avatarmedium: "https://avatars.steamstatic.com/76c4df28062c408667bf2279276bc6b9f068dd0b_medium.jpg",
                        avatarfull: "https://avatars.steamstatic.com/76c4df28062c408667bf2279276bc6b9f068dd0b_full.jpg",
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
                        avatar: "https://avatars.steamstatic.com/76c4df28062c408667bf2279276bc6b9f068dd0b.jpg",
                        avatarmedium: "https://avatars.steamstatic.com/76c4df28062c408667bf2279276bc6b9f068dd0b_medium.jpg",
                        avatarfull: "https://avatars.steamstatic.com/76c4df28062c408667bf2279276bc6b9f068dd0b_full.jpg",
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
                        avatar: "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
                        avatarmedium: "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg",
                        avatarfull: "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg",
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
                        avatar: "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg",
                        avatarmedium: "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg",
                        avatarfull: "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg",
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
    function get_steam_profile() {
        return fetch(STEAM_RELAY);
    }
    function get_steam_game_name(gameid) {
        return gameid; //Placeholder for now
    }
    window.addEventListener("load", function () {
        var steam_mini_profile = document.getElementById("steam-profile");
        var steam_profile_nodes = {
            picture: steam_mini_profile.getElementsByTagName("img")[0],
            loading_wheel: steam_mini_profile.getElementsByTagName("img")[1],
            user: steam_mini_profile.getElementsByTagName("div")[0],
            name: steam_mini_profile.getElementsByTagName("div")[1],
            status: steam_mini_profile.getElementsByTagName("div")[2],
        };
        function set_steam_status(status, profile) {
            if (profile === void 0) { profile = STEAM_DEFAULTS; }
            steam_profile_nodes.loading_wheel.style.display = "";
            steam_mini_profile.className = "";
            steam_profile_nodes.picture.src = profile.picture;
            steam_profile_nodes.picture.alt = "".concat(profile.user, "'s avatar");
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
                    steam_profile_nodes.picture.alt = "Steam default avatar";
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
                    var game_link = document.createElement("a");
                    game_link.href = "https://store.steampowered.com/app/".concat(status.id);
                    game_link.innerText = status.name;
                    game_link.target = "_blank";
                    steam_profile_nodes.status.appendChild(game_link);
                    var game_widget = document.createElement("iframe");
                    game_widget.src = "https://store.steampowered.com/widget/".concat(status.id);
                    game_widget.setAttribute("frameborder", "0");
                    game_widget.setAttribute("seamless", "seamless");
                    steam_profile_nodes.status.appendChild(game_widget);
                    break;
            }
        }
        function update_steam_profile(silent) {
            var _this = this;
            if (silent === void 0) { silent = false; }
            if (!silent)
                set_steam_status();
            if (sessionStorage.getItem("update-steam-time") &&
                Date.now() - Number(sessionStorage.getItem("update-steam-time")) <
                    STEAM_UPDATE_RATE_LIMIT)
                return false;
            sessionStorage.setItem("update-steam-time", Date.now().toString());
            get_steam_profile().then(function (r) { return __awaiter(_this, void 0, void 0, function () {
                var json, player_info, status;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!r.ok) {
                                set_steam_status(null);
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, r.json()];
                        case 1:
                            json = _a.sent();
                            player_info = json.response.players[0];
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
                                    id: player_info.gameid,
                                    name: "gameextrainfo" in player_info
                                        ? player_info.gameextrainfo
                                        : get_steam_game_name(player_info.gameid),
                                };
                            set_steam_status(status, {
                                id: player_info.steamid,
                                name: "realname" in player_info
                                    ? player_info.realname
                                    : STEAM_DEFAULTS.name,
                                picture: player_info.avatarfull,
                                user: player_info.personaname,
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
            return true;
        }
        var steam_kickstart_function = function () {
            if (update_steam_profile()) {
                console.log("Steam profile loaded");
                setInterval(function () {
                    if (document.hasFocus())
                        update_steam_profile(true);
                    else
                        document.body.setAttribute("update-steam-profile", "");
                }, 300000);
            }
            else
                setTimeout(steam_kickstart_function, STEAM_UPDATE_RATE_LIMIT -
                    (Date.now() - Number(sessionStorage.getItem("update-steam-time"))) +
                    500);
        };
        steam_kickstart_function();
        window.addEventListener("focus", function () {
            if (!document.body.hasAttribute("update-steam-profile"))
                return;
            document.body.removeAttribute("update-steam-profile");
            update_steam_profile(true);
        });
        window.set_steam_status = set_steam_status; // Development thing, so the test buttons work
        window.update_steam_profile = update_steam_profile;
        // https://stackoverflow.com/a/69512412/25675276
    });
}
_init_browser_compatibility();
_init_steam();
