"use client";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [ping, setPing] = useState<string>("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  async function signIn() {
    const email = prompt("E-Mail für Magic Link:");
    if (!email) return;
    await supabase.auth.signInWithOtp({ email });
    alert("Check deine Mails für den Login-Link.");
  }
  async function signOut() {
    await supabase.auth.signOut();
    location.reload();
  }
  async function testDb() {
    const { data, error } = await supabase.from("levels").select("name").limit(1);
    if (error) setPing("Fehler: " + error.message);
    else setPing("OK: " + (data?.[0]?.name || "keine Daten"));
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Gamifizierung – MVP</h1>
      {!user ? (
        <button onClick={signIn}>Login per Magic Link</button>
      ) : (
        <>
          <p>Eingeloggt als: {user.email}</p>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={testDb}>DB testen</button>
            <button onClick={signOut}>Logout</button>
          </div>
          <p>{ping}</p>
        </>
      )}
      <p style={{ color: "#666", fontSize: 12 }}>PWA: Im Browser-Menü „Zum Home-Bildschirm hinzufügen“.</p>
    </main>
  );
}
