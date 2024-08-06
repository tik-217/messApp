export function altImage(path: string) {
  const pathArr = path.split("/").at(-1);
  const imageName = pathArr && pathArr.split(".")[0];

  return imageName ?? "";
}
