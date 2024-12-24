import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <div className="bg-lavender-900 p-10 text-white grid grid-cols-3 gap-6">
      <div>
        <div className="flex space-x-4">
          <Link href="/" passHref>
            <Image src="/logo.svg" alt="logo" width={80} height={80} />
          </Link>
          <div>
            <div className="font-bold text-3xl">Cyborg</div>
            <p className="text-sm opacity-75">
              Indraprastha Institute of Information Technology <br />
              Delhi Okhla Industrial Estate, Phase III
              <br />
              (Near Govind Puri Metro Station) <br />
              New Delhi, India - 110020
            </p>
          </div>
        </div>
        <div className="flex gap-10 mt-10">
          <div>
            <div className="font-semibold text-lg">Designed by:</div>
            <div className="opacity-75">
              <Link href={"https://github.com/berserk-23115"}>
                <div>Anushk Kumar</div>
              </Link>
              <Link href={"https://github.com/devkala05"}>
                <div>Dev Sharma</div>
              </Link>
            </div>
          </div>
          <div>
            <div className="font-semibold text-lg">Developed by:</div>
            <Link href={"https://github.com/ayushk-1801"}>
              <div className="opacity-75">Ayush Kumar Anand</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-1 opacity-75">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/people" className="hover:underline">
                People
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <h3 className="font-bold text-lg mb-3">Follow Us</h3>
          <div className="flex gap-3 text-xl">
            <Button
              size={"icon"}
              className="rounded-full bg-lavender-800 hover:bg-lavender-700"
            >
              <FaGoogle size={"20"} />
            </Button>
            <Button
              size={"icon"}
              className="rounded-full bg-lavender-800 hover:bg-lavender-700"
            >
              <FaGithub />
            </Button>
            <Button
              size={"icon"}
              className="rounded-full bg-lavender-800 hover:bg-lavender-700"
            >
              <FaInstagram />
            </Button>
            <Button
              size={"icon"}
              className="rounded-full bg-lavender-800 hover:bg-lavender-700"
            >
              <SiGmail />
            </Button>
          </div>
          <div className="text-sm opacity-75 mt-4">
            © Copyright Cyborg 2025. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
