import { useNavigate } from "react-router";

export default function useSearchParams() {
    const router = useNavigate(); // Initialize the router instance
    const searchParams = new URLSearchParams(window.location.search); // Parse the current URL's search parameters
    const urlSearchParams = new URLSearchParams(
        Array.from(searchParams.entries()), // Create a new URLSearchParams instance from the existing search parameters
    );

    /**
     * Updates the URL's search parameters with the provided params.
     * @param {Record<string, string>} params - An object where the keys are parameter names and the values are parameter values.
     */
    function setQueryParams(params: Record<string, string>) {
        // Iterate over each key-value pair in the params object
        Object.entries(params).forEach(([key, value]) => {
            // Set the key-value pair in the urlSearchParams instance
            urlSearchParams.set(key, String(value));
        });

        // Convert the updated urlSearchParams instance back to a query string
        const search = urlSearchParams.toString();
        const query = search ? `?${search}` : ''; // Prefix with '?' if there are search parameters

        // Use the router to navigate to the new URL with updated query parameters
        router(query);
    }

    // Return the current search parameters and the function to update them
    return { searchParams: urlSearchParams, setSearchParams: setQueryParams };
}
