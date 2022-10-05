import Card from "components/Card";
import { GetStaticProps, NextPage } from "next";
import { nanoid } from "nanoid";

const Page: NextPage = ({}) => {
  return (
    <main className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {["", "", "", "", "", ""].map(() => (
          <Card
            key={nanoid()}
            src="/treeimg.jpeg"
            title="This is a tree"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium perspiciatis maxime perferendis doloribus deleniti atque velit quia at nam rerum, iste delectus, dolore odio doloremque dolorum? Impedit voluptatem sequi commodi?"
          />
        ))} 
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  return {
    props: {

    },
    revalidate: 60,
  }
}

export default Page;
