import { useState } from 'react';

export default function LoginPage({ onSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const API_BASE = import.meta.env.VITE_API_BASE;
  
  const handleSubmit = async () => {
    setError('');

    try {
      const response = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid credentials');
      }

      onSuccess(data);
      setUsername('');
      setPassword('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="auth-layout">
      <section className="card">
        <header className="card__header">
          <h1>Welcome back</h1>
          <p>Please sign in to continue</p>
        </header>
        <div className="form">
          <label className="form__label">
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </label>
          <label className="form__label">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </label>
          {error && <p className="form__error">{error}</p>}
          <button className="button" type="button" onClick={handleSubmit}>
            Sign in
          </button>
        </div>
      </section>
    </main>
  );
}