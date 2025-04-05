export async function fetchGeminiData(apiKey, prompt) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateText?key=${apiKey}`;

    const body = {
        prompt: { text: prompt }, // Input prompt for Gemini API
        maxTokens: 100,          // Limit for output tokens
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Log the response for debugging
        return data.candidates[0].output; // Return the generated text
    } catch (error) {
        console.error('Error calling Gemini API:', error);
        return null; // Return null on error
    }
}
