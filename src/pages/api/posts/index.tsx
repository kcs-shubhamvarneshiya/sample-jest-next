import nextConnect from "next-connect";
import dbConnect from "@/Database/dbConnect";
import Posts from "@/Database/model/Posts";


/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
const handler = nextConnect()
  .get(async (req: any, res: any) => {
    Posts.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json({ Message: error.message });
      });
  })
  .post(async (req: any, res: any) => {
    Posts.create(req.body)
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((error) => {
        res.status(500).json({
          Message: error.message,
        });
      });
  });

export default dbConnect(handler);
