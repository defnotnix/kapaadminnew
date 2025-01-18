import { ModuleCelebrationAbout } from "./about";
import { ModuleCelebrationsContact } from "./contact";
import { ModuleCelebrationsEvents } from "./event";
import { ModuleCelebrationEventProfile } from "./event-profile";
import { ModuleCelebrationHome } from "./home";

export const ModulesCelebrations = {
  Home: ModuleCelebrationHome,
  About: ModuleCelebrationAbout,
  Event: ModuleCelebrationsEvents,
  EventProfile: ModuleCelebrationEventProfile,
  Contact: ModuleCelebrationsContact,
};
