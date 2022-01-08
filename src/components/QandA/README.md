# Questions & Answers Widget

The questions and answers widget displays the questions and their answers which are related to a specific product displayed by overview and change it accordingly.

The questions list section will show up to 2 questions and 2 answers. The button "MORE ANSWERED QUESTIONS" and the link "See more answers" will load more questions and answers information once they are got clicked.

If Users find some specific quetions or answers useful, they can mark those quetions or answers to be "helpful" and it will increase the count of helpfulness. Users can report an issue if they believe some Q/A violate the rules. Each user has only one chance to vote or report.

Also, the users have options to contribute their own questions or answers by clicking The button "ADD A QUESTION" and the link "Add Answer" to open a modal, entering their name, email, new Q/A, and images(if available) in the form, then submitting the form.

Another module is the "Search bar" which allow users to search existing questions, simultaneously it will highlight the matching results for a clear view.

## Technologies Used

- Setup and Configuration
  ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
  ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
  ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
  ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

- Front End Development
  ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

- Back End Development
  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
  ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
  ![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)

- Testing Environment
  ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

- Team Collaboration
  ![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
  ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
  ![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white)
  ![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

## Please add the following to the local library:

> npm i --save react-highlight-words

### For API Integration: The api that QA section's main index file need:

- .get("qa/questions", { params: { product_id: productId } })
- .get(`products/${productId}`)

### Parent Components and their chidren

- QAindex
  1. Search
  2. QuestionsList
  - QuestionEntry
    - AddModal 1
    - AddAnswerForm
    - AnswersList
      - Image
      - AddModal 2
    - LoadMoreAns
      - AnswersList
  3. LoadMoreQ
  - QuestionEntry
  4. AddQuestionForm
  - AddModal 3
