import { longUrlDTO, shortUrlDTO } from "./../models/urlIterface";
import { UrlBusiness } from "./../business/urlBusiness";
import { Request, Response } from "express";

export class UrlController {
  constructor(private urlBusiness: UrlBusiness) {}

  public createShortUrl = async (req: Request, res: Response) => {
    try {
      const { origUrl } = req.body;
      const url: longUrlDTO = {
        origUrl,
      };
      const newUrl = await this.urlBusiness.createShortUrl(url);
      res.status(201).send({ shortUrl: newUrl });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };

  public getOriginUrl = async (req: Request, res: Response) => {
    try {
      const { shortUrl } = req.body;

      const url: shortUrlDTO = {
        shortUrl,
      };
      const origin = await this.urlBusiness.getOriginUrl(url);

      res.status(200).send({ originURL: origin });
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message);
    }
  };
}
