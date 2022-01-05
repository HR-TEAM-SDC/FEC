import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedItems from '../index.jsx';
import { providerProps, customRender } from './sample';
import { testEnvironment } from '../../../../jest.config.js';

describe('Related Items', () => {
  beforeEach(() => {
    customRender(<RelatedItems />, { providerProps });
  });

  test('Should render two lists', () => {
    expect(document.querySelectorAll('.list').length).toEqual(2);
  });

  test('Both lists should have a heading', () => {
    expect(screen.getAllByRole('heading').length).toEqual(2);
  });
});
