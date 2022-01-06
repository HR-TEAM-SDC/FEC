import React from 'react';
import { render, screen } from '@testing-library/react';
import WriteReview from './writeReview.jsx';
import { reviews, metadata } from './sampleData';
import { AppContext } from '../context';
import '@testing-library/jest-dom';

describe('write review', () => {
  // const props = {
  //   id: 40344,
  //   name: 'Camo Onesie',
  //   writeReviewClick: function () {},
  //   metaData: metadata
  // }
  // console.log(props)

  const { container } = render(
    <WriteReview id={40344} name={'Camo Onesie'} writeReviewClick={() => {}} metaData={metadata} />
  );

  beforeEach(() => {
    render(<WriteReview id={40344} name={'Camo Onesie'} writeReviewClick={() => {}} metaData={metadata} />);
  });

  test('have the write review portal', () => {
    expect(document.querySelectorAll('write-review')).toBeTruthy();
  });

  test('have the write rate box', () => {
    expect(document.querySelectorAll('rateBox')).toBeTruthy();
  });

  test('have the recommend', () => {
    expect(document.querySelectorAll('recommend')).toBeTruthy();
  });

  test('have the write review portal', () => {
    expect(document.querySelectorAll('write-review-submit')).toBeTruthy();
  });
});
