export const videoQuizQuestion = (state, id) => (
    [...state.videoQuestions].filter(item => item.id !== id)
);