import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { providerProps, customRender, questions } from './sample.js';
import { testEnvironment } from '../../../../jest.config.js';
import QuestionsList from '../QuestionsList.jsx';

describe('Questions', () => {
  beforeEach(() => {
    customRender(<QuestionsList questions={questions.result.slice(0, 2)} />, { providerProps });
  });

  it('should initially render up to 2 questions', () => {
    // screen.debug();
    // screen.getByRole('');
    screen.debug();
    expect(document.querySelectorAll('.accordion-item').length).toBeLessThanOrEqual(2);
  });
});
