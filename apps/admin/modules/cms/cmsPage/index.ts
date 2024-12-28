import { ModuleCMSCelebrationHome } from "./celebrations/home";
import { ModuleCMSCelebrationAbout } from "./celebrations/about";
import { ModuleCMSEventAbout } from "./events/about";
import { ModuleCMSEventHome } from "./events/home";

export const ModuleCMSPage = {
  Celebrations: {
    Home: ModuleCMSCelebrationHome,
    About: ModuleCMSCelebrationAbout,
  },
  Events: {
    Home: ModuleCMSEventHome,
    About: ModuleCMSEventAbout,
  },
};
