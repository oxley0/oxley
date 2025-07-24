@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.08 0.02 280);
  --foreground: oklch(0.95 0.01 280);
  --card: oklch(0.12 0.03 280);
  --card-foreground: oklch(0.95 0.01 280);
  --popover: oklch(0.12 0.03 280);
  --popover-foreground: oklch(0.95 0.01 280);
  --primary: oklch(0.65 0.15 280);
  --primary-foreground: oklch(0.98 0.01 280);
  --secondary: oklch(0.18 0.04 280);
  --secondary-foreground: oklch(0.95 0.01 280);
  --muted: oklch(0.15 0.03 280);
  --muted-foreground: oklch(0.65 0.02 280);
  --accent: oklch(0.55 0.12 280);
  --accent-foreground: oklch(0.98 0.01 280);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(0.25 0.04 280);
  --input: oklch(0.18 0.04 280);
  --ring: oklch(0.65 0.15 280);
  --chart-1: oklch(0.65 0.15 280);
  --chart-2: oklch(0.55 0.12 300);
  --chart-3: oklch(0.75 0.18 260);
  --chart-4: oklch(0.45 0.10 320);
  --chart-5: oklch(0.85 0.20 240);
  --sidebar: oklch(0.12 0.03 280);
  --sidebar-foreground: oklch(0.95 0.01 280);
  --sidebar-primary: oklch(0.65 0.15 280);
  --sidebar-primary-foreground: oklch(0.98 0.01 280);
  --sidebar-accent: oklch(0.18 0.04 280);
  --sidebar-accent-foreground: oklch(0.95 0.01 280);
  --sidebar-border: oklch(0.25 0.04 280);
  --sidebar-ring: oklch(0.65 0.15 280);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Custom Oxley Hosting Styles */
.oxley-gradient {
  background: linear-gradient(135deg, 
    oklch(0.08 0.02 280) 0%, 
    oklch(0.12 0.04 270) 25%, 
    oklch(0.10 0.03 290) 50%, 
    oklch(0.08 0.02 280) 100%);
}

.oxley-card-gradient {
  background: linear-gradient(135deg, 
    oklch(0.12 0.03 280) 0%, 
    oklch(0.15 0.04 270) 50%, 
    oklch(0.12 0.03 290) 100%);
}

.oxley-glow {
  box-shadow: 0 0 20px oklch(0.65 0.15 280 / 0.3);
}

