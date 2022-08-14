import React, { useContext, useEffect, useState } from 'react'

import api from '../../services/api'
import { AuthContext } from '../../Context/AuthContext'

import { Container, Wrapper, Header, Logo, UserWelcome, Content } from './styles'
import Card from '../../components/Card'
import ModalCard from '../../components/ModalCard'
import Pagination from '../../components/Pagination'

export default function HomePage () {
    const [books, setBooks] = useState([])
    const [bookIndex, setBookIndex] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState(0)
    const [loading, setLoading] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    const { handleLogout } = useContext(AuthContext)

    const TestModal = (index) => {
        setBookIndex(index)
        setModalOpen(true)
    }

    const userName = localStorage.getItem('username')

    async function getBooks (page) {
        await api.get('/books', { params: { page: page || 1, amount: 12 } })
            .then(res => {
                const booksData = res.data.data
                setCurrentPage(Number(res.data.page))
                setPages(Math.ceil(res.data.totalPages))
                setBooks(booksData)
                setLoading(false)
            })
            .catch(err => console.error(err.message))
    }

    useEffect(() => {
        getBooks()
        console.log(loading)
    }, [])

    return(
        <Container>
            <Wrapper>
                <Header>
                    <Logo>Books</Logo>
                    <UserWelcome>
                        <p>Bem vindo, <strong>{userName}!</strong> </p>
                        <button onClick={() => handleLogout()}/>
                    </UserWelcome>
                </Header>
                <Content>
                    {!loading && books.map((item, index) => (
                        <Card cardInfo={item} key={item.id} handleClick={() => TestModal(index)}/>
                    ))}
                    <Pagination 
                        pages={pages} 
                        currentPage={currentPage}
                        handlePrevClick={() => getBooks(currentPage - 1)}
                        handleNextClick={() => getBooks(currentPage + 1)}
                    />
                </Content>
            </Wrapper>
            {modalOpen && <ModalCard cardInfo={books[bookIndex]} handleClose={() => setModalOpen(false)}/>}
        </Container>
    )
}
