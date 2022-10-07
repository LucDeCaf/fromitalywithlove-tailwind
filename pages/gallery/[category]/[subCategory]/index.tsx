import CardGrid from "components/CardGrid";
import Heading from "components/Heading";
import { ImageType } from "lib/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

interface PageProps {
  images: ImageType[];
  category: string;
  subCategory: string;
}

const Page: NextPage<PageProps> = ({ images, category, subCategory }) => {
  return (
    <main className="p-4">
      <Heading>{subCategory}</Heading>
      <CardGrid images={images} />
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { category: "food", subCategory: "pasta" } },
      { params: { category: "food", subCategory: "bread" } },
      { params: { category: "food", subCategory: "meat" } },
      { params: { category: "food", subCategory: "fruit" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category, subCategory } = params as ParsedUrlQuery;
  const parsedCategory = typeof category !== "string" ? category![0] : category;
  const parsedSubCategory =
    typeof subCategory !== "string" ? subCategory![0] : subCategory;
  const res = await fetch("http://localhost:3000/api/get/image");
  const data = await res.json();
  if (!data.success) {
    throw new Error(data.message);
  }

  const subCategoryImages = data.data.filter((image: ImageType) =>
    image.categories.includes(parsedSubCategory)
  );

  return {
    props: {
      images: subCategoryImages,
      category: parsedCategory,
      subCategory: parsedSubCategory,
    },
    revalidate: 60,
  };
};

export default Page;
