import styled from "styled-components";
import Button from "../../components/Button";

const Wrapper = styled.div`
  padding: 24px;
  display: flex;
  gap: 24px;
`;

interface ActionCenterProps {
  setOpenCreateModal: (value: boolean) => void;
}

const ActionCenter = ({ setOpenCreateModal }: ActionCenterProps) => {
  return (
    <Wrapper>
      <Button text="Create" onClick={() => setOpenCreateModal(true)} />
      <Button text="Refresh" onClick={() => CreateModal(true)} />
    </Wrapper>
  );
};

export default ActionCenter;
