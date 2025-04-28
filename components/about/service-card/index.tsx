import { Service } from "@/constants";
import Image from "next/image";

interface Props {
  title: string;
  listServices: Service[];
}

function ServiceCard({ title, listServices }: Props) {
  return (
    <>
      <h1 className="text-lg font-bold mb-6">{title}</h1>
      <div className="grid grid-cols-3 gap-4">
        {listServices.map(service => (
          <div
            key={service.label}
            className="flex items-center gap-x-2 px-4 py-2 border border-dashed rounded-lg"
          >
            {!!service?.icon && (
              <Image
                src={service.icon}
                alt={service.label.toLowerCase()}
                width={32}
                height={32}
              />
            )}
            {service.label}
          </div>
        ))}
      </div>
    </>
  );
}

export default ServiceCard;
