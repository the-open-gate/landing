import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-def bg-background">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
