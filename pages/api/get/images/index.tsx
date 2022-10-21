import { NextApiHandler } from "next";
import { db } from "utils/firebase";
import { collection, getDocs } from "firebase/firestore";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: `Invalid method "${req.method}"`,
    });
  }

  try {
    const imagesRef = collection(db, "images");
    const images = await getDocs(imagesRef);
    const imagesData = images.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return res.status(200).json({ success: true, data: imagesData });
  } catch (error: any) {
    return res
      .status(400)
      .json({ success: false, message: error.message, code: error.code });
  }
};

export default handler;
