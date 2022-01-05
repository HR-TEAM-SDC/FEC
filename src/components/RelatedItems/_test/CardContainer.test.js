import React from 'react';
import { render, screen } from '@testing-library/react';
import CardContainer from '../CardContainer.jsx';
import { providerProps, customRender, relatedItems } from './sample';
import { testEnvironment } from '../../../../jest.config.js';

describe('Card Container', () => {
  beforeEach(() => {
    customRender(<CardContainer cardItems={relatedItems} selectedItem={providerProps.value} />, { providerProps });
  });

  test('renders a card for every item', () => {
    expect(screen.getAllByRole('heading').length).toEqual(relatedItems.length);
  });
});
