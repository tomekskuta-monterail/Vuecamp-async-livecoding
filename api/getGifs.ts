import memeCollection from "@/data/meme-collection.json";

export const getGifs = (
  shouldResolveSuccessfully = true
): Promise<MemeCollection> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolveSuccessfully) {
        resolve(memeCollection);
      } else {
        reject("Gifs cannot be fetched");
      }
    }, 2000);
  });
};
