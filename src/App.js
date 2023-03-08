import { useEffect, useState } from "react";
import CardsDesign from "./components/CardsDesign";
function App() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getCardData();
  }, [page]);

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll)
    return () => window.removeEventListener('scroll', handleInfiniteScroll);
  }, []);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      alert(error)
    }

  }

  const getCardData = async () => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCardData((prev) => [...prev, ...data])
      }).catch((error) => console.log(error))
    setLoading(false);
  }

  return (
    <div style={{ background: "brown" }}>
      <h1>app page</h1>
      <CardsDesign cardDatas={cardData} />
      {loading && "wait loading..."}
    </div>
  );

}
export default App;
