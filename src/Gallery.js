import { sculptureList } from "./data";
import { useState } from 'react' ;

export default function Gallery() {

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);


    function handleNextClick() {
        setIndex((index + 1) % sculptureList.length);
    }


    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <div className="section-principal">
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>

            <div className="show-details-botao">
                <button onClick={handleMoreClick}>
                    {showMore ? 'Hide' : 'Show'} details
                </button>
            </div>
            
            {showMore && <p>{sculpture.description}</p>}
            <img 
                src={sculpture.url}
                alt={sculpture.alt} />
        </div>
    );
}