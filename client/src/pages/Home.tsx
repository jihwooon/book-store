import Button from "../components/common/Button";
import { InputText } from "../components/common/InputText";
import Title from "../components/common/Title";

const Home = () => {
  return (
    <>
      <Title size='medium' color='background'>제목 테스트</Title>
      <Button size="large" scheme="primary">버튼</Button>
      <InputText placeholder="여기에 입력하세요"/>
      <div>detail</div>
    </>
  )
}

export default Home;
