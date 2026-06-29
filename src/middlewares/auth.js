const adminAuth = (req, res, next) => {
  console.log("admine auth gatting checked..!!");
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(403).send("Unauthorized access");
  } else {
    next();
  }
};
module.exports = { adminAuth };
