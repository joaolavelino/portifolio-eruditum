export const youtubeLink = (composer, title) => {
  const spaceTitle = title.replace(/,|:|-|\+/g, " ");
  const singleSpaceTitle = spaceTitle.replace(/\s+/g, " ");
  const formatedTitle = singleSpaceTitle.replace(/\s/g, "+");

  return `https://www.youtube.com/results?search_query=${composer}+${formatedTitle}`;
};
