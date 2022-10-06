import CardGrid from "components/CardGrid";
import Heading from "components/Heading";
import { ImageType } from "lib/types";
import { GetStaticProps, NextPage } from "next";

const Page: NextPage<{ images: ImageType[] }> = ({ images }) => {
  return (
    <main className="p-4">
      <Heading>Gallery</Heading>
      <CardGrid images={images} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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
