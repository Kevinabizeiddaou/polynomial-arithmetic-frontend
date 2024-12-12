import axios from 'https://cdn.jsdelivr.net/npm/axios@1.4.0/+esm'; // ESM-compatible Axios CDN

const BASE_URL = "http://127.0.0.1:8000"; 
const ADDITION_ENDPOINT = `${BASE_URL}/operations/addition`;

export async function performAddition(payload) {
    try {
        console.log("Payload received:", payload);
        const response = await axios.post(ADDITION_ENDPOINT, {
            poly1: payload.poly1,
            poly2: payload.poly2,
            input_type: payload.input_type,
            output_type: payload.output_type,
            m: payload.m
        });

        // Log the entire response to debug
        console.log("Response from backend:", response);

        // Validate the response structure
        if (response.data && response.data.data && response.data.data.result) {
            return response.data.data; // Return the nested 'data' object
        } else {
            throw new Error("Invalid response format: Result not found in data.");
        }
    } catch (error) {
        console.error("Error in performAddition:", error);
        throw new Error(`Network or Parsing Error: ${error.message}`);
    }
}

