import React, { Component } from 'react'
// import '';


export class NewsItem extends Component {
    render() {
        let { title, discription, imageUrl, newsUrl, publishedAt, author, source } = this.props;
        return (

            <div className='my-3 container'>
                <div className='card shadow'>
                    <span className='position-absolute   translate-middle badge rounded-pill bg-primary' style={{ left: "90%", zIndex: "1" }}>
                        {source}
                    </span>
                    <img
                        src={!imageUrl ? 'https://assets1.cbsnewsstatic.com/hub/i/r/2023/11/08/6e5551ae-f234-466f-8d9d-a7d55ba315b6/thumbnail/1200x630/6f5961e38ef869533d4b1b50500f1ad1/apple-watch-deals-bf.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0' : imageUrl}
                        className='card-img-top img-fluid'
                        alt='...'
                    />
                    <div className='card-body'>
                        <h5 className='card-title fw-bold'>{title}...</h5>
                        <p className='card-text'>{discription}...</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='card-text'>
                                <small className='text-muted'>By <b>{!author ? 'Unknown' : author}</b> on {new Date(publishedAt).toDateString()}</small>
                            </p>
                            <a href={newsUrl} target='_blank' className='btn btn-sm btn-secondary btn-read-more'>
                                <span className='initial-text'>...</span>
                                <span className='hover-text'>Read More</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>



        )
    }
}

export default NewsItem
