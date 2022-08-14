import React from 'react'

import { PaginationContainer, PaginationButton } from './styles'

export default function Pagination ({ currentPage, pages, handlePrevClick, handleNextClick }) {
    return(
        <PaginationContainer>
            {window.screen.width > 680 ?
                <>
                    <p>Página <strong>{currentPage}</strong> de <strong>{pages}</strong></p>
                    <PaginationButton disabled={currentPage === 1 ? true : false} prev onClick={handlePrevClick} />
                </>
                :
                <>
                    <PaginationButton disabled={currentPage <= 1 ? true : false} prev onClick={handlePrevClick} />
                    <p>Página <strong>{currentPage}</strong> de <strong>{pages}</strong></p>
                </>
            }
            <PaginationButton disabled={currentPage >= pages ? true : false} onClick={handleNextClick} />
        </PaginationContainer>
    )
}