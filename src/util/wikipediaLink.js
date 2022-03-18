export const wikipediaLink = (string) => {
  const formatedString = string.replace(/\s/g, "_");

  return `https://en.wikipedia.org/wiki/${formatedString}`;
};
