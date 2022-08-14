import React from 'react'

import { Container, Wrapper, Logo, Description } from './styles'

export default function NotFoundPage () {
    return(
        <Container>
            <Wrapper>
                <Logo>Books</Logo>
                <Description>Erro 404 - Página não encontrada</Description>
            </Wrapper>
        </Container>
    )
}
