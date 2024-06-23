export const getVideoUrl = (name) => {
  return new URL(`../assets/video/${name}`, import.meta.url).href
}
