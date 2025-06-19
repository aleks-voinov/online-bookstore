# Онлайн книжарница (Online Bookstore)

## 📌 Описание
Този проект представя MongoDB база данни за онлайн книжарница. Той включва пет основни колекции, които симулират реална система за продажба на книги, клиенти и поръчки.

## 🗂 Колекции

1. **books** – съдържа информация за книги.
2. **authors** – съдържа информация за автори.
3. **customers** – информация за клиентите на книжарницата.
4. **orders** – поръчки, направени от клиенти.
5. **reviews** – рецензии за книги, писани от клиенти.



## 📦 Структура на документите

### Първо е books структурата и след това са authors, customers, orders, reviews 
```json
{
  "title": "Book Title",
  "genre": "Fiction",
  "price": 19.99,
  "authorId": ObjectId,
  "tags": ["bestseller", "2024"],
  "details": {
    "pages": 320,
    "publisher": "Penguin"
  }
}

{
  "name": "Author Name",
  "birthYear": 1970,
  "nationality": "British",
  "awards": ["Booker Prize", "Nobel"]
}

{
  "name": "Customer Name",
  "email": "example@email.com",
  "address": {
    "city": "Sofia",
    "street": "Vitosha Blvd",
    "zip": "1000"
  },
  "favorites": [ObjectId]
}

{
  "customerId": ObjectId,
  "items": [
    { "bookId": ObjectId, "quantity": 2 }
  ],
  "total": 39.98,
  "status": "shipped",
  "orderDate": ISODate("2025-06-15T00:00:00Z")
}

{
  "bookId": ObjectId,
  "customerId": ObjectId,
  "rating": 4,
  "comment": "Great read!",
  "date": ISODate("2025-06-01T00:00:00Z")
}
