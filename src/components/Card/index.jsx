import React from 'react'

import { CardWrapper } from './styles'

export default function Card ({ cardInfo, handleClick }) {

    return(
        <CardWrapper onClick={handleClick}>
            <img src={cardInfo.imageUrl} alt={cardInfo.title} />
            <div className='content'>
                <div className='main-info'>
                    <p className='book-title'>{cardInfo.title}</p>
                    <p className='book-autor'>{cardInfo.authors.toString().replace(/,/g,", ")}</p>
                </div>
                <div className='others-info'>
                    <span className="book-general-descriptions">{cardInfo.pageCount} páginas</span>
                    <span className="book-general-descriptions">Editora {cardInfo.publisher}</span>
                    <span className="book-general-descriptions">Publicado em {cardInfo.published}</span>
                </div>                        
            </div>
        </CardWrapper>
    )
}