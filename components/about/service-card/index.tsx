import { Service } from "@/constants";
import Image from "next/image";

interface Props {
  title: string;
  listServices: Service[];
}

function ServiceCard({ title, listServices }: Props) {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div className="flex flex-wrap gap-4">
        {listServices.map(service => (
          <div
            key={service.label}
            className="flex items-center gap-x-2 px-4 py-2 border border-dashed rounded-lg"
          >
            {!!service?.icon && (
              <Image
                src={service.icon}
                alt={service.label.toLowerCase()}
                width={28}
                height={28}
              />
            )}
            {service.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
