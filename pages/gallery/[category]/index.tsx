import CardGrid from "components/CardGrid";
import Heading from "components/Heading";
import { ImageType } from "lib/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

interface PageProps {
  images: ImageType[];
  category: string;
}

const Page: NextPage<PageProps> = ({ images, category }) => {
  return (
    <main className="p-4">
      <Heading>{category}</Heading>
      <CardGrid images={images} />
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { category: "food" } },
      { params: { category: "places" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params as ParsedUrlQuery;
  const parsedCategory = typeof category !== "string" ? category![0] : category;
  const res = await fetch("http://localhost:3000/api/get/images");
  const data = await res.json();
  if (!data.success) {
    throw new Error(data.message);
  }

  const categoryImages = data.data.filter((image: ImageType) =>
    image.categories.includes(parsedCategory)
  );

  return {
    props: {
      images: categoryImages,
      category: parsedCategory,
    },
    revalidate: 60,
  };
};

export default Page;
