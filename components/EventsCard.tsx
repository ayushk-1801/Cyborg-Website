import Image from "next/image";

export default function Event() {
  return (
    <div className="w-full text-white transition-all hover:scale-105">
      <Image
        src="/home.svg"
        alt="Home"
        width={0}
        height={500}
        className="bg-gray-400 rounded-xl wfull"
      />
      <div className="bg-lavender-800 flex justify-center text-2xl p-2">
        Event Name
      </div>

      <div className="grid grid-cols-3 rounded-bl-xl rounded-br-xl overflow-hidden">
        <div className="bg-lavender-900 text-center font-bold text-6xl h-full flex items-center justify-center">
          26
        </div>
        <div className="col-span-2 text-center font-semibold text-4xl bg-lavender-700 p-2">
          January <br />
          2024
        </div>
      </div>
    </div>
  );
}
