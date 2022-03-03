import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { BaseShape } from './base';
import { clipPathMap } from './polygonclippath.tsx'

type PolygonProps = {
  color: string;
  height: string | string[];
  width: string | string[];
  top?: string | string[];
  left?: string | string[];
  right?: string | string[];
  bottom?: string | string[];
  className?: string;
  zIndex?: string;
  breakpoints?: number[];
  position?: string;
  sides?: number;
};

export const Polygon = ({
  width,
  height,
  color,
  top = ``,
  position = `absolute`,
  left = ``,
  right = ``,
  bottom = ``,
  className = `anim-shape-hexagon`,
  zIndex = `-1`,
  breakpoints = [600, 900, 1200],
  sides = 6
}: PolygonProps) => {
  const [clipPath, setClipPath] = useState('');

  useEffect(() => {
    setClipPath(clipPathMap[sides]);
  }, [sides]);

  const StyledPolygon = styled('div')`
    position: inherit;
    height: inherit;
    width: inherit;
    background: ${color};
    top: inherit;
    clip-path: ${clipPath};
    right: inherit;
    left: inherit;
    bottom: inherit;
    z-index: inherit;
  `;

  return (
    <BaseShape
      bottom={bottom}
      breakpoints={breakpoints}
      className={className}
      height={height}
      left={left}
      position={position}
      right={right}
      top={top}
      width={width}
      zIndex={zIndex}
    >
      <StyledPolygon className={className} />
    </BaseShape>
  );
};
