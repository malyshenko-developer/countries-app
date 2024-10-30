interface Language {
    native: string;
}

interface Continent {
    name: string;
}

export interface Country {
    code: string;
    name: string;
    capital: string;
    languages: Language[];
    emoji: string;
    continent: Continent;
    phone: string;
    currency: string;
}