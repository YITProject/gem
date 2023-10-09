"use client";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        {error.digest && <h2>{error.digest}</h2>}
        <button onClick={() => reset()}>RESET</button>
      </body>
    </html>
  );
}
