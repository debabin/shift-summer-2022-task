import { translateBlock } from "./translateBlock";

export const getErrorMessage = (err) => {
    if (err.response.data.data) {
        let data = err.response.data.data;
        let errors = Object.entries(data).map(block => {
            return [block[0], Object.values(Object.values(block)[1])].flat();
        });
        console.log(errors)
        if (errors) {
            return translateBlock(errors[0][0]) + ": " + errors[0][1]

        }
    }
    return "Упс! Кажется, что-то пошло не так. Приносим свои извинения."

};