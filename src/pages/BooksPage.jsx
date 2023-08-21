import axios from 'axios';
import { useEffect, useState } from 'react';
import BookItem from '../components/BookItem';

export default function BooksPage() {
  const [mainBooksArr, setMainBooksArr] = useState([]);
  // filte state 'currentCategory'
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

      <fieldset className="border border-slate-500 p-4 flex gap-4">
        <legend>Filter books</legend>

        <div className="flex gap-2">
          <input type="checkbox" id="fantasy" />
          <label htmlFor="fantasy">Fantasy</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="fiction" />
          <label htmlFor="fiction">Fiction</label>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" id="reality" />
          <label htmlFor="reality">Reality</label>
        </div>
      </fieldset>

      <h2 className="text-2xl font font-medium mb-2">Pick a book</h2>
      <ul>
        {/* sukti cikla per bookData ir sugeneruoti nuorodas su title */}
        {mainBooksArr.map((bObj) => (
          <BookItem
            key={bObj.id}
            title={bObj.title}
            id={bObj.id}
            category={bObj.category}
          />
        ))}
      </ul>
    </div>
  );
}
