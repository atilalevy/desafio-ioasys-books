import React, { useState, useContext } from 'react'

import { Container, Wrapper, Content, Logo, ButtonOut, ErrorMessage } from './styles'
import CustomInput from '../../components/CustomInput'
import { AuthContext } from '../../Context/AuthContext'

export default function LoginPage () {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const { handleLogin, handleLogout, authError, authErrorMessage, authenticated } = useContext(AuthContext)

    const userName = localStorage.getItem('username')

    return(
        <Container>
            <Wrapper>
                <Content>
                    { !authenticated ?
                    <>
                        <Logo>Books</Logo>
                        <CustomInput 
                            label={'Email'} 
                            type={'text'} 
                            placeholder={'Informe seu email'}
                            onChange={e => setUserEmail(e.target.value)}
                        />
                        <CustomInput 
                            label={'Senha'} 
                            type={'password'} 
                            placeholder={'Informe sua senha'}
                            btnLabel={'Entrar'}
                            onChange={e => setUserPassword(e.target.value)}
                            onClick={() => handleLogin(userEmail, userPassword)} 
                        />
                    </> 
                    :
                    <>
                        <p>Olá <strong>{userName}</strong>! Você já está logado, deseja sair?</p>
                        <ButtonOut onClick={() => handleLogout()}>Sair</ButtonOut>
                    </>
                    }
                    { authError && 
                        <ErrorMessage>
                            <span>{authErrorMessage}</span>
                        </ErrorMessage>
                    }
                </Content>
            </Wrapper>
        </Container>
    )
}
