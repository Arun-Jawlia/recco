import styled from 'styled-components'
import DataCard from './DataCard';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`

height: 68vh;
overflow: scroll;
display: flex;
align-items: center;
justify-content: center;
scroll-behavior: smooth;


padding: 1rem 0rem;

&::-webkit-scrollbar {
  display: none;
}

`


const Header = styled.div`
  font-size: 16px ;
  display: flex;
  align-items: center  ;
  justify-content: space-between;
  width: 100%;
  /* padding: 0.3rem 1rem; */
  border-radius: 10px;

`

const Input = styled.input`
width: 40%;
padding: 0.3rem 1rem;
align-items: center;
justify-content: center;
border: 1px solid lightgray;
outline: none;
border-radius: 50px;


  
`

const Button = styled.button`
  border: 1px solid #1e633f;
  padding: 4px 15px;
  margin-right: 1rem;
  border-radius: 50px;
  font-weight: 500;
  color: #1e633f;
`;


const Main = styled.div`
height: 100vh;
border: 1px solid lightgray;
width: 90%;
margin-top: 45vh;
border-radius: 10px;
padding: 1rem 2rem;

`

const DataContainer = () => {
    

  
  return (
    <Wrapper>
    

      <Main>
      <Header>
        <Input placeholder='Search...'/>
        <Button>ADD</Button>
      </Header>
     <DataCard/>
      </Main>
    </Wrapper>
  )
}

export default DataContainer