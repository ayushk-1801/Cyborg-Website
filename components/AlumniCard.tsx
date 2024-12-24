import Image from "next/image";

interface AlumniProps {
  name: string;
  designation: string;
  says: string;
  image: string;
  variant: "tomato" | "teal" | "yellow";
}

export default function Alumni({
  name,
  designation,
  says,
  image,
  variant,
}: AlumniProps) {
  const backgroundClasses = {
    tomato: "bg-tomato-500",
    teal: "bg-teal-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div
      className={`w-full text-white p-8 rounded-2xl ${backgroundClasses[variant]}`}
    >
      <div className="flex gap-4">
        <Image
          src={image}
          alt={""}
          width={70}
          height={70}
          className="bg-gray-600 rounded-full"
        />
        <div>
          <h1 className="text-3xl font-bold">{name}</h1>
          <h3 className="text-lg">{designation}</h3>
        </div>
      </div>
      <div className="mt-4">{says}</div>
    </div>
  );
}
