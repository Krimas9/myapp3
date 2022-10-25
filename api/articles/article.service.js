const Article = require("./articles.schema");

class ArticleService {
  getAll() {
    return Article.find();
  }
  get(id) {
    return Article.findById(id);
  }
}

module.exports = new ArticleService();