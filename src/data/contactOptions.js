import { ReactComponent as DiscordIcon } from "../assets/icons/social/discord.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/social/linkedin.svg";
import { ReactComponent as GitHubIcon } from "../assets/icons/tecs/github.svg";

export const discord = {
  name: "Discord",
  id: "discord",
  link: "https://discordapp.com/users/JorgeSirp#0447",
  icon: {
    element: DiscordIcon,
    props: {
      fill: "#5865F2",
    },
  },
};

export const linkedin = {
  name: "LinkedIn",
  id: "linkedin",
  link: "https://www.linkedin.com/in/jorge-ma%C3%B1anes/",
  icon: {
    element: LinkedInIcon,
    props: {
      fill: "#0A66C2",
    },
  },
};

export const github = {
  name: "GitHub",
  id: "github",
  link: "https://github.com/SSIIRRPP",
  icon: {
    element: GitHubIcon,
    /* props: {
      fill: ""
    } */
  },
};

const contactOptions = [discord, linkedin, github];

export default contactOptions;
