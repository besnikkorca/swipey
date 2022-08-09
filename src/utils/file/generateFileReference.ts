import { CloudDirs } from "types/global";
import fileNameFromFilePath from "./fileNameFromFilePath";

export default function (
  cloudDir: CloudDirs,
  userUid: string | undefined,
  filePath: string
) {
  if (!userUid) throw Error("No user uid provided");

  return `${cloudDir}/${userUid}/${fileNameFromFilePath(filePath)}`;
}
