import React from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';

type DonutProps = {
  size: string | string[];
  color: string;
  width: string | string[];
  top?: string | string[];
  left?: string | string[];
  right?: string | string[];
  bottom?: string | string[];
  className?: string;
  zIndex?: string;
  breakpoints?: number[];
  position?: string;
};

export const Donut = ({
  size,
  color,
  width,
  top = ``,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-donut`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200],
  position = `absolute`
}: DonutProps) => {
  const StyledDonut = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background-color: transparent;
    border: ${color};
    border-width: ${width};
    border-style: solid;
    border-radius: 50%;
    top: inherit;
    left: inherit;
    right: inherit;
    z-index: inherit;
  `;

  return (
    <BaseShape
      bottom={bottom}
      breakpoints={breakpoints}
      className={className}
      height={size}
      left={left}
      position={position}
      right={right}
      top={top}
      width={size}
      zIndex={zIndex}
    >
      <StyledDonut className={className} />
    </BaseShape>
  );
};
