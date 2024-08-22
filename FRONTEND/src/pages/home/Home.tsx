import styled from "styled-components";
import AppHeader from "./AppHeader";
import ActionCenter from "./ActionCenter";
import Content from "./Content";
import CreateModal from "./CreateModal";
import { useState } from "react";

const Wrapper = styled.div`
  background: #fff;
  width: 50%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  overflow-y: scroll;

  .header {
    position: sticky;
    top: 0;
    background: #fff;
  }

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

const Home = () => {
  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);

  return (
    <Wrapper>
      <div className="header">
        <AppHeader />
        <ActionCenter setOpenCreateModal={setOpenCreateModal} />
      </div>

      <Content />

      {openCreateModal && (
        <CreateModal setOpenCreateModal={setOpenCreateModal} />
      )}
    </Wrapper>
  );
};

export default Home;
