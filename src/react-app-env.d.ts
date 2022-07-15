/// <reference types="react-scripts" />

interface Character {
        appearance: number[];
        better_call_saul_appearance: number[];
        birthday: string;
        category: string;
        char_id: number;
        img: string;
        name: string;
        nickname: string;
        occupation: string[];
        length: number;
        portrayed: string;
        status: string;
}

interface CardProps {
    character:Character;
}