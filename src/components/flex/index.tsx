import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 0 15px;
  margin: 0 auto;
`;

export { Column, Row, Center, Container };
