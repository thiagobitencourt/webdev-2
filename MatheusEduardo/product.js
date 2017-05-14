function ProductDAO() {

  this.findAll = (req, res) => [];
  this.findOne = (req, res) => {};
  this.insert = (req, res) => true;
  this.update = (req, res) => true;
  this.delete = (req, res) => true;
}

module.exports = new ProductDAO();