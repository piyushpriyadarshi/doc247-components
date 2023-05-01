import React from "react";
import { useRouter } from "next/router";
function Logo(props) {
  const router = useRouter();
  return (
    <img
      src={"/sharemycode_512.png"}
      height="140"
      width="140"
      {...props}
      onClick={() => router.push("/")}
      className="cursor-pointer"
    />
  );
}

export default Logo;
