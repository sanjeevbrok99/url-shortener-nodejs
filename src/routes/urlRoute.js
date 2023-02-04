import express from "express";
import {
    shortUrl,
    redirectUrl
  } from "../controllers/urlController.js";
  import {validator } from '../middlewares/validator.js';
  import {
    urlShortenerValidation
  } from "../validators/Url.js";

const router = express.Router();
router.route("/createShortUrl").post(validator(urlShortenerValidation),shortUrl);
router.route("/redirect/:urlId").get(redirectUrl);
export default router;