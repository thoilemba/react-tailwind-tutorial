import { useState, Suspense, lazy } from "react";

const MarkdownPreview = lazy(() => delayForDemo(import("./MyLazyComponent.jsx")));

export default function LazySuspenseExample () {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState("Hello, world!");
  return (
    <>
      <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
      <label>
        <input type="checkbox" checked={showPreview} onChange={e => setShowPreview(e.target.checked)} />
                Show preview
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<p><i>Loading...</i></p>}>
          <h2>Preview</h2>
          <MarkdownPreview markdown={markdown} />
        </Suspense>
      )}
    </>
  );
}

// Add a fixed delay so you can see the loading state
async function delayForDemo (promise) {
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });
  return promise;
}

// This demo loads with an artificial delay.
// The next time you untick and tick the checkbox,
// Preview will be cached, so there will be no loading state.
