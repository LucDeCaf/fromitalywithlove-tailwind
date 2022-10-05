import Card from "components/Card";
import { GetStaticProps, NextPage } from "next";
import { nanoid } from "nanoid";
import { ImageType } from "lib/types";

const Page: NextPage<{ images: ImageType[] }> = ({ images }) => {
  return (
    <main className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <Card
            key={nanoid()}
            src={image.downloadUrl}
            title={image.label}
            body={image.desc}
          />
        ))}
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/get/image");
  const data = await res.json();
  if (!data.success) {
    throw new Error(data.message);
  }

  return {
    props: {
      images: data.data,
    },
    revalidate: 60,
  };
};

export default Page;
