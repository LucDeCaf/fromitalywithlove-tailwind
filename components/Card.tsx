import Image from "next/image";
import { CardType } from "lib/types";
import Link from "next/link";

const Card = ({ src, title, body, path }: CardType): JSX.Element => {
  const content = (
    <>
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
    </>
  );

  return (
    <div className="border-2 border-teal-dark rounded-md font-poppins">
      {path ? (
        <Link href={path}>
          <a>{content}</a>
        </Link>
      ) : (
        <>{content}</>
      )}
    </div>
  );
};

export default Card;
