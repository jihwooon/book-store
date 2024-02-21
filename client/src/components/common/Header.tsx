import styled from "styled-components";

const Header = () => {
    return (
        <HeaderStyle>
            <h1>book store</h1>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
  background-color: #333;

  h1 {
    color: white;
  }
`

export default Header;
