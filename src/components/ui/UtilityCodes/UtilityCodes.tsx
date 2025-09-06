"use client";

import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import { utilities } from "@/components/ui/UtilityCodes/UtilityCodeslist";
import { useState } from "react";

const UtilityCodes = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code.trim());
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="w-1/2 max-w-full px-6 flex flex-col h-[72vh]">
      <h2 className="text-xl font-bold mb-6 mt-4 text-Appearance-Slate-200">
        My Utility Codes
      </h2>
      <div className="flex flex-col gap-6 flex-1 overflow-y-auto">
        {utilities.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-lg border"
            style={{ backgroundColor: "#020618", borderColor: "#314158" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b bg-Appearance-Slate-900 rounded-t-lg border-Appearance-Slate-700">
              <div>
                <p className="text-sm font-semibold text-gray-200">
                  {item.title}.ts
                </p>
                <p className="text-xs text-gray-400">{item.description}</p>
              </div>
              <button
                onClick={() => handleCopy(item.code, index)}
                className="text-xs px-3 py-1 rounded-md bg-Appearance-Slate-700 text-gray-200 hover:opacity-80 transition"
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* Code */}
            <div className="overflow-x-auto">
              <CodeBlock code={item.code} language={item.language} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UtilityCodes;
