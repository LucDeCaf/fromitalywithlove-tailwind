import Image from "next/image";
import { CardType } from "lib/types";

const Card = ({ src, title, body }: CardType): JSX.Element => {
  return (
    <div className="border-2 border-teal-dark rounded-md font-poppins">
      <div className="bg-teal-dark">
        <Image
          src={src}
          alt={title}
          layout="responsive"
          width={1}
          height={1}
          objectFit="cover"
          className="rounded-t-md"
        />
      </div>
      <div className="p-3">
        <h3 className="text-3xl">{title}</h3>
        <p className="text-xl">{body}</p>
      </div>
    </div>
  );
};

export default Card;
