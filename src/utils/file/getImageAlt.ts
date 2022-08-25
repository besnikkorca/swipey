export default function (path: string): string {
  const splitName = path?.split("/");
  return splitName?.[splitName?.length - 1];
}
