import { EMBED_TO, IMAGE_URL } from "./constants";

export const resizeImage = (
  imageUrl: string,
  width: string = "original"
): string => `${IMAGE_URL}/${width}${imageUrl}`;

export const embedMovie = (id: number | string | undefined): string =>
  `${EMBED_TO}/movie?id=${id}`;
