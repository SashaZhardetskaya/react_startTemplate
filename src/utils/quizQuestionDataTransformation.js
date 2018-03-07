export const deleteQuizQuestion = (state, id) => (
    [...state.quizQuestions].filter(item => item.id !== id)
);

export const updateQuizQuestion = (state, question) => (
    state.quizQuestions.map((item) => {
        if (item.id === question.id) {
            return {
                ...item,
                ...question.info
            }
        } else {
            return {
                ...item
            }
        }
    })
);