import { ModuleCelebrationsAbout } from "./about";
import { ModuleCelebrationsContact } from "./contact";
import { ModuleCelebrationsEvents } from "./event";
import { ModuleCelebrationEventProfile } from "./event-profile";
import { ModuleEventsHome } from "./home";

export const ModuleCelebrations = {
  Home: ModuleEventsHome,
  About: ModuleCelebrationsAbout,
  Contact: ModuleCelebrationsContact,
  Events: ModuleCelebrationsEvents,
  EventProfile: ModuleCelebrationEventProfile,
};
