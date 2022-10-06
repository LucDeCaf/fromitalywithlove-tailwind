import Card from "./Card";
import { nanoid } from "nanoid";
import { ImageType } from "lib/types";

const CardGrid = ({ images }: { images: ImageType[] }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {images.map((image) => (
        <Card
          key={nanoid()}
          src={image.downloadUrl}
          title={image.label}
          body={image.desc}
        />
      ))}
    </div>
  );
};

export default CardGrid;
