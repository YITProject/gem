"use client";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        {error.digest ? <h2>{error.digest}</h2> : null}
        <button onClick={() => { reset(); }}>RESET</button>
      </body>
    </html>
  );
}
