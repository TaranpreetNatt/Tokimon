
module.exports = function(req, res, next) {
  if (!Number.isInteger(parseInt(req.params.id))) return res.status(400).send("Invalid ID"); 
  next();
}