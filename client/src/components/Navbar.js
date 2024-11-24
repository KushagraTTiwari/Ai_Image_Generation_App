import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Button = styled.button`
  background-color: #3839f3;
  border-radius: 50px;
  border: none;
  color: white;
  font-weight: 700;
  padding: 10px 20px;
  margin-right: 10px;
  font-size: 1rem;
  height: 2.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-right: 20px;
  }
`;

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <p style={{ fontWeight: "800", fontSize: "1.5rem", padding: "10px" }}>
        GenAI
      </p>
      <Button onClick={()=> navigate('/post')}>+ Create a New Post</Button>
    </div>
  );
}
