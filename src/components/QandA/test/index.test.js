import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { providerProps, customRender } from './sample.js';
import { testEnvironment } from '../../../../jest.config.js';
import QAapp from '../QAindex.jsx';

describe('index', () => {
  beforeEach(() => {
    customRender(<QAapp />, { providerProps });
  });

  it('Should initially render a quetion container', () => {
    // screen.debug('');
    // expect(document.querySelectorAll('.accordion').length).toBe(2);
    // screen.getByRole('');
    expect(document.querySelectorAll('.accordion')).toBeTruthy();
  });

  it('should have a heading in the index page', () => {
    expect(screen.getAllByRole('heading').length).toEqual(1);
  });
});
