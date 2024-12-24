import Image from "next/image";

interface EventProps {
  EventName: string;
  EventDate: string;
  EventMonth: string;
  EventYear: string;
  EventImage: string;
  variant: "lavender" | "teal" | "yellow";
}

export default function Event({
  EventName,
  EventDate,
  EventMonth,
  EventYear,
  EventImage,
  variant,
}: EventProps) {
  const backgroundClasses = {
    lavender: {
      eventName: "bg-lavender-800",
      eventDate: "bg-lavender-900",
      eventMonth: "bg-lavender-700",
    },
    teal: {
      eventName: "bg-teal-700",
      eventDate: "bg-teal-800",
      eventMonth: "bg-teal-500",
    },
    yellow: {
      eventName: "bg-yellow-600",
      eventDate: "bg-yellow-800",
      eventMonth: "bg-yellow-500",
    },
  };

  return (
    <div className="w-full text-white transition-all hover:scale-105 cursor-pointer">
      <Image
        src={EventImage}
        alt={EventName}
        width={0}
        height={500}
        className="bg-gray-400 rounded-t-xl w-full"
      />
      <div
        className={`${backgroundClasses[variant].eventName} flex justify-center text-2xl p-2 font-semibold`}
      >
        {EventName}
      </div>

      <div className="grid grid-cols-3 rounded-bl-xl rounded-br-xl overflow-hidden">
        <div
          className={`${backgroundClasses[variant].eventDate} text-center font-bold text-6xl h-full flex items-center justify-center`}
        >
          {EventDate}
        </div>
        <div
          className={`${backgroundClasses[variant].eventMonth} col-span-2 text-center font-semibold text-4xl p-2`}
        >
          {EventMonth} <br />
          {EventYear}
        </div>
      </div>
    </div>
  );
}
