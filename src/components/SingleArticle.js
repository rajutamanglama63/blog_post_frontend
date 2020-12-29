import React from 'react'

const SingleArticle = ({ article }) => {
    

    return (
        <div>
            <div className="single-article">

                <div className="article-header">
                    <div className="title">
                        <h3>{article.title}</h3>
                        <p>{article.author}</p>
                    </div>
                    <div className="controller">
                        <div className="buttons">
                            <button className="del-btn">
                                <i className="fas fa-trash-alt"></i>
                            </button>
                            <button className="edit-btn">
                                <i className="fas fa-pencil-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="article-body">
                    <p>{article.article}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default SingleArticle
