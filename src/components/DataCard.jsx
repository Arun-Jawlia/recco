import styled from 'styled-components'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
width: 100%;
/* border:1px solid lightgray; */
margin-top: 1rem;

`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 1rem;
  /* border-top-right-radius: 10px; */
`

const Item= styled.p`
font-size: 14px;
flex:${props=>props.flex || 0};
border: 1px solid lightgray;
padding: 0.3rem;
text-align: center;
`

  

const Main = styled.div`
display: flex;
flex-direction: column;
`


const DataCard = () => {
  const { data, isLoading, isError } = useSelector((store) => store.data);
  return (
    <Wrapper>
      <Header>
        <Item flex={2}>
          Product Name
        </Item>
        <Item flex={1}>
          Brand
        </Item>
        <Item flex={1}>
          Price
        </Item>
        <Item flex={1}>
          Quantity
        </Item>
        <Item flex={1}>
          Total
        </Item>
        <Item flex={2}>
          Status
        </Item>
              </Header>
      <Main>
      {
        data?.map((item)=>
        {
          return(
            <ProductCard key={item.id} data={item} />

          )
        })
      }
      </Main>
    </Wrapper>
  )
}

export default DataCard