import ReactDOM from 'react-dom/client';

function App() {
  return (
    <main
      style={{
        minHeight: '100%',
        display: 'grid',
        placeItems: 'center',
        padding: '2rem',
        color: '#f5f7ff',
        textAlign: 'center',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <section style={{ maxWidth: '32rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>AstrogameWAR</h1>
        <p style={{ margin: 0, lineHeight: 1.6 }}>
          Capacitor Android build pipeline is ready. Add the full game UI under
          <code style={{ marginLeft: '0.35rem' }}>src/</code> when the app is ready.
        </p>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
