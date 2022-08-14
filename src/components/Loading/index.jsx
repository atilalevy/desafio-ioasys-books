import React from 'react'

import { ContainerLoading } from './styles'
import loadingGif from '../../assets/loading-magenta.gif'

export default function Loading() {
    return(
        <ContainerLoading>
            <img src={loadingGif} alt="Carregando" />
        </ContainerLoading>
    )
}