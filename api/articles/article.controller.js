const articleService = require("./article.service");

class ArticleController {
  async getAll(req, res, next) {
    try {
      const articles = await articleService.getAll();
      res.json(articles);
    } catch (err) {
      next(err);
    }
  }
  async getById(req, res, next) {
    try {
      const id = req.params.id;
      const article = await articleService.get(id)
      if (!article) {
        throw new NotFoundError();
      }
      res.json(articles);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ArticleController