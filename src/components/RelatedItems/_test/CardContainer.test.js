import React from 'react';
import { render, screen } from '@testing-library/react';
import CardContainer from '../CardContainer.jsx';
import { providerProps, customRender, relatedItems } from './sample';

describe('Card Container', () => {
  beforeEach(() => {
    customRender(<CardContainer cardItems={relatedItems} selectedItem={providerProps.value} />, {
      providerProps,
    });
  });

  test('renders a card for every item', () => {
    expect(screen.getAllByRole('heading').length).toEqual(relatedItems.length);
  });

  test('buttons dont render if component is not overflowing', () => {
    const leftButton = document.querySelector('left');
    const rightButton = document.querySelector('right');
    expect(leftButton).toBeFalsy();
    expect(rightButton).toBeFalsy();
  });
});
