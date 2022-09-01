import { useState } from "react";
import "./App.css";
import AddFilm from "./Components/AddFilm";
import Filter from "./Components/Filter";
import ListFilm from "./Components/ListFilm";

function App() {
  const [filter, setFilter] = useState("");
  const [rating, setRating] = useState('1')
  const [filmList, setFilmList] = useState([
    {
      Title: "Avengers: Infinity War",
      Description:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers-infinity-war_89e0d364_480x.progressive.jpg?v=1631200474",
      Rating: '4'
    },
    {
      Title: "Back to the Future",
      Description:
        "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9d8e73e436b536a7c81644c6e9877c7a_1c9d0f90-9991-4326-8f37-3dd980abeacf_480x.progressive.jpg?v=1573590262",
        Rating: '2'
      },
    {
      Title: "Avengers: Infinity War",
      Description:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/avengers-infinity-war_89e0d364_480x.progressive.jpg?v=1631200474",
        Rating: '5'
      },
    {
      Title: "Back to the Future",
      Description:
        "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
      Poster:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9d8e73e436b536a7c81644c6e9877c7a_1c9d0f90-9991-4326-8f37-3dd980abeacf_480x.progressive.jpg?v=1573590262",
        Rating: '3'
    },
  ]);
  const handleFilter = (val) => {
    setFilter(val);
  };
  const handleAddContact = (val) => {
    setFilmList([...filmList, val]);
  };
  const handleRating=(number)=>{
    setRating(number);
  }
  return (
    <div className="App">
      <Filter handleFilter={handleFilter} handleRating={handleRating}/>
      <ListFilm
        list={filmList.filter((elm) =>
          elm.Title.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) && elm.Rating >= rating
        )}
      />
      <AddFilm handleAddContact={handleAddContact} />
    </div>
  );
}

export default App;
