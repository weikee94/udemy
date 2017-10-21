import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        let alternate = 'https://cdn4.iconfinder.com/data/icons/facebook-likes/100/8.png';

        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <a key={index} className="book" href={infoLink} target="_blank">
                                <img 
                                    src={imageLinks !== undefined ? imageLinks.thumbnail : alternate} 
                                    alt="book image" 
                                    className="book-img" />
                                <div className="book-text">
                                    {title}
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Gallery;