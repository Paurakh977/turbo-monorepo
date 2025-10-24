import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="section-container">
        {/* Hero Section */}
        <div className="mb-20 text-center animate-fade-in">
          <h1 className="hero-title">
            TurboRepo
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            A minimal monorepo setup with clean components and thoughtful design.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-24">
          <Button appName="web">About</Button>
          <Button appName="web">Source</Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <Card
            href="https://nextjs.org/docs"
            title="Design System"
          >
            Minimal components with intentional spacing and typography.
          </Card>
          <Card
            href="https://turbo.build/repo/docs"
            title="Performance"
          >
            Optimized builds with intelligent caching and fast reloads.
          </Card>
          <Card
            href="https://tailwindcss.com"
            title="Development"
          >
            Utility-first CSS for rapid, consistent development.
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-500 font-medium tracking-wider">
            BUILT WITH TURBOREPO • NEXT.JS • TAILWIND CSS • TYPESCRIPT
          </p>
        </div>
      </main>
    </div>
  );
}
