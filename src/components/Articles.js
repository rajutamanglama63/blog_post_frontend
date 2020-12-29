import React from 'react'
import SingleArticle from './SingleArticle';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Article = () => {
    const articles = useSelector((state) => state.article);
    console.log(articles);
    return (
        !articles.length ? <i className="fa fa-spinner" aria-hidden="true"></i> : (
            <div className="container">
                <div className="article-list">
                    {
                        articles.map((article) => (
                            <SingleArticle key={article._id} article={article} />
                        ))
                    }
                </div>
                <div className="btn-link-to-create-page">
                    <Link to="/create" className="create-article">
                        Create Article
                    </Link>
                </div>
            </div>
        )
    )
}

export default Article
