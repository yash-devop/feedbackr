import express from "express";
import { UserDomainController } from "./userDomain.controller.js";
export const UserDomainRouter = express.Router();

UserDomainRouter.post("/", UserDomainController.createDomain);
UserDomainRouter.get("/", UserDomainController.getDomainsList);
UserDomainRouter.get("/exists", UserDomainController.checkUserHasDomain);
UserDomainRouter.get("/:domainId", UserDomainController.getDomain);
UserDomainRouter.patch("/:domainId", UserDomainController.updateDomainStatus);
