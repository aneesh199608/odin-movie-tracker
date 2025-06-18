export interface Movies {
    image: string;
    title: string;
    description: string;
    rating: number;
    onAddToWatch?: () => void;
    category?: string;

    director: string;
    runtime: string;
    moreDescription: string;
    cast: string[];
    year: number;
}