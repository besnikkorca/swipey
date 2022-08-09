export default function fileNameFromFilePath(filePath: string): string {
  if (!filePath) return "";
  const splitName = filePath.split("/");
  return splitName[splitName.length - 1];
}
