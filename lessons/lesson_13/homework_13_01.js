function calculateCost(bucket, products) {
    let totalCost = 0;

    for (const item in bucket) {
        // Ищем цену товара в объектах склада
        for (const warehouse in products) {
            if (products[warehouse][item] !== undefined) {
                // Умножаем количество товара на его цену и добавляем к общей стоимости
                totalCost += bucket[item] * products[warehouse][item];
            }
        }
    }

    return totalCost;
}

// Пример использования
const bucket = { display: 20, videocard: 100, cpu: 40 };
const products = { warehouse1: { videocard: 12.5 }, warehouse2: { display: 56.2, cpu: 150 } };

const result = calculateCost(bucket, products);
console.log(result);