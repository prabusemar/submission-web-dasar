// FAQ accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        // Toggle active class for the clicked question
        question.classList.toggle('active');

        // Get the next sibling element (faq-answer)
        const answer = question.nextElementSibling;

        // If the question is active, expand the answer
        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px'; // Expand to full height
        } else {
            answer.style.maxHeight = null; // Collapse
        }
    });
});
