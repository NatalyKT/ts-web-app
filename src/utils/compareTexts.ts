// src/utils/compareTexts.ts
import cosineSimilarity from 'compute-cosine-similarity';

export function calculateCosineSimilarity(text1: string, text2: string): number {
    const vector1 = text1.split(' ').map((word) => Number(word));
    const vector2 = text2.split(' ').map((word) => Number(word));

    const similarity = cosineSimilarity(vector1, vector2);

    // Обработка случая, когда cosineSimilarity возвращает null
    return similarity !== null ? similarity : 0;
}


