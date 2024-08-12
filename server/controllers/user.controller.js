export const generateLink = (req, res) => {
  res.json({ status: true, message: "Working fine ..!", data: {} });
};
export const getRedirectionLink = (req, res) => {
  const shorturl = req.params.link;
  console.log(data);
  res.json({ status: true, message: "Working fine ..!", data: {} });
};
