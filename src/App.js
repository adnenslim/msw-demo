import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
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

  return (
    <div className='App'>
      <h3>length: {posts.length}</h3>

      {posts.length ? (
        <ul>
          {posts.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <span>Empty List</span>
      )}
    </div>
  );
}

export default App;
