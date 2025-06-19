const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function runQueries() {
  await client.connect();
  const db = client.db('online_bookstore');

  // 📖 books – Извличане на всички книги
  console.log(await db.collection('books').find().toArray());

  // 📖 books – Филтриране по жанр
  console.log(await db.collection('books').find({ genre: 'Fantasy' }).toArray());

  // 📖 books – Актуализация на цена
  await db.collection('books').updateOne({ title: '1984' }, { $set: { price: 10.99 } });

  // 📖 books – Изтриване по заглавие
  await db.collection('books').deleteOne({ title: 'Some Outdated Book' });

  // 📖 books – Агрегиране: групиране по жанр с обща сума
  console.log(await db.collection('books').aggregate([
    { $group: { _id: '$genre', total: { $sum: '$price' } } }
  ]).toArray());

  // 🔄 Повтори за authors, customers, orders, reviews с подходящи CRUD + aggregate...

  await client.close();
}

runQueries();
