import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Cpu, Gauge, Zap, Globe2, Layers, Infinity, ArrowRight } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function GradientOrb({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute blur-3xl opacity-40 ${className}`} aria-hidden>
      <div className="w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.5),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(244,114,182,0.5),transparent_60%),radial-gradient(circle_at_60%_20%,rgba(16,185,129,0.5),transparent_60%)]" />
    </div>
  )
}

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
        <Sparkles className="h-3.5 w-3.5 text-cyan-300" /> {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-fuchsia-200">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/70 leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

export default function App() {
  const features = useMemo(() => [
    { icon: <ShieldCheck className="h-5 w-5" />, title: 'Post-Quantum Security', desc: 'Lattice-based cryptography and zk-proofs secure against next‑gen compute.' },
    { icon: <Cpu className="h-5 w-5" />, title: 'AI Co-Validation', desc: 'On-chain inference and ML oracles continuously validate network state.' },
    { icon: <Gauge className="h-5 w-5" />, title: 'Hyper Throughput', desc: 'Parallelized rollups and DAG consensus for lightning finality.' },
    { icon: <Globe2 className="h-5 w-5" />, title: 'Interchain Native', desc: 'Seamless bridges with trust-minimized light clients.' },
    { icon: <Layers className="h-5 w-5" />, title: 'Modular Design', desc: 'Composable execution layers and programmable cryptography.' },
    { icon: <Infinity className="h-5 w-5" />, title: 'Infinite Scalability', desc: 'Horizontal scaling with deterministic sharding and proofs.' },
  ], [])

  return (
    <div className="min-h-screen bg-[#05060a] text-white overflow-x-hidden">
      {/* NAVBAR */}
      <div className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5/50 backdrop-blur-xl px-4 sm:px-6 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl p-[2px] bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-amber-300">
                <div className="h-full w-full rounded-[10px] bg-black grid place-items-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>
              <span className="font-semibold tracking-wide">QuantumChain</span>
            </a>
            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#tech" className="text-white/80 hover:text-white">Technology</a>
              <a href="#products" className="text-white/80 hover:text-white">Products</a>
              <a href="#solutions" className="text-white/80 hover:text-white">Solutions</a>
              <a href="#roadmap" className="text-white/80 hover:text-white">Roadmap</a>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <a href="#" className="text-white/80 hover:text-white">Sign in</a>
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-black">
                Launch App
              </a>
            </div>
            <a href="#cta" className="md:hidden inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-3 py-1.5 text-xs font-semibold text-black">
              Launch
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative pt-40 pb-24">
        <GradientOrb className="-top-24 -left-24" />
        <GradientOrb className="top-40 -right-24" />

        <div className="absolute inset-0 -z-10">
          <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05060a]/30 via-[#05060a]/50 to-[#05060a]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.h1
                initial="hidden" animate="show" variants={fadeInUp}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-cyan-200"
              >
                The Quantum‑AI Blockchain for a Holographic Economy
              </motion.h1>
              <motion.p
                initial="hidden" animate="show" variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
              >
                Reflective cubes, neon energy, and an endlessly rotating core. Build apps with post‑quantum security, on‑chain AI, and modular scaling — all in one luminous network.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-6 py-3 text-base font-semibold text-black shadow-[0_0_0_2px_rgba(255,255,255,0.2)_inset]">
                  Launch Testnet <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#tech" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-medium text-white/90">
                  Explore Technology
                </a>
              </motion.div>
              <div className="mt-8 flex items-center gap-6 text-white/70">
                <div className="flex -space-x-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 border border-white/10" />
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 border border-white/10" />
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-amber-300 to-fuchsia-400 border border-white/10" />
                </div>
                <p className="text-sm">Trusted by builders across AI, DeFi, and infrastructure.</p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-1">
                <div className="rounded-xl bg-black/70 p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'TPS', value: '250k+' },
                      { label: 'Latency', value: '200ms' },
                      { label: 'Finality', value: '~1s' },
                      { label: 'Validators', value: '4,096' },
                      { label: 'Carbon', value: 'Neutral' },
                      { label: 'Security', value: 'PQ-Ready' },
                    ].map((m) => (
                      <div key={m.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                        <div className="text-xs text-white/60">{m.label}</div>
                        <div className="mt-1 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <Zap className="h-4 w-4 text-amber-300" />
                      <span className="text-sm text-white/80">Quantum RNG</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                      <Cpu className="h-4 w-4 text-cyan-300" />
                      <span className="text-sm text-white/80">On‑chain AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section id="tech" className="relative py-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Tech Stack"
            title="Quantum‑secure. AI‑accelerated. Infinitely modular."
            subtitle="Engineered for the next era of cryptography and compute."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 blur-3xl" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-cyan-200">
                      {f.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-white/70">{f.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-cyan-300/90">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SHOWCASE */}
      <section id="products" className="relative py-24">
        <GradientOrb className="-bottom-24 -left-24" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Products"
            title="Everything you need to build and scale"
            subtitle="From L2 rollups to AI oracles — all secured by quantum‑resistant proofs."
          />
          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            {[
              {
                title: 'Hologram Rollups',
                desc: 'Spin up modular rollups with deterministic sharding and zk‑proof aggregation.',
              },
              {
                title: 'Neural Oracles',
                desc: 'On‑chain inference with verifiable ML and programmable risk controls.',
              },
              {
                title: 'Photon Wallet',
                desc: 'PQ-secure identity and MPC signatures with seamless account abstraction.',
              },
              {
                title: 'Quantum Bridge',
                desc: 'Trust-minimized interchain connectivity via light clients and proofs.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 sm:p-8"
              >
                <div className="absolute inset-0 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.15),rgba(244,114,182,0.15),rgba(16,185,129,0.15))] animate-pulse" />
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                  <p className="mt-3 text-white/75 max-w-prose">{card.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90">
                    <Zap className="h-4 w-4 text-amber-300" /> Start Building
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS MARQUEE */}
      <section id="solutions" className="relative py-20">
        <div className="overflow-hidden">
          <div className="whitespace-nowrap will-change-transform animate-[marquee_22s_linear_infinite]">
            {['AI Agents', 'DeFi', 'Gaming', 'Identity', 'RWA', 'Infra', 'Data DA', 'DePIN', 'Social', 'Payments'].map((item) => (
              <span key={item} className="mx-8 inline-flex items-center gap-3 text-white/60 text-xl">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
                {item}
              </span>
            ))}
          </div>
        </div>
        <style>{`@keyframes marquee { 0%{ transform: translateX(0);} 100%{ transform: translateX(-50%);} }`}</style>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'For Builders', desc: 'SDKs, templates, and verifiable compute to ship faster.' },
              { title: 'For Enterprises', desc: 'Compliance‑ready infrastructure with audit trails.' },
              { title: 'For Researchers', desc: 'Open cryptography and datasets for reproducible science.' },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/70">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Roadmap"
            title="From Testnet to Mainnet and beyond"
            subtitle="A focused path to a quantum‑secure, AI‑native future."
          />
          <div className="mt-12 grid lg:grid-cols-4 gap-6">
            {[
              { q: 'Q1', title: 'Testnet Phoenix', bullets: ['Validator set bootstrapped', 'zk‑VM preview', 'AI oracle alpha'] },
              { q: 'Q2', title: 'Developer Beta', bullets: ['Rollup launcher', 'Account abstraction', 'Quantum RNG'] },
              { q: 'Q3', title: 'Mainnet Launch', bullets: ['DAG consensus', 'Light client bridges', 'Security audit'] },
              { q: 'Q4', title: 'Scaling Era', bullets: ['Deterministic sharding', 'zk‑proof aggregation', 'Research grants'] },
            ].map((r) => (
              <div key={r.q} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="absolute -top-3 -left-3 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-3 py-1 text-xs font-semibold text-black">
                  {r.q}
                </div>
                <h4 className="mt-4 text-lg font-bold">{r.title}</h4>
                <ul className="mt-3 space-y-2 text-white/80 text-sm">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative py-24">
        <GradientOrb className="-top-24 right-10" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(1200px_400px_at_90%_10%,rgba(56,189,248,0.25),transparent),radial-gradient(1200px_400px_at_10%_90%,rgba(244,114,182,0.25),transparent)] p-1">
            <div className="rounded-[22px] bg-black/50 p-8 sm:p-12">
              <div className="grid lg:grid-cols-3 gap-10 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-fuchsia-200">
                    Ready to build the future?
                  </h3>
                  <p className="mt-3 text-white/80 max-w-prose">
                    Join the testnet, claim your builder NFT, and get access to grants, credits, and priority support.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-6 py-3 text-base font-semibold text-black" href="#">
                      Get Testnet Access <ArrowRight className="h-4 w-4" />
                    </a>
                    <a className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-medium text-white/90" href="#">
                      View Docs
                    </a>
                  </div>
                </div>
                <div className="lg:justify-self-end">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-cyan-200">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">Audit‑grade security</div>
                        <div className="text-xs text-white/60">PQ‑ready cryptography</div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-cyan-200">
                        <Cpu className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-semibold">On‑chain AI</div>
                        <div className="text-xs text-white/60">Verifiable inference</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg p-[2px] bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-amber-300">
                <div className="h-full w-full rounded-[8px] bg-black grid place-items-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
              <span className="text-white/80 text-sm">© {new Date().getFullYear()} QuantumChain</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
