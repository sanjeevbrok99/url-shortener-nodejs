import Url from "../models/Url.js";
import { validateUrl } from '../utils/utils.js';
import dotenv from 'dotenv';
// URL shortener endpoint
export const shortUrl=  async (req, res) => {
    console.log("HERE",req.body.url);
    const { origUrl } = req.body;
    const base = process.env.BASE;
  
    const urlId = shortid.generate();
    if (utils.validateUrl(origUrl)) {
      try {
        let url = await Url.findOne({ origUrl });
        if (url) {
          res.json(url);
        } else {
          const shortUrl = `${base}/${urlId}`;
  
          url = new Url({
            origUrl,
            shortUrl,
            urlId,
            date: new Date(),
          });
  
          await url.save();
          res.json(url);
        }
      } catch (err) {
        console.log(err);
        res.status(500).json('Server Error');
      }
    } else {
      res.status(400).json('Invalid Original Url');
    }
  };
  
  // redirect endpoint
  export const redirectUrl =  async (req, res) => {
    try {
      const url = await Url.findOne({ urlId: req.params.urlId });
      console.log(url)
      if (url) {
        url.clicks++;
        url.save();
        return res.redirect(url.origUrl);
      } else res.status(404).json("Not found");
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  };