.oxley-glow-hover:hover {
  box-shadow: 0 0 30px oklch(0.65 0.15 280 / 0.5);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

.oxley-text-gradient {
  background: linear-gradient(135deg, 
    oklch(0.85 0.15 280) 0%, 
    oklch(0.75 0.12 270) 50%, 
    oklch(0.95 0.08 290) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.oxley-border-gradient {
  border: 1px solid transparent;
  background: linear-gradient(oklch(0.12 0.03 280), oklch(0.12 0.03 280)) padding-box,
              linear-gradient(135deg, oklch(0.65 0.15 280), oklch(0.55 0.12 300)) border-box;
}

/* Outline untuk semua paket pricing card - styling uniform */
.oxley-card-outline {
  border: 2px solid oklch(0.65 0.15 280);
  box-shadow: 0 0 30px oklch(0.65 0.15 280 / 0.5);
  transition: all 0.3s ease;
}

.oxley-card-outline:hover {
  border-color: oklch(0.75 0.18 280);
  box-shadow: 0 0 35px oklch(0.75 0.18 280 / 0.6);
  transform: scale(1.05);
}

/* Kursor pointer untuk semua elemen interaktif */
.oxley-button-cursor,
button,
a[href],
[role="button"],
.cursor-pointer {
  cursor: pointer !important;
}

.oxley-button-cursor:hover,
button:hover,
a[href]:hover,
[role="button"]:hover,
.cursor-pointer:hover {
  cursor: pointer !important;
}

/* Disable text selection untuk seluruh website */
.no-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Starfall Background Animation - Grok AI Style */
.starfall-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.falling-star {
  position: absolute;
  width: var(--star-size);
  height: var(--star-size);
  background: radial-gradient(circle, 
    oklch(1 0.4 280) 0%, 
    oklch(0.95 0.35 285) 20%, 
    oklch(0.9 0.3 290) 40%, 
    transparent 100%);
  border-radius: 50%;
  animation: starfall linear infinite;
  opacity: var(--star-opacity);
  box-shadow: 
    0 0 15px oklch(1 0.4 280),
    0 0 30px oklch(0.9 0.3 285),
    0 0 45px oklch(0.8 0.25 290);
}

.falling-star::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--trail-length);
  height: 3px;
  background: linear-gradient(90deg, 
    oklch(1 0.5 280) 0%, 
    oklch(0.95 0.45 285) 8%, 
    oklch(0.9 0.4 290) 16%, 
    oklch(0.85 0.35 295) 24%, 
    oklch(0.8 0.3 300) 32%, 
    oklch(0.7 0.25 305) 40%, 
    oklch(0.6 0.2 310) 48%, 
    oklch(0.5 0.15 315) 56%, 
    oklch(0.4 0.12 320) 64%, 
    oklch(0.3 0.1 325) 72%, 
    oklch(0.2 0.08 330) 80%, 
    oklch(0.1 0.05 335) 88%, 
    transparent 100%);
  transform: translate(-50%, -50%) rotate(var(--fall-angle));
  border-radius: 2px;
  box-shadow: 
    0 0 20px oklch(0.9 0.4 280 / 0.9),
    0 0 40px oklch(0.8 0.3 285 / 0.7),
    0 0 60px oklch(0.7 0.25 290 / 0.5);
}

.falling-star::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(var(--trail-length) * 0.7);
  height: 1px;
  background: linear-gradient(90deg, 
    oklch(1 0.6 280) 0%, 
    oklch(0.98 0.55 285) 12%, 
    oklch(0.95 0.5 290) 24%, 
    oklch(0.9 0.45 295) 36%, 
    oklch(0.85 0.4 300) 48%, 
    oklch(0.75 0.3 305) 60%, 
    oklch(0.6 0.2 310) 72%, 
    oklch(0.4 0.1 315) 84%, 
    transparent 100%);
  transform: translate(-50%, -50%) rotate(var(--fall-angle));
  filter: blur(0.5px);
}

@keyframes starfall {
  0% {
    transform: translateY(-300px) translateX(-150px);
    opacity: 0;
  }
  3% {
    opacity: var(--star-opacity);
  }
  97% {
    opacity: var(--star-opacity);
  }
  100% {
    transform: translateY(calc(100vh + 300px)) translateX(300px);
    opacity: 0;
  }
}

/* Star variants for more variety */
.falling-star:nth-child(2n) {
  background: radial-gradient(circle, 
    oklch(1 0.45 270) 0%, 
    oklch(0.95 0.4 275) 20%, 
    oklch(0.9 0.35 280) 40%, 
    transparent 100%);
  box-shadow: 
    0 0 18px oklch(1 0.45 270),
    0 0 36px oklch(0.9 0.35 275),
    0 0 54px oklch(0.8 0.3 280);
}

.falling-star:nth-child(3n) {
  background: radial-gradient(circle, 
    oklch(1 0.5 295) 0%, 
    oklch(0.95 0.45 300) 20%, 
    oklch(0.9 0.4 305) 40%, 
    transparent 100%);
  box-shadow: 
    0 0 22px oklch(1 0.5 295),
    0 0 44px oklch(0.9 0.4 300),
    0 0 66px oklch(0.8 0.35 305);
}

.falling-star:nth-child(4n) {
  animation-duration: 2s !important;
}

.falling-star:nth-child(5n) {
  animation-duration: 8s !important;
}

.falling-star:nth-child(7n) {
  animation-duration: 12s !important;
}

/* Ensure content is above stars */
.starfall-background ~ * {
  position: relative;
  z-index: 1;
}

