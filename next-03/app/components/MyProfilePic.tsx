import Image from "next/image";
import React from "react";
import profile from "../../public/Images/kc pic _blacktshirt_crop.jpg";
export default function MyProfilePic() {
  return (
    <section className="w-max mx-auto ">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8 "
        src={profile}
        width={200}
        height={200}
        alt="Profile"
        priority={true}
      />
    </section>
  );
}
