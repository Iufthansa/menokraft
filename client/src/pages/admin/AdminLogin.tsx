import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, isAuthenticated } from "@/utils/auth";
import { Navigate } from "react-router-dom";



type FormState = {
  email: string;
  password: string;
};

const AdminLogin = () => {
  const navigate = useNavigate();


  if (isAuthenticated()) {
    return <Navigate to="/admin/dashboard" />;
  }

  const [form, setForm] = useState<FormState>({
    email: "",
    password: ""
  });

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      //  FIX 1: Use your auth helper
      login(data.token);

      //  Navigate after login
      navigate("/admin/dashboard");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Admin Login</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5"
  },
  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "300px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#333",
    color: "#fff",
    border: "none",
    cursor: "pointer"
  },
  error: {
    color: "red",
    marginBottom: "10px"
  }
};