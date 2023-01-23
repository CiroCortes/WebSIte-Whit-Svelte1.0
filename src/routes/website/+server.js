export const GET = async () => {
  const markup = " <html><body><h1>ciro cortes</h1></body></html>";

  return new Response(markup, {
    headers: {
      "Content-Type": "text/html",
    },
  });
};
