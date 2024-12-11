export const uploadImageAsync = async (
  imageBuffer: string,
  imageName: string,
): Promise<string> => {
  const privatekey = process.env.IMAGE_KIT_PRIVATE_KEY;
  if (!privatekey) return "";
  const endpoint = "https://upload.imagekit.io/api/v1/files/upload";

  const options = {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(`${privatekey}:`)}`,
    },
    body: new FormData(),
  };

  options.body.append("file", imageBuffer);
  options.body.append("fileName", imageName);

  const res = await fetch(endpoint, options);
  const response = await res.json();

  return response.url as string;
};
