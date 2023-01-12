export class ValidUrlLength {
  public urlLength = (url: string) => {
    const uri = url.split("/");
    const shortenedString = uri[uri.length - 1];
    const result = shortenedString.length > 11;
    return result;
  };
}
