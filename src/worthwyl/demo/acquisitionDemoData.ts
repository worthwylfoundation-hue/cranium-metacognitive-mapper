export interface DemoChapter {
  id: string;
  act: string;
  title: string;
  durationSec: number;
  narratorVoiceText: string;
  captions: string[];
  keyHighlights: {
    metric: string;
    label: string;
    description: string;
  }[];
  visualMode: 'physics' | 'novel' | 'metacognitive' | 'architecture' | 'summary';
}

export const DEMO_CHAPTERS: DemoChapter[] = [
  {
    id: "act-1",
    act: "Act I",
    title: "The Creative Bottleneck & The Behavioral Contract",
    durationSec: 18,
    narratorVoiceText: "Welcome to Convertible Cranium Justice OS. This development-stage demonstration explores how user-provided observations, provisional hypotheses, and governed authority can remain distinct. The Mapper is educational and does not diagnose people or grant authority.",
    captions: [
      "Current generative tools suffer from canon amnesia and narrative drift.",
      "Convertible Cranium Core establishes an immutable behavioral contract between author and machine.",
      "Intent, canon, and emotional logic are enforced as first-class physical constraints."
    ],
    keyHighlights: [
      { metric: "100%", label: "Constraint Guarantee", description: "Identity and canon cannot be overridden by conversational drift." },
      { metric: "0.90", label: "Coherence Floor", description: "Calibrated threshold enforcing strict multi-episode integrity." },
      { metric: "4 Core", label: "Subsystem Pillars", description: "Convertible Cranium Core, Media Engine, Studio, and Miracle Archive." }
    ],
    visualMode: "summary"
  },
  {
    id: "act-2",
    act: "Act II",
    title: "Resonance Field Physics & Automated Directives",
    durationSec: 22,
    narratorVoiceText: "Observe the Resonance Field in action. Narrative events are not stored as plain text strings—they are modeled as Cognitive Atoms, with emotional charge, mass, and velocity. The engine computes real-time tension, coherence, and theme drift. When tension drops below threshold, Convertible Cranium Core issues an automated ESCALATE directive. When coherence fractures, it issues STABILIZE.",
    captions: [
      "Cognitive Atoms model narrative energy: charge (-1.0 to 1.0), mass, and velocity.",
      "The physics engine evaluates collisions between opposite emotional polarities.",
      "The loop autonomously fires directives: STABILIZE, ESCALATE, SHIFT_THEME, ADVANCE."
    ],
    keyHighlights: [
      { metric: "0.08", label: "Tension Floor", description: "Prevents flatlining narrative momentum across episodes." },
      { metric: "0.35", label: "Drift Ceiling", description: "Triggers SHIFT_THEME if recent beats detach from core motif." },
      { metric: "Real-Time", label: "Directive Governance", description: "Deterministic control layer steering external generation models." }
    ],
    visualMode: "physics"
  },
  {
    id: "act-3",
    act: "Act III",
    title: "The Episodic Novel Engine & Visual Coherence",
    durationSec: 22,
    narratorVoiceText: "In the Creator Studio, the engine crafts multi-episode serialized narratives. Notice how every generated episode is instantly rendered into a visual typographic snapshot. Our visual cortex analyzes layout density and visual pacing shifts. Character arcs from first appearance to current conflict are mapped automatically, while open and resolved plot threads are governed with zero loss.",
    captions: [
      "Continuous serialized generation preserving character timelines and location history.",
      "Visual Cortex renders typographic snapshot cards to inspect visual density & pacing.",
      "Multi-thread tracker guarantees no plot threads are dropped or arbitrarily forgotten."
    ],
    keyHighlights: [
      { metric: "100% Retained", label: "Character Lineage", description: "Tracks firstSeen, lastSeen, and conflict progression." },
      { metric: "Dual Cortex", label: "Visual + Text Hybrid", description: "Detects pacing drift through both linguistic and layout density." },
      { metric: "3-5 Epoch", label: "Episodic Spine", description: "ContextBuilder synthesizes recent canon with active persona philosophy." }
    ],
    visualMode: "novel"
  },
  {
    id: "act-4",
    act: "Act IV",
    title: "The Metacognitive Tracker: Self-Awareness for Creators",
    durationSec: 22,
    narratorVoiceText: "The Metacognitive Tracker is an educational reflection tool. It lets users record their own observations and review tentative patterns. The mapper generates hypotheses for the user to confirm or reject; it does not diagnose, prescribe treatment, or claim certainty about motives.",
    captions: [
      "60-second structured capture: situation, trigger, thought, assumption, and outcome.",
      "Lets users review self-reported observations and tentative patterns.",
      "Review prompts can help users decide which observations to explore next; no treatment or diagnostic claim is made."
    ],
    keyHighlights: [
      { metric: "User-reviewed", label: "Reflection hypotheses", description: "Patterns remain provisional until the user reviews them." },
      { metric: "Manual", label: "User-entered observations", description: "Users choose what to record and what to keep." },
      { metric: "Optional", label: "Next-step reflection", description: "The user decides whether any proposed next step is useful." }
    ],
    visualMode: "metacognitive"
  },
  {
    id: "act-5",
    act: "Act V",
    title: "Enterprise Architecture & Acquisition Diligence",
    durationSec: 20,
    narratorVoiceText: "This screen is an architecture concept only. It does not establish a deployed Azure/Kubernetes/Istio environment, Redis service, encrypted archive, clean chain of title, zero technical debt, or acquisition readiness. Those claims require separate implementation evidence and diligence.",
    captions: [
      "Illustrative target topology only; no deployment is claimed.",
      "Archive encryption and key custody are not established by this demo.",
      "Chain of title, independent audit, and external integrations require separate evidence.",
    ],
    keyHighlights: [
      { metric: "Target only", label: "Enterprise Topology", description: "Deployment has not been validated." },
      { metric: "Not verified", label: "Miracle Archive", description: "Encryption, durable storage, and immutable provenance are not claimed by this demo." },
      { metric: "Under development", label: "Governance concept", description: "No market-leading or category-first claim is made." }
    ],
    visualMode: "architecture"
  }
];
