import { useState } from "react";
import storage from "@react-native-firebase/storage";

import useUserData from "hooks/useUserData";
import generateFileReference from "utils/file/generateFileReference";
import { CloudDirs } from "types/global";

export default function (cloudDir: CloudDirs) {
  const { user } = useUserData();
  const [isLoading, setIsLoading] = useState(false);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const handleFileUpload = async (filePath: string) => {
    setIsLoading(true);
    setLoadPercentage(0);
    const reference = storage().ref(
      generateFileReference(cloudDir, user?.uid, filePath)
    );

    const task = reference.putFile(filePath);
    task.on("state_changed", (taskSnapshot) => {
      setLoadPercentage(
        Math.round(
          (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100
        )
      );
    });

    task.then(() => setIsLoading(false));
  };

  return {
    handleFileUpload,
    isLoading,
    loadPercentage,
  };
}
