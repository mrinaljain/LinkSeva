import Link from "../models/link.model.js";

export const createLink = async (req, res) => {
  const linkData = req.body;

  //TODO: create a unique hash for link and add to the short_url parameter if not given by user
  const newLink = await Link.create(linkData);

  if (newLink) {
    res.json({ status: true, message: "Working fine ..!", data: newLink });
  } else {
    res.json({ status: false, message: "Creation Failed", data: {} });
  }
};
export const getLink = async (req, res) => {
  const shorturl = req.params.link;

  const link = await Link.findOne({ short_url: shorturl });

  if (link) {
    res.status(200).json({
      status: true,
      message: "Working fine ..!",
      data: { url: link.url },
    });
  } else {
    res.status(200).json({
      status: false,
      message: "Not Exist",
      data: {},
    });
  }
};
