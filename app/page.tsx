import { Card } from "@/components/ui/card";
import Image from "next/image";
import NumberTicker from "@/components/ui/number-ticker";
import Link from "next/link";
import Events from "@/components/EventsCard";

export default function Home() {
  return (
    <div className="mx-12 my-2">
      <Card className="p-16 rounded-3xl">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-6 flex">
            <Image
              src="/home.svg"
              alt="Home"
              width={800}
              height={500}
              className="bg-gray-400 rounded-xl"
            />
          </div>
          <div className="col-span-4 flex flex-col pl-10 h-full justify-between">
            <div>
              <p className="text-4xl">Welcome</p>
              <h1 className="text-7xl font-bold">Cyborg IIITD</h1>
              <p className="mt-3 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex w-full justify-between">
              <div>
                <NumberTicker value={80} className="font-bold text-5xl" />
                <p className="text-2xl font-light">Members</p>
              </div>
              <div>
                <NumberTicker value={100} className="font-bold text-5xl" />
                <p className="text-2xl font-light">Project Ideas</p>
              </div>
              <div>
                <NumberTicker value={50} className="font-bold text-5xl" />
                <p className="text-2xl font-light">Alumni</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card className="my-10 p-16">
        <div className="flex justify-between">
          <div className="font-bold text-4xl">Events</div>
          <Link href="/events" passHref>
            <div className="hover:underline">View All</div>
          </Link>
        </div>
        <div className="flex gap-14 mt-4">
          <Events />
          <Events />
          <Events />
        </div>
      </Card>
      <Card className="my-10 p-16">
        <div className="flex justify-between">
          <div className="font-bold text-4xl">Achievements</div>
          <Link href="/achievements" passHref>
            <div className="hover:underline">View All</div>
          </Link>
        </div>
      </Card>
      <Card className="my-10 p-16">
        <div className="flex w-full justify-center">
          <div className="font-bold text-4xl">Alumni Says</div>
        </div>
      </Card>
    </div>
  );
}
