/**
 * Test route for verifying cross-origin isolation headers
 * This route is used by the bug condition exploration tests to verify
 * that COEP and COOP headers are properly applied
 */

export default function TestHeadersPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Cross-Origin Isolation Test Page</h1>
      <p>This page is used to test cross-origin isolation headers.</p>
      <p>Check the browser console for cross-origin isolation status.</p>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            console.log('Cross-origin isolated:', self.crossOriginIsolated);
            console.log('SharedArrayBuffer available:', typeof SharedArrayBuffer !== 'undefined');
          `,
        }}
      />
    </div>
  );
}
