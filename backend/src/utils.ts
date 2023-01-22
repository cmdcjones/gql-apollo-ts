// Helper functions to convert non-human readable data into human readable data
// Useful for clean code and abstraction (more declarative)

const MILLISECONDS = 1000;

// Function for converting release data in epoch seconds to human readable date
export function convertEpochSeconds(epochSeconds: number): string {
    return new Date(epochSeconds * MILLISECONDS).toDateString();
}

