import { Request, Response } from "express";

const FeedBackController = {
  getFeedback: async (req: Request, res: Response) => {
    const user = req.user;

    res.jsonSuccess<typeof user>({
      status: 200,
      data: user,
      message: "Feedback Data",
    });
  },
};

export { FeedBackController };
