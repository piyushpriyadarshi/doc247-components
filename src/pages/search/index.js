import FullScreenDialog from "@/Components/commons/FullScreenDialog";
import { useRouter } from "next/router";
import React from "react";

function Search() {
  const router = useRouter();
  return (
    <FullScreenDialog
      open={true}
      onClose={() => {
        router.back();
      }}
    />
  );
}

export default Search;
