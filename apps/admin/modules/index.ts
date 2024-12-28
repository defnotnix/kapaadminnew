import { ModuleAuth } from "./auth";
import { ModuleClientInvoices } from "./client-invoices";
import { ModuleClients } from "./clients";
import { ModuleCMSPage } from "./cms/cmsPage";
import { ModuleCMSConfig } from "./cms/config";
import { ModuleCMSIntro } from "./cms/intro";
import { ModuleCompany } from "./company";
import { ModuleCompanyHours } from "./company-hours";
import { ModuleDashboard } from "./dashboard";
import { ModuleEventCategory } from "./event-category";
import { ModuleEvents } from "./events";
import { ModuleInquiry } from "./inquiry";
import { ModuleTestimonials } from "./testimonial";

export const Modules = {
  Auth: ModuleAuth,
  //ADMIN
  Dashboard: ModuleDashboard,
  Company: ModuleCompany,
  CompanyHours: ModuleCompanyHours,
  Testimonials: ModuleTestimonials,
  Clients: ModuleClients,
  ClientInvoices: ModuleClientInvoices,
  Events: ModuleEvents,
  EventCategory: ModuleEventCategory,
  Inquiry: ModuleInquiry,
  //CMS
  CMSIntro: ModuleCMSIntro,
  CMSConfig: ModuleCMSConfig,
  CMSPage: ModuleCMSPage,
};
