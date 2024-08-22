import styled from "styled-components";
import { colors } from "../../utils/colors";

const Wrapper = styled.div`
  height: 100px;
  border-bottom: 1px solid #ccc;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const ImageWrapper = styled.div`
  height: 48px;
  min-height: 48px;
  width: 48px;
  min-width: 48px;
  border-radius: 50%;
  border: ${(props) => `2px solid ${props.color}`};
  / img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const AppHeader = () => {
  return (
    <Wrapper>
      {[...Array(15)].map((_, index: number) => (
        <ImageWrapper color={colors[index]} key={index}>
          <img
            src="https://images.unsplash.com/photo-1721564130821-5ac091ee399c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </ImageWrapper>
      ))}
    </Wrapper>
  );
};

export default AppHeader;
