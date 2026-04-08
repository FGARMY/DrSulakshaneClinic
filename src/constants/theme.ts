/**
 * Global theme constants for the Dr. Sulakshane Clinic project.
 * Standardizes colors, spacing, and brand identity.
 */

export const THEME = {
  colors: {
    primary: "#4F46E5", // Indigo 600
    primaryDark: "#4338CA", // Indigo 700
    primaryLight: "#EEF2FF", // Indigo 50
    secondary: "#10B981", // Emerald 500
    secondaryDark: "#059669", // Emerald 600
    accent: "#F59E0B", // Amber 500
    slate: {
      50: "#F8FAFC",
      100: "#F1F5F9",
      200: "#E2E8F0",
      600: "#475569",
      900: "#0F172A",
    },
  },
  animations: {
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  borderRadius: {
    base: "1rem",
    large: "2rem",
    full: "9999px",
  },
};

export const CLINIC_INFO = {
  name: "Dr. Sulakshane Clinic",
  tagline: "Expert Surgical & Child Care",
  email: "contact@drsulakshane.com",
  phone: "+91 98765 43210",
  location: "Pune, Maharashtra",
};
