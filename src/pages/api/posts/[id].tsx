import nextConnect from "next-connect";
import dbConnect from "@/Database/dbConnect";
import Posts from "@/Database/model/Posts";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
const handler = nextConnect()
  .get(async (req: any, res: any) => {
    try {
      const { id } = req.query;
      const post = await Posts.findById({ _id: id });

      if (!post) {
        return res.status(404).json({
          Message: "Could not find post !!",
        });
      }
      return res.status(200).json(post);
    } catch (error) {
      res.status(500).json({
        Message: error,
      });
    }
  })
  .delete(async (req: any, res: any) => {
    try {
      const { id } = req.query;
      const row = await Posts.findByIdAndDelete({ _id: id });

      if (!row) {
        return res.status(404).json({
          Message: "Could not found post with given id",
        });
      }
      return res.status(200).json({
        Message: "Successfully Deleted !!",
      });
    } catch (error) {
      res.status(500).json({
        Message: error,
      });
    }
  })
  .put(async (req: any, res: any) => {
    try {
      console.log("Comming over here....");
      const { id } = req.query;
      
      const { Description, Author } = req.body;
      const post = await Posts.findById({ _id: id });

      console.log(post);
      if (post) {
        return res.status(404).json({
          Message: `No post found with id ${id}`,
        });
      }
      post.Description = Description;
      post.Author = Author;
      await post.save();

      return res.status(200).json({
        Message: "Record updated successfully",
      });
    } catch (error) {
      res.status(500).json({
        Message: error
      });
    }
  });

export default dbConnect(handler);
