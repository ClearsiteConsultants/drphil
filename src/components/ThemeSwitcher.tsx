import { useState } from 'react';
import { Palette, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { themes, ThemeVariant } from '../constants/themes';

export const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (themeId: ThemeVariant) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[var(--color-primary)] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
        aria-label="Theme Switcher"
      >
        <Palette className="w-6 h-6" />
      </button>

      {/* Theme selector modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Choose a Theme</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid gap-4">
              {Object.values(themes).map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  className={`p-6 rounded-lg border-2 text-left transition-all duration-200 hover:shadow-lg ${
                    currentTheme === theme.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {theme.name}
                        {currentTheme === theme.id && (
                          <span className="ml-2 text-sm text-blue-600">(Current)</span>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{theme.description}</p>
                      <div className="flex gap-2">
                        <div
                          className="w-12 h-12 rounded border border-gray-300"
                          style={{ backgroundColor: theme.colors.primary }}
                          title="Primary"
                        />
                        <div
                          className="w-12 h-12 rounded border border-gray-300"
                          style={{ backgroundColor: theme.colors.secondary }}
                          title="Secondary"
                        />
                        <div
                          className="w-12 h-12 rounded border border-gray-300"
                          style={{ backgroundColor: theme.colors.accent }}
                          title="Accent"
                        />
                        <div
                          className="w-12 h-12 rounded border border-gray-300"
                          style={{ backgroundColor: theme.colors.background }}
                          title="Background"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> This is a preview feature for client review. The selected
                theme will be saved to your browser and persist across visits.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
