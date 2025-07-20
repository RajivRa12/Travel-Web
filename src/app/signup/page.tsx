"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (data.user) {
      await supabase.from("profiles").insert([{ id: data.user.id, name }]);
    }
    setMessage(error ? error.message : "Check your email for confirmation!");
  }

  return (
    <form onSubmit={handleSignUp} className="max-w-sm mx-auto p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="w-full border rounded p-2" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full border rounded p-2" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full border rounded p-2" />
      <button type="submit" className="w-full bg-primary text-white py-2 rounded font-bold">Sign Up</button>
      {message && <div className="text-center text-red-600">{message}</div>}
    </form>
  );
} 