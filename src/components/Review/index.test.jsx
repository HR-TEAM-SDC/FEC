import React from 'react';
import { render, screen } from '@testing-library/react';
import RRIndex from './RRIndex.jsx';
import { reviews, metadata } from './sampleData';
import { AppContext } from '../context';
import '@testing-library/jest-dom';

describe('review container', () => {
  const providerProps = {
    value: {
      id: 40344,
      campus: 'hr-rfp',
      name: 'Camo Onesie',
      slogan: 'Blend in to your crowd',
      description:
        'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
      category: 'Jackets',
      default_price: '140.00',
      created_at: '2021-08-13T14:38:44.509Z',
      updated_at: '2021-08-13T14:38:44.509Z',
      features: [
        {
          feature: 'Fabric',
          value: 'Canvas',
        },
        {
          feature: 'Buttons',
          value: 'Brass',
        },
      ],
    },
  };

  const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(<AppContext.Provider {...providerProps}>{ui}</AppContext.Provider>, renderOptions);
  };

  const { container } = customRender(<RRIndex />, { providerProps });

  beforeEach(() => {
    customRender(<RRIndex />, { providerProps });
  });

  test('have the class review list', () => {
    expect(container.firstChild).toHaveClass('reviewList');
  });

  // test('have the write review button', () => {
  //   expect(screen.getByText('Write Review')).toHaveClass('writeReviewButton')
  // });

  test('have the write review button', () => {
    expect(document.querySelector('.writeReviewButton')).toBeInTheDocument();
  });

  test('have the write review button', () => {
    expect(document.querySelector('.writeReview')).toBeInTheDocument();
  });
});
