import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postArticle } from '../redux/articles/action'
import { useHistory } from 'react-router-dom'


const Create = () => {
    const [postData, setPostData] = useState({
        title: '',
        author: '',
        article: ''
    });

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(postArticle(postData))

        history.push('/')
    }

    return (
        <div>
            <div className="container">
                <div className="article-list">
                    <div className="single-article">
                        <div className="form-title">
                            <h2>CREATE ARTICLE</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <label className="label">Title</label>
                            <br />
                            <input
                            className="input-field"
                            placeholder="enter article's title"
                            type="text"
                            name="title"
                            value={postData.title}
                            onChange={(e) => setPostData({...postData, title: e.target.value})}
                            />
                            <br />
                            <label className="label">Author</label>
                            <br />
                            <input
                            className="input-field"
                            placeholder="enter author's name"
                            type="text"
                            name="author"
                            value={postData.author}
                            onChange={(e) => setPostData({...postData, author: e.target.value})}
                            />
                            <br />
                            <label className="label">Article</label>
                            <br />
                            <textarea
                            className="input-field"
                            placeholder="..."
                            type="text"
                            name="article"
                            value={postData.article}
                            onChange={(e) => setPostData({...postData, article: e.target.value})}
                            />
                            <br />
                            <button className="post-btn">Post Article</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
