import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: 14,
  },
  large: {
    height: 18,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  return (
    <TextInput
      style={{ '--width': width, '--size': styles.height + 'px' }}
      placeholder={placeholder}
    ></TextInput>
  );
};

const TextInput = styled.input`
  width: var(--width);
  font-size: var(--size);
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
