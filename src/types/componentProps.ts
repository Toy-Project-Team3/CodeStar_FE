import React from 'react';

export interface BaseLayoutProp {
  children: React.ReactNode;
  hasHeader: boolean;
}

export interface ProfileLayoutProp {
  children: React.ReactNode;
  hasHeader: boolean;
}

export interface CreditScoreProp {
  width?: number;
  height?: number;
}
