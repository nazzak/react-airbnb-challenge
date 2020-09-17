import React from 'react'
import './SearchResult'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"

function SearchResult(props) { //props => img, location, title, description, star, price, total
    return (
        <div className="searchResult">
            <img src={props.img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{props.location}</p>
                    <h3>{props.title}</h3>
                    <p>_____</p>
                    <p>{props.description}</p>
                </div>
                <div className="searchResult__infoBottom">
                    <StarIcon className="searchResult__star" />
                    <div className="searchResult__infoBottom">
                        <p>
                            <strong>
                                {props.star}
                            </strong>
                        </p>
                    </div>
                    <div class="searchResult__price">
                        <h2>{props.price}</h2>
                        <p>{props.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
