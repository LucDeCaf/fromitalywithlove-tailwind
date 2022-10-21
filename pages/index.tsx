import { GetStaticProps, NextPage } from "next";
import { ImageType } from "lib/types";
import Heading from "components/Heading";
import CardGrid from "components/CardGrid";

const Page: NextPage<{ images: ImageType[] }> = ({ images }) => {
  return (
    <main className="p-4">
      <Heading>From Italy, With Love</Heading>
      <CardGrid images={images} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/get/images");
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
