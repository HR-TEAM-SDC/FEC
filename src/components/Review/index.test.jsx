import React from 'react';
import { render, screen } from '@testing-library/react';
import RRIndex from './RRIndex.jsx';
import { reviews, metadata } from './sampleData';
import { AppContext } from '../context';

describe('review container', () => {
  // beforeEach(() => {
  //   const AppContext = {
  //     id:40344,
  //   }
  //   customRender(<RRIndex />, { AppContext })
  // });

  test('rendering the correct item', () => {
    const AppContext = {
      id: 40344,
    };
    customRender(<RRIndex />, { AppContext });
    expect(screen.firstChild).toHaveClass('reviewList');
  });
});

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(<AppContext.Provider {...providerProps}>{ui}</AppContext.Provider>, renderOptions);
};
