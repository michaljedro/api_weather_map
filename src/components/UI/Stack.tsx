import React from "react";
import styled from "@emotion/styled";
// https://emotion.sh/docs/typescript
interface StackProps {
  direction?: "row" | "column";
  justify?: "start" | "end" | "center" | "space-between";
  align?: "start" | "end" | "center" | "stretch";
  gap?: number;
  color?: string;
  height?: number;
}

const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap};
  background-color: ${(props) => props.color};
  border: 2px solid red;
  height: 100vh;
`;

export const Stack: React.FC<StackProps & { children: React.ReactNode }> = ({
  children,
  color = "white",
  direction = "row",
  justify = "start",
  align = "center",
  gap = 0,
}) => {
  return (
    <StyledStack
      color={color}
      direction={direction}
      gap={gap}
      justify={justify}
      align={align}
    >
      {children}
    </StyledStack>
  );
};
