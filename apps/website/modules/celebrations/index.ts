import { ModuleCelebrationsEvents } from "@/modules_new/celebrations/events";
import { ModuleCelebrationsAbout } from "./about";
import { ModuleCelebrationsContact } from "./contact";
import { ModuleCelebrationsHome } from "./home";
import { ModuleCelebrationEvent } from "./event";

export const ModuleCelebrations = {
  Home: ModuleCelebrationsHome,
  About: ModuleCelebrationsAbout,
  Contact: ModuleCelebrationsContact,
  Events: ModuleCelebrationsEvents,
  Event: ModuleCelebrationEvent,
};
