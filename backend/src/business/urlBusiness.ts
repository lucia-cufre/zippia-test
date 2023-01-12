import dotenv from "dotenv";
import { ValidUrlLength } from "./../services/shortUrlLength";
import { ValidateUrl } from "../services/validateUrl";
import { longUrlDTO, shortUrlDTO } from "./../models/urlIterface";
import { nanoid } from "nanoid";
import Url from "../models/urlModel";
dotenv.config();

export class UrlBusiness {
  constructor(
    private validateUrl: ValidateUrl,
    private validateUrlLength: ValidUrlLength
  ) {}
  // @desc    Generates a short URL when the long URL is given
  // @route   POST /create-url
  public createShortUrl = async (input: longUrlDTO): Promise<string> => {
    try {
      const { origUrl } = input;

      const base = process.env.BASE_URL;
      const urlId = nanoid(11);
      const shortUrl = `${base}/${urlId}`;

      if (!origUrl) {
        throw new Error("Must inform an URL.");
      }
      let urlExists = await Url.findOne({ origUrl });

      if (urlExists) {
        return urlExists.shortUrl;
      }

      if (this.validateUrlLength.urlLength(shortUrl)) {
        throw new Error(
          "An error exists in the base URL length, or in the shortened string length. The max length is 11 bytes for each."
        );
      }

      if (!this.validateUrl.regexValidUrl(origUrl)) {
        throw new Error("Must inform a valid URL.");
      }

      const newUrl = await Url.create({
        urlId,
        origUrl,
        shortUrl,
        date: new Date(),
      });

      return newUrl.shortUrl;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  // @desc    Provides a long URL based on the given short URL
  // @route   GET /get-origin-url
  public getOriginUrl = async (input: shortUrlDTO): Promise<string> => {
    try {
      const { shortUrl } = input;

      if (!shortUrl) {
        throw new Error("Must provide the short Url information.");
      }

      if (!this.validateUrl.regexValidUrl(shortUrl)) {
        throw new Error("Must inform a valid URL.");
      }

      const originUrl = await Url.findOne({ shortUrl });

      if (!originUrl) {
        throw new Error("Short URL expires or do not exists.");
      }

      return originUrl.origUrl;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
