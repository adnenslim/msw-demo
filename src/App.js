import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [detailsPosts, setDetailsPosts] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_DOMAIN}/posts`)
      .then((res) => res.json().then(setPosts))
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <strong>Loading...</strong>;
  if (error) return <strong>error</strong>;

  const handleClick = (id) => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_DOMAIN}/posts/${id}`)
      .then((res) => res.json().then(setDetailsPosts))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return (
    <div className='App'>
      <h3>length: {posts.length}</h3>

      {posts.length ? (
        <ul>
          {posts.map((item) => (
            <li key={item.id} onClick={() => handleClick(item.id)}>
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <span>Empty List</span>
      )}
      {JSON.stringify(detailsPosts, null, 4)}
    </div>
  );
}

export default App;
