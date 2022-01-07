import { render } from '@testing-library/react';
import React from 'react';
import { AppContext } from '../../context';

export const providerProps = {
  value: {
    id: 40351,
    campus: 'hr-rfp',
    name: 'YEasy 350',
    slogan: 'Just jumped over jumpman',
    description: 'These stretchy knit shoes show off asymmetrical la…bber midsole. In a nod to adidas soccer heritage.',
    avgRating: 3.875,
    campus: 'hr-rfp',
    category: 'Kicks',
    created_at: '2021-08-13T14:38:44.509Z',
    default_price: '450.00',
    description:
      'These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.',
    // id: 40344,
    // campus: 'hr-rfp',
    // name: 'Camo Onesie',
    // slogan: 'Blend in to your crowd',
    // description:
    //   'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    // category: 'Jackets',
    // default_price: '140.00',
    // created_at: '2021-08-13T14:38:44.509Z',
    // updated_at: '2021-08-13T14:38:44.509Z',
    // features: [
    //   {
    //     feature: 'Fabric',
    //     value: 'Canvas',
    //   },
    //   {
    //     feature: 'Buttons',
    //     value: 'Brass',
    //   },
    // ],
  },
  counter: { counter: 0 },
  QuesArrayLength: { QuesArrayLength: 3 },
};

export const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(<AppContext.Provider {...providerProps}>{ui}</AppContext.Provider>, renderOptions);
};

