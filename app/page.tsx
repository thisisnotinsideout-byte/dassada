export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div style={{ position: 'relative', minHeight: '600px' }}>
      <button style={{
          "position": "absolute",
          "left": "302px",
          "top": "142px",
          "backgroundColor": "#3b82f6",
          "color": "#ffffff",
          "fontSize": "16px",
          "fontWeight": "600",
          "padding": "12px 24px",
          "borderRadius": "8px"
        }}>
        Click me
      </button>

      <p style={{
          "position": "absolute",
          "left": "405px",
          "top": "76px",
          "color": "#000000",
          "fontSize": "16px"
        }}>
        Lorem ipsum dolor sit amet
      </p>

      <img
        src="https://via.placeholder.com/400x300"
        alt="Placeholder image"
        style={{
          "position": "absolute",
          "left": "0px",
          "top": "0px",
          "width": "400px",
          "height": "300px",
          "borderRadius": "8px"
        }}
      />
      </div>
    </main>
  );
}