import styled from "styled-components";
import { CiHeart } from "react-icons/ci";

const Wrapper = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 24px;
  height: 400px;
  display: flex;
  flex-direction: column;

  .profilePicture {
    height: 60%;
    width: 100%;
    border-radius: 8px 8px 0 0;

    img {
      width: 100%;
      height: 100%;
      border-radius: 8px 8px 0 0;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .content {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .contentItem {
      display: flex;
      gap: 8px;

      .username {
        font-size: 20px;
        font-style: italic;
        font-weight: bold;
      }
    }

    .liked {
      width: 30px;
      height: 20px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Usercard = () => {
  return (
    <Wrapper>
      <div className="profilePicture">
        <img
          src="https://images.unsplash.com/photo-1681053203240-c36aee74cc03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="content">
        <div className="contentItem">
          <p className="username">Anonymous</p>
        </div>

        <div className="contentItem">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus in quam sed laudantium fuga. Blanditiis, ipsum
            reiciendis! Totam, natus accusantium.
          </p>
        </div>

        <div className="liked">
          <CiHeart />
        </div>
      </div>
    </Wrapper>
  );
};

export default Usercard;
