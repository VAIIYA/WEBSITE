'use client'

import React, { useState } from 'react'

const agentCapabilities = [
  {
    id: 'autonomous-code',
    title: 'Autonomous Code Generation',
    description: 'Self-correcting coding agents that research existing repositories, write type-safe code, and perform end-to-end verifications.',
    icon: '⚡',
    badge: 'Code Engine',
    color: 'border-orange-200 bg-orange-50/50 text-[#E25A3C]',
  },
  {
    id: 'multi-agent',
    title: 'Multi-Agent Orchestration',
    description: 'Hierarchical agent architecture where planner subagents coordinate worker subagents for concurrent task execution.',
    icon: '🧩',
    badge: 'Orchestrator',
    color: 'border-purple-200 bg-purple-50/50 text-[#1F1F1F]',
  },
  {
    id: 'firebase-ai',
    title: 'Firebase & Gemini Integration',
    description: 'Direct integration with Firebase AI Logic and Google Gemini API for multimodal reasoning and structured outputs.',
    icon: '🔥',
    badge: 'AI Backend',
    color: 'border-cyan-200 bg-cyan-50/50 text-cyan-700',
  },
  {
    id: 'automated-qa',
    title: 'Automated QA & DevTools',
    description: 'Chrome DevTools and Android CLI agents that run automated visual regressions, accessibility audits, and device tests.',
    icon: '🛡️',
    badge: 'QA & Testing',
    color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700',
  },
]

export default function AgenticEngineeringSection() {
  const [selectedAgent, setSelectedAgent] = useState('autonomous-code')
  const [simState, setSimState] = useState<'idle' | 'running' | 'done'>('idle')

  const handleRunSimulation = () => {
    setSimState('running')
    setTimeout(() => {
      setSimState('done')
    }, 2500)
  }

  return (
    <section id="agentic" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#E25A3C] text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#E25A3C] animate-ping" />
            CORE PILLAR • AGENTIC ENGINEERING
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 font-serif">
            Autonomous <span className="text-[#E25A3C] italic">AI Agents</span> Building Production Systems
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed font-normal">
            At VAIIYA, we don&apos;t just write software manually—we build and deploy autonomous agentic AI systems that design, engineer, test, and ship complete modern web and mobile applications.
          </p>
        </div>

        {/* 2-Column Grid: Cards & Live Interactive Agent Workflow Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Capabilities Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {agentCapabilities.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedAgent(item.id)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 border bg-white shadow-sm hover:shadow-md hover:-translate-y-1 ${
                  selectedAgent === item.id ? 'ring-2 ring-[#E25A3C] border-transparent shadow-lg' : 'border-slate-200/80'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.color}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Live Agent Simulator Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-white rounded-3xl p-7 shadow-2xl border border-slate-800">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">agentic_workflow.sim</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-purple-950 text-purple-300 border border-purple-800">
                  INTERACTIVE
                </span>
              </div>

              {/* Execution Status Screen */}
              <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 font-mono text-xs space-y-4 mb-6 min-h-[220px]">
                <div className="text-slate-400">
                  Target: <span className="text-cyan-400 font-semibold">{selectedAgent.toUpperCase()}</span>
                </div>

                {simState === 'idle' && (
                  <div className="text-slate-500 space-y-2">
                    <p>&gt; Ready for agent execution simulation.</p>
                    <p>&gt; Click below to launch agent workflow pipeline.</p>
                  </div>
                )}

                {simState === 'running' && (
                  <div className="space-y-2">
                    <div className="text-amber-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      Step 1/3: Parsing repository dependencies...
                    </div>
                    <div className="text-slate-400">&gt; Spawning subagent: Codebase Researcher</div>
                    <div className="text-slate-400">&gt; Generating Next.js + Kotlin code modules...</div>
                    <div className="text-slate-400">&gt; Running build verification...</div>
                  </div>
                )}

                {simState === 'done' && (
                  <div className="space-y-2">
                    <div className="text-emerald-400 font-bold">✓ Execution Succeeded (0 Errors)</div>
                    <div className="text-slate-300">&gt; Verified: 100% Type-Safe Output</div>
                    <div className="text-slate-300">&gt; Artifact Generated: build_manifest.json</div>
                    <div className="text-cyan-400">&gt; Status: Ready for Vercel & Play Store</div>
                  </div>
                )}
              </div>

              {/* Simulation Trigger Button */}
              <button
                onClick={handleRunSimulation}
                disabled={simState === 'running'}
                className="w-full btn-metamask btn-orange text-sm font-bold flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {simState === 'running' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Executing Agent Task...
                  </>
                ) : simState === 'done' ? (
                  '⚡ Re-Run Simulation'
                ) : (
                  '🚀 Launch Agent Simulation'
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
