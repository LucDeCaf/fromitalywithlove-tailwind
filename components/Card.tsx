import Image from "next/image";
import { CardType, LabelledPath } from "lib/types";
import { nanoid } from "nanoid";
import Link from "next/link";

const LinkItem = (path: LabelledPath): JSX.Element => {
  return (
    <li>
      <Link href={path.path}>
        <a>Go to {path.label}</a>
      </Link>
    </li>
  );
};

const Card = ({ src, title, body, paths }: CardType): JSX.Element => {
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
        {paths && (
          <ul className="mt-2 text-lg text-blue-500 active:text-blue-600">
            {paths.map((path) => (
              <LinkItem key={nanoid()} path={path.path} label={path.label} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
