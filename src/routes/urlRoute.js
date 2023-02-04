import express from "express";
import {
    shortUrl,
    redirectUrl
  } from "../controllers/urlController.js";
const router = express.Router();
router.route("/createShortUrl").post(shortUrl);
router.route("/redirect/url").get(redirectUrl);
export default router;