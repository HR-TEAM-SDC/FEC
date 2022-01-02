**Please add the following to the local library:**

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
