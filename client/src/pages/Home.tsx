import Header from "../components/Header";
import {formatNumber} from '../utils/format'

const Home = () => {
  return (
    <>
      <Header/>
      <div>bookStore</div>
      <div>count : {formatNumber(10000)}</div>
    </>
  )
}

export default Home;
