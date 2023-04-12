import styled from "styled-components"
import Header from "./Header"

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <PageContentContainer>
        {children} 
      </PageContentContainer>
    </>
  )
}

const PageContentContainer = styled.div`
  padding: 1.5rem 3rem 3rem 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default Layout