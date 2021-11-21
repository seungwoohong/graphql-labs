import React, { useState } from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import DogPhoto from "./DogPhoto";

interface Dog {
  id: string;
  breed: string;
}

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_DOGS);
  const [selectedBread, setSelectedBread] = useState("");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;

  return (
    <div className="App">
      <select onChange={(e) => setSelectedBread(e.target.value)}>
        {data?.dogs.map((dog: Dog) => (
          <option
            key={dog.id}
            value={dog.breed}
            style={{
              listStyle: "none",
            }}
          >
            {dog.breed}
          </option>
        ))}
      </select>
      {selectedBread && <DogPhoto breed={selectedBread} />}
    </div>
  );
}

export default App;
