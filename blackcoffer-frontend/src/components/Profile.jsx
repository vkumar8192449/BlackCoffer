import React, { useEffect } from "react";

export const Profile = (prop) => {
  useEffect(() => {
    prop.settopbarcontent("Profile section");
  }, []);
  return (
    <div className="flex justify-center items-center h-[80vh] text-2xl">
      coming soon...
    </div>
  );
};
