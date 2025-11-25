import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

export default function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (data) => {
    setUser(data);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (user) {
    return <DashboardPage user={user} onLogout={handleLogout} />;
  }

  return <LoginPage onSuccess={handleLoginSuccess} />;
}

