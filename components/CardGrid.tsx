import Card from "./Card";
import { nanoid } from "nanoid";
import { CardGridType } from "lib/types";

const CardGrid = ({ images, links }: CardGridType) => {
  return (
    <>
      {images.length !== 0 ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {images.map((image) => (
            <Card
              key={nanoid()}
              src={image.downloadUrl}
              title={image.label}
              body={image.desc}
              paths={image.links && links ? image.links : undefined}
            />
          ))}
        </div>
      ) : (
        <h2 className="font-poppins text-3xl text-center font-medium underline">
          No Images
        </h2>
      )}
    </>
  );
};

export default CardGrid;
