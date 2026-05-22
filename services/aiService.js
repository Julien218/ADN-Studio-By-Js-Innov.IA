/**
 * aiService.js
 *
 * This module encapsulates the logic for calling the AI back end to
 * generate designs.  The `generateDesign` function posts the user's
 * prompt and any uploaded assets to an API endpoint and returns
 * the response as JSON.
 *
 * In this MVP the back end API is not implemented; it simply returns
 * a placeholder image hosted at placehold.co.  To hook up a real
 * service, change the URL in the fetch call to your own endpoint and
 * handle authentication or API keys as required.
 */

export async function generateDesign(prompt, assets = {}) {
  // Stub API call – replace with your own back end
  const response = await fetch('/api/adn/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt, assets })
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}