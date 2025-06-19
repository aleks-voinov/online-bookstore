const { MongoClient, ObjectId } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function insertData() {
  try {
    await client.connect();
    const db = client.db('online_bookstore');

    // Insert into authors
    const authors = db.collection('authors');
    await authors.insertMany([
      { name: 'George Orwell', birthYear: 1903, nationality: 'British', awards: ['Prometheus Hall of Fame'] },
      { name: 'J.K. Rowling', birthYear: 1965, nationality: 'British', awards: ['Hugo', 'Nestlé Smarties'] },
      { name: 'Stephen King', birthYear: 1947, nationality: 'American', awards: ['Bram Stoker', 'Hugo'] },
      { name: 'Haruki Murakami', birthYear: 1949, nationality: 'Japanese', awards: ['Franz Kafka Prize'] },
      { name: 'Margaret Atwood', birthYear: 1939, nationality: 'Canadian', awards: ['Booker Prize'] },
    ]);

    const authorDocs = await authors.find().toArray();

    // Insert into books
    const books = db.collection('books');
    await books.insertMany([
      {
        title: '1984',
        genre: 'Dystopian',
        price: 12.99,
        authorId: authorDocs[0]._id,
        tags: ['classic', 'politics'],
        details: { pages: 328, publisher: 'Secker & Warburg' },
      },
      {
        title: 'Harry Potter and the Philosopher\'s Stone',
        genre: 'Fantasy',
        price: 15.50,
        authorId: authorDocs[1]._id,
        tags: ['fantasy', 'magic'],
        details: { pages: 223, publisher: 'Bloomsbury' },
      },
      // Add 8 more books similarly...
    ]);

    // Insert into customers
    const customers = db.collection('customers');
    await customers.insertMany([
      {
        name: 'Ivan Petrov',
        email: 'ivan@abv.bg',
        address: { city: 'Sofia', street: 'Bulgaria Blvd', zip: '1404' },
        favorites: [],
      },
      // Add 9 more customers similarly...
    ]);

    // Insert into orders
    const orders = db.collection('orders');
    await orders.insertMany([
      {
        customerId: ObjectId(), // You can later reference real _id
        items: [{ bookId: ObjectId(), quantity: 1 }],
        total: 15.50,
        status: 'shipped',
        orderDate: new Date('2025-06-15'),
      },
      // Add 9 more orders similarly...
    ]);

    // Insert into reviews
    const reviews = db.collection('reviews');
    await reviews.insertMany([
      {
        bookId: ObjectId(),
        customerId: ObjectId(),
        rating: 5,
        comment: 'Amazing book!',
        date: new Date('2025-06-01'),
      },
      // Add 9 more reviews similarly...
    ]);

    console.log('Данните са успешно вмъкнати.');
  } finally {
    await client.close();
  }
}

insertData();
