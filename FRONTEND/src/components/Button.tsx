import styled from "styled-components";

interface ButtonStyleProps {
  bg?: string;
  color?: string;
  width?: string;
  borderColor?: string;
  height?: string;
  disabled?: boolean;
}

// Adjusting the styles in Wrapper for better clarity
const Wrapper = styled.button<ButtonStyleProps>`
  color: ${(props) => props.color || "#fff"};
  background-color: ${(props) => props.bg || "#ff6f61"};
  width: ${(props) => props.width || "100%"};
  padding: 12px 24px;
  border-radius: 8px;
  border: ${(props) =>
    props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  height: ${(props) => props.height || "auto"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

interface ButtonProps {
  text: string;
  onClick?: () => void;
  bg?: string;
  color?: string;
  width?: string;
  borderColor?: string;
  height?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

// Button Component Implementation
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  bg,
  color,
  width,
  borderColor,
  height,
  type = "button",
  disabled = false,
}) => {
  return (
    <Wrapper
      bg={bg}
      color={color}
      width={width}
      height={height}
      borderColor={borderColor}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </Wrapper>
  );
};

export default Button;
