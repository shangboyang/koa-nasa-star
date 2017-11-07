import columns from '../data/columns'
import articles from '../data/articles'

let timer = null;

class ArticleService {
  /**
   * 获取文章
   */
  static getArticles(data) {
    let articles

    if (data.code === 200 && data.body.articles.length > 0) {
      articles = data.body.articles
    } else {
      articles = []
    }

    return articles
  }

  static getTitles(data) {
    return data
  }

}

export default ArticleService
