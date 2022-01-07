import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { providerProps, customRender, questions } from './sample.js';
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

  it('should have a Load-More-Question button when there are more then 2 questions', async () => {
    await screen.getByRole('');
    const button = await screen.getByText('MORE ANSWERED QUESTIONS');
    // console.log('result: ',questions.result);
    expect(button).toBeTruthy;
  });
});
