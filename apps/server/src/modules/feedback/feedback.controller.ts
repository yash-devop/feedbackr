import { Request, Response } from "express";

const FeedBackController = {
  getFeedback: async (req: Request, res: Response) => {
    const user = req.user;
    res.status(200).json({
      user: user,
      message: "Feedback Data",
    });
  },
};

export { FeedBackController };
