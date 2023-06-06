import React from "react";
import { useRouter } from "next/router";
function Logo(props) {
  const router = useRouter();
  return (
    <img
      src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2-pK6VTfBp5QZbB4aM2NvQFtdEVfZNJTOjWrddg6jlCU17TR9C8oHaIGUf2dM3610kY&usqp=CAU"}
      height="140"
      width="140"
      {...props}
      onClick={() => router.push("/")}
      className="cursor-pointer"
    />
  );
}

export default Logo;
