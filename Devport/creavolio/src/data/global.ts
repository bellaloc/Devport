/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  faFacebook as facebook,
  faGithub as github,
  faLinkedin as linkedin,
  faInstagram as instagram,
  faYoutube as youtube,
  faSquareUpwork as upwork,
  faXTwitter as x,
  faDribbble as dribble,
  faBehance as behance,
} from "@fortawesome/free-brands-svg-icons";

// ==================[ true is dark theme by default and false is light theme by default ]================== //
export const is_dark_theme = true;
//

// ==================[ intersection observer animation ]================== //
export const is_animation_trigger_once = true;
//

// ==================[ home background ]================== //
export const is_default_background = true;
export const is_grid_spotlight = true;

// if there is landing_background_image_path, "is_grid_spotlight" and "is_default_background" should be false
export const landing_background_image_path = "";
//

// ==================[ theme panel ]================== //
export const theme_panel = true;
//

// ==================[ Social Links ]================== //

/*
  Available Social media icons
  |
  1 - facebook
  2 - github
  3 - linkedin
  4 - instagram
  5 - youtube
  6 - upwork
  7 - dribble
  8 - x
  9 - behance
*/

export const social_links = [
  // 1
  {
    Icon: dribble,
    link: "https://dribble.com",
    color: "pink",
  },

  // 2
  {
    Icon: github,
    link: "https://github.com",
    color: "black",
  },

  // 3
  {
    Icon: linkedin,
    link: "https://linkedin.com",
    color: "blue",
  },

  // 4
  {
    Icon: x,
    link: "https://x.com",
    color: "black",
  },

  // 5
  {
    Icon: instagram,
    link: "https://instagram.com",
    color: "fuchsia",
  },

  // 6
  {
    Icon: behance,
    link: "https://behance.com",
    color: "blue",
  },

  // 7
  {
    Icon: upwork,
    link: "https://upwork.com",
    color: "green",
  },

  // 8
  {
    Icon: youtube,
    link: "https://youtube.com",
    color: "red",
  },
] as const;
//
