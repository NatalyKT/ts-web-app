// Вычисляем косинусное сходство между текстами файлов. В данном задании такой подход был   
// выбран, т.к. косинусное сходство может быть более эффективным в пространствах с большим числом 
// измерений (например, при работе с большими наборами текстовых данных). Однако это лишь один из
// подходов, и в зависимости от требований проекта, можно выбирать другие методы сравнения текстов.

import cosineSimilarity from 'compute-cosine-similarity';

export function calculateCosineSimilarity(text1: string, text2: string): number {
    const vector1 = text1.split(' ').map((word) => Number(word));
    const vector2 = text2.split(' ').map((word) => Number(word));

    const similarity = cosineSimilarity(vector1, vector2);

    // Обработка случая, когда cosineSimilarity возвращает null
    return similarity !== null ? similarity : 0;
}