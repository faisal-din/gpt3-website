import './article.css';
import PropTypes from 'prop-types';

const Article = ({ imgURL, date, title }) => {
  return (
    <div className="gpt3__blog-container__article ">
      <div className="gpt3__blog-container__article-image">
        <img src={imgURL} alt="blog" />
      </div>
      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

Article.propTypes = {
  imgURL: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Article;
