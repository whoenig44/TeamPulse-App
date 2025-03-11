module.exports = {
    formatOutput: (data) => {
        return JSON.stringify(data, null, 2);
    },

    validateInput: (input) => {
        if (!input || typeof input !== 'string') {
            throw new Error('Invalid input. Please provide a valid string.');
        }
        return input.trim();
    },

    handleError: (error) => {
        console.error('An error occurred:', error.message);
    }
};