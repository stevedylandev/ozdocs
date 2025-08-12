"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Declare the custom element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "oz-wizard": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        style?: React.CSSProperties;
        "data-tab"?: string;
        "data-lang"?: string;
      };
    }
  }
}

interface OZWizardProps {
  tab?: string;
  lang?: string;
}

// Global flag to prevent multiple script loads
let wizardScriptLoaded = false;

function OZWizardComponent({ tab, lang }: OZWizardProps) {
  const wizardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!wizardScriptLoaded) {
      // Check if script is already in DOM
      const existingScript = document.querySelector(
        'script[src="https://wizard.openzeppelin.com/build/embed.js"]',
      );

      if (!existingScript) {
        wizardScriptLoaded = true;

        // Dynamically load the wizard script
        const script = document.createElement("script");
        script.src = "https://wizard.openzeppelin.com/build/embed.js";
        script.async = true;

        // Add script to head
        document.head.appendChild(script);
      }
    }
  }, []);

  return (
    //@ts-ignore
    <oz-wizard
      ref={wizardRef}
      data-tab={tab}
      data-lang={lang}
      style={{
        display: "block",
        minHeight: "40rem",
      }}
    />
  );
}

// Export with SSR disabled to prevent hydration issues
const OZWizard = dynamic(() => Promise.resolve(OZWizardComponent), {
  ssr: false,
  loading: () => (
    <div
      style={{
        display: "flex",
        minHeight: "40rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        //display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#666",
      }}
    >
      Loading OpenZeppelin Contracts Wizard...
    </div>
  ),
});

export default OZWizard;
