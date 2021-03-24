import React from 'react';
import { FC } from 'react-forward-props';

import { useId } from '../utils';
import { CommonWACIElementProps } from '../types';
import { QR, QRProps } from './renderer';

export type WACIQRElementProps = CommonWACIElementProps & QRProps;

export const WACIQRElement: FC<'svg', WACIQRElementProps> = (props) => {
  const id = useId(props.id);

  return <QR {...props} id={id} />;
};
