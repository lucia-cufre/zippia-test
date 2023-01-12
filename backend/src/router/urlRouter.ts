import { UrlController } from "./../controller/urlController";
import { ValidateUrl } from "../services/validateUrl";
import { UrlBusiness } from "./../business/urlBusiness";
import express from "express";
import { ValidUrlLength } from "../services/shortUrlLength";

const validateUrl = new ValidateUrl();
const validateLength = new ValidUrlLength();
const urlBusiness = new UrlBusiness(validateUrl, validateLength);
const urlController = new UrlController(urlBusiness);
export const urlRouter = express.Router();

urlRouter.post("/create-url", (req, res) =>
  urlController.createShortUrl(req, res)
);
urlRouter.get("/get-origin-url", (req, res) =>
  urlController.getOriginUrl(req, res)
);
