import React from 'react';

const Nexus = () => {
  return (
    <div className="bg-paper bg-grid-pattern text-ink font-sans antialiased overflow-x-hidden min-h-screen selection:bg-electricBlue selection:text-white pt-12 md:pt-24 pb-20 md:pb-32 animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-8">
          <a href="/" className="font-mono text-xs uppercase tracking-widest text-inkLight hover:text-ink transition-colors mb-6 inline-block">
            ← Back to Home
          </a>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-ink text-white font-mono text-[10px] md:text-xs px-2 py-1 uppercase tracking-widest">Homelab</span>
          </div>
          <h1 className="font-bold text-3xl md:text-5xl mb-2 mt-2">Project Nexus</h1>
          <p className="text-sm md:text-lg text-inkLight font-mono leading-relaxed">Raspberry Pi 4 Homelab Architecture</p>
        </div>

        {/* Consistent Dashed Line Separator */}
        <div className="w-full border-b-2 border-dashed border-ink/20 mb-8 md:mb-12"></div>

        {/* Hero Image / Diagram */}
        <div className="w-full h-48 md:h-96 bg-paper shadow-md mb-8 md:mb-12 relative overflow-hidden group border border-ink/10 p-2">
          <div className="w-full h-full bg-white relative overflow-hidden">
            <img 
              src="/images/nexushome.png" // <-- Replace with your actual image path
              alt="Raspberry Pi Homelab Architecture" 
              className="w-full h-full object-cover contrast-125 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Consistent Dashed Line Separator */}
        <div className="w-full border-b-2 border-dashed border-ink/20 mb-8 md:mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            <section className="bg-white p-5 md:p-6 shadow-md border border-ink/10 relative">
              <h2 className="text-xl md:text-2xl font-bold mb-4 font-mono">Overview</h2>
              <p className="text-sm leading-relaxed text-inkLight mb-4">
                Project Nexus is a self-hosted homelab provisioned on a Raspberry Pi 4. It serves as an edge server for localized network management, media hosting, and testing environments, utilizing containerized microservices orchestrated through Docker and Portainer. The system is built around a zero-trust architecture, ensuring internal services are shielded from the public internet.
              </p>
            </section>

            <section className="bg-white p-5 md:p-6 shadow-md border border-ink/10 relative">
              <h2 className="text-xl md:text-2xl font-bold mb-6 font-mono">Architecture & Core Services</h2>
              <ul className="space-y-6 text-sm text-inkLight">
                <li className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <span className="dymo-tape shrink-0 text-[10px] sm:text-xs mt-1">01</span>
                  <div>
                    <strong className="text-ink block text-base font-bold mb-1">Docker & Portainer Orchestration</strong>
                    The software stack is entirely containerized using Docker Compose for isolated and reproducible environments. Portainer provides a centralized GUI for managing container lifecycles, persistent volumes, and custom bridge networks.
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <span className="dymo-tape shrink-0 text-[10px] sm:text-xs mt-1">02</span>
                  <div>
                    <strong className="text-ink block text-base font-bold mb-1">Nginx Proxy Manager & Internal Domains</strong>
                    Nginx Proxy Manager (NPM) acts as a reverse proxy, mapping specific container ports to clean, custom internal domain names (e.g., <code className="bg-paper px-1 border border-ink/10 break-all">home.wyellgaray.dev</code>). NPM handles internal routing without exposing vulnerable ports directly to the host network.
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <span className="dymo-tape shrink-0 text-[10px] sm:text-xs mt-1">03</span>
                  <div>
                    <strong className="text-ink block text-base font-bold mb-1">Tailscale Mesh VPN</strong>
                    A zero-trust mesh VPN configured to restrict access to the Nginx Proxy Manager domain names. These services are completely inaccessible via the public internet; they can only be reached and resolved when a client device is authenticated and actively connected to the Tailscale network.
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <span className="dymo-tape shrink-0 text-[10px] sm:text-xs mt-1">04</span>
                  <div>
                    <strong className="text-ink block text-base font-bold mb-1">Pi-hole</strong>
                    Network-wide DNS sinkhole to block ads and telemetry at the router level, concurrently managing local DNS records to resolve the reverse proxy domains seamlessly.
                  </div>
                </li>
                <li className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <span className="dymo-tape shrink-0 text-[10px] sm:text-xs mt-1">05</span>
                  <div>
                    <strong className="text-ink block text-base font-bold mb-1">Audiobookshelf</strong>
                    Self-hosted media servers for streaming audiobooks directly from external attached storage, accessible from outside the home network through a VPN.
                  </div>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar Specs */}
          <div className="space-y-8">
            <div className="bg-white p-5 md:p-6 border border-ink/10 shadow-md relative hover:rotate-[1deg] transition-transform">
              <div className="tape w-20 md:w-24 h-5 md:h-6 absolute -top-3 left-1/2 -translate-x-1/2 z-10 rotate-[-2deg]"></div>
              <h3 className="font-bold text-lg md:text-xl mb-4 text-ink">Hardware</h3>
              <ul className="space-y-3 font-mono text-xs text-inkLight">
                <li className="border-b border-ink/5 pb-2">• Raspberry Pi 4B</li>
                <li className="border-b border-ink/5 pb-2">• 128GB SSD</li>
                <li className="border-b border-ink/5 pb-2">• 500GB LG External HDD</li>
                <li className="pb-1">• MicroSD Boot Drive</li>
              </ul>
            </div>

            <div className="bg-white p-5 md:p-6 border border-ink/10 shadow-md relative hover:rotate-[-1deg] transition-transform">
              <div className="tape w-16 md:w-20 h-5 md:h-6 absolute -top-3 left-1/2 -translate-x-1/2 z-10 rotate-[3deg]"></div>
              <h3 className="font-bold text-lg md:text-xl mb-4 text-ink">Tech Stack</h3>
              <ul className="space-y-3 font-mono text-xs text-inkLight">
                <li className="border-b border-ink/5 pb-2">• Debian Trixie (Linux)</li>
                <li className="border-b border-ink/5 pb-2">• PuTTY & WayVNC</li>
                <li className="border-b border-ink/5 pb-2">• Docker & Compose</li>
                <li className="border-b border-ink/5 pb-2">• Portainer</li>
                <li className="border-b border-ink/5 pb-2">• Nginx Proxy Manager</li>
                <li className="border-b border-ink/5 pb-2">• Tailscale VPN</li>
                <li className="pb-1">• name.com Domain</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Nexus;