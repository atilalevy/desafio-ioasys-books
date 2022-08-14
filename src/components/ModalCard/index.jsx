import React from 'react'

import { Overlay, CardWrapper, CardContent, CardMainContent, CardInfos, CardReview, ButtonClose } from './styles'

export default function ModalCard({ cardInfo, handleClose }) {

    const infos = [
        {
            info: 'Páginas',
            value: cardInfo.pageCount
        },
        {
            info: 'Editora',
            value: cardInfo.publisher
        },
        {
            info: 'Publicação',
            value: cardInfo.published
        },
        {
            info: 'Idioma',
            value: cardInfo.language
        },
        {
            info: 'Título Original',
            value: cardInfo.title
        },
        {
            info: 'ISBN10',
            value: cardInfo.isbn10
        },
        {
            info: 'ISBN13',
            value: cardInfo.isbn13
        }
    ]

    return(
        <Overlay>
            <ButtonClose onClick={handleClose}>X</ButtonClose>
            <CardWrapper>
                <img src={cardInfo.imageUrl} alt={cardInfo.title} />
                <CardContent>
                    <CardMainContent>
                        <h2>{cardInfo.title}</h2>
                        <span>{cardInfo.authors.toString().replace(/,/g,", ")}</span>
                    </CardMainContent>
                    <CardInfos>
                        <p>INFORMAÇÕES</p>
                        <ul>
                            {infos.map((item, index) => (
                                <li key={index}>
                                    <p>{item.info}</p>
                                    <span>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </CardInfos>
                    <CardReview>
                        <p>RESENHA DA EDITORA</p>
                        <span>{cardInfo.description}</span>
                    </CardReview>
                </CardContent>
            </CardWrapper>
        </Overlay>
    )
}