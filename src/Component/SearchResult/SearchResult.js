import React from 'react'
import './SearchResult'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

function SearchResult(props) { //props => img, location, title, description, star, price, total
    return (
        <div className="searchResult">
            <img src={props.img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />
            <div className="searchResult__info">
                <p>{props.location}</p>
                <h3>{props.title}</h3>
                <p>_____</p>
                <p>{props.description}</p>
            </div>
            <div className="searchResult__infoTop">
            </div>
            <div className="searchResult__infoBottom">

            </div>
        </div>
    )
}

export default SearchResult