export const questions = {
  result: [
    {
      question_id: 329036,
      question_body: 'How long does it last?',
      question_date: '2018-09-12T00:00:00.000Z',
      asker_name: 'l33tgamer',
      question_helpfulness: 35,
      reported: false,
      answers: {
        5087538: {
          id: 5087538,
          body: 'Why do you really care?',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'whatu',
          helpfulness: 0,
          photos: [],
        },
        5087539: {
          id: 5087539,
          body: 'do you know?',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'doty',
          helpfulness: 4,
          photos: [],
        },
        5087547: {
          id: 5087547,
          body: 'Stop asking the same question all the time',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'ok',
          helpfulness: 1,
          photos: [],
        },
        5087549: {
          id: 5087549,
          body: 'Are you really doing that again?',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'asdf',
          helpfulness: 0,
          photos: [],
        },
        5087551: {
          id: 5087551,
          body: 'I give up for 2 years',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'hey',
          helpfulness: 0,
          photos: [],
        },
        5087554: {
          id: 5087554,
          body: 'just couldnt',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'asdf',
          helpfulness: 0,
          photos: [],
        },
        5087559: {
          id: 5087559,
          body: 'asdfasdfasdf',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'dfad',
          helpfulness: 0,
          photos: [],
        },
        5087560: {
          id: 5087560,
          body: 'did it actually work?',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'carsf',
          helpfulness: 0,
          photos: [],
        },
        5087562: {
          id: 5087562,
          body: 'would it work now',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'dfasdf',
          helpfulness: 0,
          photos: [],
        },
        5087563: {
          id: 5087563,
          body: 'with effect',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'asdf',
          helpfulness: 0,
          photos: [],
        },
        5087565: {
          id: 5087565,
          body: 'nica',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'asdf',
          helpfulness: 0,
          photos: [],
        },
        5087585: {
          id: 5087585,
          body: 'demo for chris',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'sdfasd',
          helpfulness: 0,
          photos: [],
        },
        5087590: {
          id: 5087590,
          body: 'with setState',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'dsf',
          helpfulness: 0,
          photos: [],
        },
        5087591: {
          id: 5087591,
          body: 'dfasdfasfasdfasdfasfda',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'xczxc',
          helpfulness: 0,
          photos: [],
        },
        5087592: {
          id: 5087592,
          body: 'hi david',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'zcvzxc',
          helpfulness: 0,
          photos: [],
        },
        5087593: {
          id: 5087593,
          body: 'sapdogapweghpoawhegpawoeghowpeg',
          date: '2021-11-06T00:00:00.000Z',
          answerer_name: 'awegaweg',
          helpfulness: 0,
          photos: [],
        },
        5087594: {
          id: 5087594,
          body: 'david',
          date: '2021-11-07T00:00:00.000Z',
          answerer_name: 'sdfasdf',
          helpfulness: 0,
          photos: [],
        },
        5087595: {
          id: 5087595,
          body: '23161236[\nehgoadgasdgsadgasd',
          date: '2021-11-07T00:00:00.000Z',
          answerer_name: 'asdgsadg',
          helpfulness: 1,
          photos: [],
        },
        5087596: {
          id: 5087596,
          body: 'dsapohpaowehgopaopghopwaeghoawegaweg',
          date: '2021-11-07T00:00:00.000Z',
          answerer_name: 'waegaweg',
          helpfulness: 0,
          photos: [],
        },
        5087597: {
          id: 5087597,
          body: 'sapdohpageoeawhpoghpwaogeopwahepowa',
          date: '2021-11-07T00:00:00.000Z',
          answerer_name: 'waegwagwaeg',
          helpfulness: 0,
          photos: [],
        },
        5087598: {
          id: 5087598,
          body: 'phweapgewohgpawoheaweg',
          date: '2021-11-07T00:00:00.000Z',
          answerer_name: 'waegawegaweg',
          helpfulness: 0,
          photos: [],
        },
        5087600: {
          id: 5087600,
          body: 'sapeoghawpoegowaheopaweg',
          date: '2021-11-07T00:00:00.000Z',
          answerer_name: 'carlos',
          helpfulness: 0,
          photos: [],
        },
        5087601: {
          id: 5087601,
          body: 'weapoghawpegoawhgepwaeoghawpoeogaw',
          date: '2021-11-07T00:00:00.000Z',
          answerer_name: 'awegawgewa',
          helpfulness: 0,
          photos: [],
        },
      },
    },
    {
      question_id: 553473,
      question_body: 'does it have a skirt?',
      question_date: '2021-11-10T00:00:00.000Z',
      asker_name: 'crash',
      question_helpfulness: 6,
      reported: false,
      answers: {
        5181040: {
          id: 5181040,
          body: 'no',
          date: '2021-11-10T00:00:00.000Z',
          answerer_name: 'shion',
          helpfulness: 3,
          photos: ['https://cdn.discordapp.com/attachments/452414661971673088/906403719673954314/unknown.png'],
        },
      },
    },
    {
      question_id: 329033,
      question_body: 'Where is this product made?',
      question_date: '2019-06-12T00:00:00.000Z',
      asker_name: 'iluvcatz',
      question_helpfulness: 5,
      reported: false,
      answers: {
        3073796: {
          id: 3073796,
          body: 'Manufactured in Mexico City',
          date: '2019-12-12T00:00:00.000Z',
          answerer_name: 'Seller',
          helpfulness: 4,
          photos: [],
        },
      },
    },
  ],

  // result: [
  //       {
  //           "question_id": 563049,
  //           "question_body": "Is this product made by Aliens?",
  //           "question_date": "2021-12-24T00:00:00.000Z",
  //           "asker_name": "alien",
  //           "question_helpfulness": 22,
  //           "reported": false,
  //           "answers": {
  //               "5269206": {
  //                   "id": 5269206,
  //                   "body": "This product is made by our very own Aliens!",
  //                   "date": "2021-12-31T00:00:00.000Z",
  //                   "answerer_name": "Seller",
  //                   "helpfulness": 9,
  //                   "photos": []
  //               },
  //               "5269307": {
  //                   "id": 5269307,
  //                   "body": "feafea",
  //                   "date": "2022-01-03T00:00:00.000Z",
  //                   "answerer_name": "Jake",
  //                   "helpfulness": 1,
  //                   "photos": []
  //               },
  //               "5269376": {
  //                   "id": 5269376,
  //                   "body": "Yasin is the coolest",
  //                   "date": "2022-01-04T00:00:00.000Z",
  //                   "answerer_name": "Seller",
  //                   "helpfulness": 2,
  //                   "photos": [
  //                       "https://res.cloudinary.com/dwbhfydeg/image/upload/v1641324938/Jimi_Hendrix_vww3tw.jpg",
  //                       "https://res.cloudinary.com/dwbhfydeg/image/upload/v1641324936/7-Study_Equilibrium_T18-20_fzo26l.webp"
  //                   ]
  //               }
  //           }
  //       }
  // ]
};
