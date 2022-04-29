import React from "react";
import styled from "@emotion/styled";

interface StackProps {
  direction?: "row" | "column";
  justify?: "start" | "end" | "center" | "space-between";
  align?: "start" | "end" | "center" | "stretch";
  gap?: number;
  color?: string;
  backgroundColor?: string;
  height?: string;
  width?: string;
  ref?: React.ForwardedRef<"div">;
}

const StyledBox = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap};
  border: 2px solid green;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
`;

export const Box: React.FC<StackProps & { children: React.ReactNode }> =
  React.forwardRef(
    (
      {
        children,
        color = "white",
        direction = "row",
        justify = "start",
        align = "start",
        gap = 0,
        height = "100vh",
        width = "30vw",
        backgroundColor = "red",
      },
      ref: React.ForwardedRef<"div">
    ) => {
      return (
        <StyledBox
          color={color}
          direction={direction}
          gap={gap}
          justify={justify}
          align={align}
          backgroundColor={backgroundColor}
          width={width}
          height={height}
          // ref={ref}
        >
          {children}
        </StyledBox>
      );
    }
  );
