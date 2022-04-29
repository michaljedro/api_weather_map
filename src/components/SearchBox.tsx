import React, { useState } from "react";
import styled from "@emotion/styled";

const Input = styled.input`
  background-color: green;
`;

interface SearchBoxProps {
  onSubmit: (city: string) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ onSubmit }) => {
  const [city, setCity] = useState("");

  const handleCity = (event: React.FormEvent<HTMLInputElement>) => {
    setCity(event.currentTarget.value);
  };

  const handleSubmit = () => {
    setCity("");
    onSubmit(city);
  };
  return (
    <div>
      <Input
        type="text"
        placeholder="Type town"
        onChange={handleCity}
        value={city}
      ></Input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
