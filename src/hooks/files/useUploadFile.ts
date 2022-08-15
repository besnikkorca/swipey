import { useState } from "react";
import storage from "@react-native-firebase/storage";

import useUserData from "hooks/useUserData";
import generateFileReference from "utils/file/generateFileReference";
import {
  CloudDirs,
  GenericStringVoidFunc,
  GenericVoidFunc,
} from "types/global";
import useSignUpData from "hooks/useSignUpData";

export default function (cloudDir: CloudDirs) {
  const { user } = useUserData();
  const {
    data: { email },
  } = useSignUpData();
  const [isLoading, setIsLoading] = useState(false);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const handleFileUpload =
    (onChange: GenericStringVoidFunc, onUpload?: GenericVoidFunc) =>
    async (filePath: string) => {
      setIsLoading(true);
      setLoadPercentage(0);
      const fileReferencePath = generateFileReference(
        cloudDir,
        // use userUid if the user is logged in
        // or if files are being uploaded during signup
        // use the entered email
        user?.uid || email,
        filePath
      );

      const reference = storage().ref(fileReferencePath);

      const task = reference.putFile(filePath);
      task.on("state_changed", (taskSnapshot) => {
        setLoadPercentage(
          Math.round(
            (taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100
          )
        );
      });

      task.then(() => {
        console.log("UPLOAD FILE DONE!! ");
        console.log("onUpload !!!!!!!! ", onUpload);
        onChange(fileReferencePath);
        if (onUpload) onUpload();
        setIsLoading(false);
      });
    };

  return {
    handleFileUpload,
    isLoading,
    loadPercentage,
  };
}
