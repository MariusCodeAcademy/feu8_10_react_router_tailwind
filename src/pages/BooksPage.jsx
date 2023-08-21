import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function BooksPage() {
  const [mainBooksArr, setMainBooksArr] = useState([]);
  useEffect(() => {
    axios
      .get('/db/books.json')
      .then((resp) => {
        console.log('resp.data ===', resp.data);
        setMainBooksArr(resp.data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline pb-4">Books page</h1>
      <p>See alll the books we have</p>

      <h2 className="text-2xl font font-medium mb-2">Pick a book</h2>
      <ul>
        {/* sukti cikla per bookData ir sugeneruoti nuorodas su title */}
        {mainBooksArr.map((bObj) => (
          <li key={bObj.id}>
            <Link className="underline" to={`/books/${bObj.id}`}>
              {bObj.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
