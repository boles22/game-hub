const getCroppedImageUrl = (url: string) => {
  // Implement your logic to crop the image based on the provided URL
  // Example: Use a library like Sharp or ImageMagick to crop the image
  // https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  // Return the cropped image URL
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
