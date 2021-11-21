import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

interface DogPhotoProps {
  breed: string | null;
}
export default function DogPhoto({ breed }: DogPhotoProps) {
  const { loading, error, data, refetch } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed }, // variables는 쿼리에 넘길 인자들, 오브젝트
      //   pollInterval: 1000, // ms
    } // query 실행 옵션
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>`Error! ${error}`</div>;

  const handleClick = () => refetch();

  return (
    <>
      <img
        src={data.dog.displayImage}
        alt="dog"
        style={{ height: 100, width: 100 }}
      />
      <button onClick={handleClick}>다시 불러오기</button>
    </>
  );
}
