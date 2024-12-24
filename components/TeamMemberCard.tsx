import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Button } from "./ui/button";

export default function TeamMemberCard({ imageSrc, name, designation, links }) {
  return (
    <div className="p-4 rounded-3xl w-[300px] bg-white mb-6">
      <Image
        src={imageSrc || "/default-profile.png"} // Fallback image if `imageSrc` is missing
        alt={`${name || "Team Member"} Profile Picture`}
        width={150}
        height={150}
        className="mx-auto rounded-full"
      />
      <div className="text-center mt-4 font-semibold text-lg">
        {name || "Name Unavailable"}
      </div>
      <div className="text-center mt-2 text-gray-600">
        {designation || "Designation Unavailable"}
      </div>
      <div className="flex gap-3 text-xl content-center justify-center mt-4">
        {links?.linkedin && (
          <Button
            size={"icon"}
            className="rounded-full bg-lavender-800 hover:bg-lavender-700"
          >
            <FaLinkedin size={20} />
          </Button>
        )}
        {links?.github && (
          <Button
            size={"icon"}
            className="rounded-full bg-lavender-800 hover:bg-lavender-700"
          >
            <FaGithub size={20} />
          </Button>
        )}
        {links?.instagram && (
          <Button
            size={"icon"}
            className="rounded-full bg-lavender-800 hover:bg-lavender-700"
          >
            <FaInstagram size={20} />
          </Button>
        )}
        {links?.gmail && (
          <Button
            size={"icon"}
            className="rounded-full bg-lavender-800 hover:bg-lavender-700"
          >
            <SiGmail size={20} />
          </Button>
        )}
      </div>
    </div>
  );
}
