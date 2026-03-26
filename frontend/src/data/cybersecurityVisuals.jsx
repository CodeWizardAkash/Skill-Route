function VisualCard({ title, caption, children }) {
  return (
    <div className="rounded-xl border border-cyan-200 dark:border-cyan-900 bg-white dark:bg-gray-950/40 p-4 md:p-5 transition-colors">
      <h3 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
      <div className="mt-3">{children}</div>
      {caption && (
        <p className="mt-3 text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {caption}
        </p>
      )}
    </div>
  )
}

function SecurityMindMapVisual() {
  const topNodes = ["People", "Process", "Technology"]
  const bottomNodes = ["Threats", "Controls", "Business"]

  return (
    <VisualCard
      title="Mind Map: Security Thinking"
      caption="Strong security posture is the outcome of connected people, process, technology, and business decisions."
    >
      <div className="grid grid-cols-3 gap-2 md:gap-3 items-center text-center">
        {topNodes.map(node => (
          <div key={node} className="rounded-lg border border-gray-200 dark:border-gray-700 px-2 py-2 text-[11px] md:text-xs text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-900/60">
            {node}
          </div>
        ))}
        <div className="col-span-3 rounded-xl border border-cyan-300 dark:border-cyan-700 px-3 py-3 text-xs md:text-sm font-semibold text-cyan-700 dark:text-cyan-200 bg-cyan-50 dark:bg-cyan-950/50">
          Security Posture
        </div>
        {bottomNodes.map(node => (
          <div key={node} className="rounded-lg border border-gray-200 dark:border-gray-700 px-2 py-2 text-[11px] md:text-xs text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-900/60">
            {node}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function CiaTriadVisual() {
  return (
    <VisualCard
      title="Figure: CIA Triad"
      caption="Use this triangle to evaluate whether a control primarily protects confidentiality, integrity, or availability."
    >
      <div className="flex justify-center">
        <svg viewBox="0 0 340 240" className="w-full max-w-md h-auto" role="img" aria-label="CIA triangle diagram">
          <polygon points="170,20 315,210 25,210" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-500" />
          <circle cx="170" cy="20" r="16" className="fill-cyan-100 dark:fill-cyan-900" />
          <circle cx="25" cy="210" r="16" className="fill-cyan-100 dark:fill-cyan-900" />
          <circle cx="315" cy="210" r="16" className="fill-cyan-100 dark:fill-cyan-900" />
          <text x="170" y="26" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200 text-[10px]">C</text>
          <text x="25" y="216" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200 text-[10px]">I</text>
          <text x="315" y="216" textAnchor="middle" className="fill-gray-800 dark:fill-gray-200 text-[10px]">A</text>
          <text x="170" y="54" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-[11px]">Confidentiality</text>
          <text x="82" y="188" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-[11px]">Integrity</text>
          <text x="258" y="188" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-[11px]">Availability</text>
          <text x="170" y="132" textAnchor="middle" className="fill-cyan-600 dark:fill-cyan-300 text-[10px]">Balanced Control Design</text>
        </svg>
      </div>
    </VisualCard>
  )
}

function RiskMatrixVisual() {
  const levels = ["Low", "Medium", "High"]

  return (
    <VisualCard
      title="Graph: Risk Matrix (Likelihood x Impact)"
      caption="Fix high impact and high likelihood risks first. Lower-priority items still need tracked treatment plans."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse text-xs md:text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Impact \\ Likelihood</th>
              {levels.map(level => (
                <th key={level} className="border border-gray-300 dark:border-gray-700 p-2 text-left">{level}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {levels.map((impact, impactIndex) => (
              <tr key={impact}>
                <td className="border border-gray-300 dark:border-gray-700 p-2 font-semibold">{impact}</td>
                {levels.map((_, likelihoodIndex) => {
                  const score = impactIndex + likelihoodIndex
                  const bgClass = score <= 1
                    ? "bg-green-100 dark:bg-green-950/40"
                    : score === 2
                      ? "bg-yellow-100 dark:bg-yellow-950/40"
                      : "bg-red-100 dark:bg-red-950/40"
                  const label = score <= 1 ? "Low" : score === 2 ? "Medium" : "High"

                  return (
                    <td key={`${impact}-${likelihoodIndex}`} className={`border border-gray-300 dark:border-gray-700 p-2 ${bgClass}`}>
                      {label}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </VisualCard>
  )
}

function AttackSurfaceVisual() {
  const zones = [
    { label: "Public Web", risk: "High" },
    { label: "API Gateway", risk: "High" },
    { label: "Admin Panel", risk: "High" },
    { label: "Third-Party Integrations", risk: "Medium" },
    { label: "Internal Services", risk: "Medium" },
    { label: "Backups", risk: "Low" }
  ]

  return (
    <VisualCard
      title="Figure: Attack Surface Map"
      caption="Map every exposed zone, assign risk, then reduce or harden the highest-risk exposure points first."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {zones.map(zone => (
          <div
            key={zone.label}
            className={`rounded-lg border px-3 py-2 text-xs md:text-sm ${zone.risk === "High"
              ? "border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 text-red-800 dark:text-red-200"
              : zone.risk === "Medium"
                ? "border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-200"
                : "border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200"
              }`}
          >
            <p className="font-semibold">{zone.label}</p>
            <p className="text-[11px] md:text-xs">Risk: {zone.risk}</p>
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function ThreatActorsVisual() {
  const rows = [
    { actor: "Cybercriminal", motive: "Financial gain", target: "Credentials, payments" },
    { actor: "Insider", motive: "Abuse or negligence", target: "Sensitive internal data" },
    { actor: "Hacktivist", motive: "Ideology", target: "Brand, uptime" },
    { actor: "Nation-state", motive: "Espionage", target: "Strategic systems" }
  ]

  return (
    <VisualCard
      title="Graph: Threat Actor Matrix"
      caption="Understanding motive helps prioritize likely attack paths and realistic defensive controls."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-xs md:text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Actor</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Motive</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Typical Target</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.actor}>
                <td className="border border-gray-300 dark:border-gray-700 p-2 font-semibold">{row.actor}</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">{row.motive}</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">{row.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </VisualCard>
  )
}

function AaaFlowVisual() {
  const steps = [
    { label: "Authenticate", check: "Identity proof" },
    { label: "Authorize", check: "Permission check" },
    { label: "Account", check: "Audit trail" }
  ]

  return (
    <VisualCard
      title="Figure: AAA Access Flow"
      caption="Every request should follow this flow to reduce unauthorized access and increase accountability."
    >
      <div className="flex flex-col md:flex-row gap-2 md:gap-3">
        {steps.map((step, index) => (
          <div key={step.label} className="flex-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-3 py-3 text-center">
            <p className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">{index + 1}. {step.label}</p>
            <p className="mt-1 text-[11px] md:text-xs text-gray-600 dark:text-gray-300">{step.check}</p>
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function RoleAccessMatrixVisual() {
  const matrix = [
    { role: "Analyst", read: true, write: false, admin: false },
    { role: "Engineer", read: true, write: true, admin: false },
    { role: "Admin", read: true, write: true, admin: true }
  ]

  return (
    <VisualCard
      title="Graph: Least Privilege Access Matrix"
      caption="Role-based access should grant only minimum required privileges for expected tasks."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[260px] border-collapse text-xs md:text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Role</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Read</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Write</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Admin</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map(row => (
              <tr key={row.role}>
                <td className="border border-gray-300 dark:border-gray-700 p-2 font-semibold">{row.role}</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">{row.read ? "Yes" : "No"}</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">{row.write ? "Yes" : "No"}</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">{row.admin ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </VisualCard>
  )
}

function ZeroTrustVisual() {
  const checks = ["Identity", "Device posture", "Context", "Policy", "Behavior"]

  return (
    <VisualCard
      title="Figure: Zero Trust Decision Chain"
      caption="Access is granted only if all verification stages pass. Trust is continuously re-evaluated."
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {checks.map(step => (
          <div key={step} className="rounded-lg border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-2 text-center text-[11px] md:text-xs text-cyan-800 dark:text-cyan-200">
            {step}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function PolicyHierarchyVisual() {
  const layers = [
    "Policy (What and Why)",
    "Standard (Measurable Baseline)",
    "Procedure (Execution Steps)",
    "Runbook (Operational Response)"
  ]

  return (
    <VisualCard
      title="Mind Map: Governance Hierarchy"
      caption="Security governance is strongest when policy, standards, and operational procedures are aligned."
    >
      <div className="space-y-2">
        {layers.map((layer, index) => (
          <div key={layer} className={`rounded-lg border px-3 py-2 text-xs md:text-sm ${index === 0
            ? "border-cyan-300 dark:border-cyan-700 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-200"
            : "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 text-gray-700 dark:text-gray-200"
            }`}>
            {layer}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function ClassificationVisual() {
  const levels = ["Public", "Internal", "Confidential", "Restricted"]

  return (
    <VisualCard
      title="Figure: Asset Classification Ladder"
      caption="As data sensitivity increases, required controls should also increase."
    >
      <div className="space-y-2">
        {levels.map((level, index) => (
          <div
            key={level}
            className={`rounded-lg border px-3 py-2 text-xs md:text-sm ${index === 0
              ? "border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/30"
              : index === 1
                ? "border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-sky-950/30"
                : index === 2
                  ? "border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30"
                  : "border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30"
              } text-gray-800 dark:text-gray-200`}
          >
            {index + 1}. {level}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function DefenseInDepthVisual() {
  return (
    <VisualCard
      title="Figure: Defense in Depth Layers"
      caption="Each ring is a defensive layer. Attackers should face controls at every stage, not only at the perimeter."
    >
      <div className="flex justify-center">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-300 dark:border-cyan-700 flex items-center justify-center text-[11px] text-cyan-700 dark:text-cyan-200">Network</div>
          <div className="absolute inset-6 rounded-full border-2 border-cyan-300 dark:border-cyan-700 flex items-center justify-center text-[11px] text-cyan-700 dark:text-cyan-200">Endpoint</div>
          <div className="absolute inset-12 rounded-full border-2 border-cyan-300 dark:border-cyan-700 flex items-center justify-center text-[11px] text-cyan-700 dark:text-cyan-200">Application</div>
          <div className="absolute inset-20 rounded-full border-2 border-cyan-300 dark:border-cyan-700 flex items-center justify-center text-[11px] text-cyan-700 dark:text-cyan-200">Data</div>
        </div>
      </div>
    </VisualCard>
  )
}

function ControlTypesVisual() {
  const controls = [
    { type: "Preventive", example: "MFA, hardening", color: "border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/30" },
    { type: "Detective", example: "SIEM alerts, logging", color: "border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30" },
    { type: "Corrective", example: "Backups, rollback", color: "border-cyan-200 dark:border-cyan-900 bg-cyan-50 dark:bg-cyan-950/30" }
  ]

  return (
    <VisualCard
      title="Graph: Control Type Coverage"
      caption="Mature programs balance preventive, detective, and corrective controls. Missing one class creates blind spots."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {controls.map(control => (
          <div key={control.type} className={`rounded-lg border px-3 py-3 text-xs md:text-sm ${control.color}`}>
            <p className="font-semibold text-gray-800 dark:text-gray-200">{control.type}</p>
            <p className="mt-1 text-gray-700 dark:text-gray-300">{control.example}</p>
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function TrustBoundaryVisual() {
  return (
    <VisualCard
      title="Figure: Trust Boundary Review"
      caption="Mark where trust changes between users, services, and data stores. These crossings are high-value design review points."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-3 py-3 text-xs md:text-sm text-gray-700 dark:text-gray-200 text-center">
          User Zone
        </div>
        <div className="rounded-lg border border-cyan-300 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/20 px-3 py-3 text-xs md:text-sm text-cyan-800 dark:text-cyan-200 text-center">
          Application Zone
        </div>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-3 py-3 text-xs md:text-sm text-gray-700 dark:text-gray-200 text-center">
          Data Zone
        </div>
      </div>
    </VisualCard>
  )
}

function IncidentResponseCycleVisual() {
  const stages = ["Prepare", "Detect", "Contain", "Eradicate", "Recover", "Review"]

  return (
    <VisualCard
      title="Graph: Incident Response Cycle"
      caption="Treat incident response as a loop. Improvements from review should feed into preparation and detection."
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {stages.map((stage, index) => (
          <div key={stage} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-3 py-2 text-xs md:text-sm text-gray-800 dark:text-gray-200">
            {index + 1}. {stage}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function MetricsTrendVisual() {
  const metrics = [
    { label: "MTTD", value: 72, color: "bg-red-400" },
    { label: "MTTR", value: 48, color: "bg-amber-400" },
    { label: "Patch SLA", value: 88, color: "bg-emerald-500" }
  ]

  return (
    <VisualCard
      title="Graph: Security Metrics Snapshot"
      caption="Track trend lines over time. Metrics should trigger action thresholds, not just reporting."
    >
      <div className="space-y-3">
        {metrics.map(metric => (
          <div key={metric.label}>
            <div className="flex items-center justify-between text-xs md:text-sm text-gray-700 dark:text-gray-300">
              <span>{metric.label}</span>
              <span>{metric.value}%</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-gray-200 dark:bg-gray-700">
              <div className={`h-2 rounded-full ${metric.color}`} style={{ width: `${metric.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function TabletopTimelineVisual() {
  const timeline = [
    "Inject scenario",
    "Role decision point",
    "Containment decision",
    "Communication update",
    "Retrospective actions"
  ]

  return (
    <VisualCard
      title="Figure: Tabletop Exercise Timeline"
      caption="Use timed checkpoints to test coordination quality, escalation clarity, and decision speed."
    >
      <div className="space-y-2">
        {timeline.map((item, index) => (
          <div key={item} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-3 py-2 text-xs md:text-sm text-gray-700 dark:text-gray-200">
            T{index * 10} min: {item}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function LinuxHostSecurityVisual() {
  const layers = ["Users/Groups", "Permissions", "Processes", "Services", "Logs"]

  return (
    <VisualCard
      title="Figure: Linux Host Security Layers"
      caption="A Linux host should be reviewed layer by layer, not only by command output."
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {layers.map(layer => (
          <div key={layer} className="rounded-lg border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-2 text-center text-[11px] md:text-xs text-emerald-800 dark:text-emerald-200">
            {layer}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function WindowsHostSecurityVisual() {
  const tiles = [
    "Accounts & Groups",
    "Registry Run Keys",
    "Startup Items",
    "Event Logs",
    "Local Policies",
    "Defender/Firewall"
  ]

  return (
    <VisualCard
      title="Figure: Windows Host Security Map"
      caption="Windows security posture combines identity controls, startup integrity, logging, and local policy enforcement."
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {tiles.map(tile => (
          <div key={tile} className="rounded-lg border border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-sky-950/30 px-3 py-2 text-[11px] md:text-xs text-sky-800 dark:text-sky-200 text-center">
            {tile}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function RegistryPersistenceVisual() {
  const paths = [
    "HKCU\\...\\Run",
    "HKLM\\...\\Run",
    "Startup Folder",
    "Scheduled Tasks"
  ]

  return (
    <VisualCard
      title="Graph: Persistence Hotspots"
      caption="Track these startup and persistence hotspots for unauthorized change detection."
    >
      <div className="space-y-2">
        {paths.map(path => (
          <div key={path} className="rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30 px-3 py-2 text-xs md:text-sm text-amber-800 dark:text-amber-200">
            {path}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function EventLogChannelsVisual() {
  const channels = ["Security", "System", "Application", "PowerShell", "Defender"]

  return (
    <VisualCard
      title="Figure: High-Value Event Log Channels"
      caption="Start with these channels for most host investigations, then expand by use case."
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {channels.map(channel => (
          <div key={channel} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-2 py-2 text-[11px] md:text-xs text-gray-700 dark:text-gray-200 text-center">
            {channel}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function ProcessTreeVisual() {
  return (
    <VisualCard
      title="Figure: Process Tree Triage"
      caption="Parent-child process chains often expose suspicious execution behavior."
    >
      <div className="space-y-2 text-xs md:text-sm">
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-3 py-2">explorer.exe</div>
        <div className="ml-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-3 py-2">powershell.exe</div>
        <div className="ml-8 rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 px-3 py-2 text-red-800 dark:text-red-200">encoded command to suspicious child</div>
      </div>
    </VisualCard>
  )
}

function HostTelemetryPipelineVisual() {
  const stages = ["Host Event", "Collector", "SIEM", "Rule Match", "Analyst Triage", "Response Action"]

  return (
    <VisualCard
      title="Graph: Host Telemetry Pipeline"
      caption="Detection quality depends on reliable collection, useful rules, and timely analyst response."
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {stages.map(stage => (
          <div key={stage} className="rounded-lg border border-cyan-200 dark:border-cyan-900 bg-cyan-50 dark:bg-cyan-950/30 px-2 py-2 text-[11px] md:text-xs text-cyan-800 dark:text-cyan-200 text-center">
            {stage}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function VulnerabilityLifecycleVisual() {
  const flow = ["Discover", "Validate", "Prioritize", "Remediate", "Verify", "Close"]

  return (
    <VisualCard
      title="Figure: Vulnerability Management Lifecycle"
      caption="Closing the loop with verification prevents repeat findings and false closure."
    >
      <div className="flex flex-wrap gap-2">
        {flow.map(step => (
          <div key={step} className="rounded-lg border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/30 px-3 py-2 text-[11px] md:text-xs text-amber-800 dark:text-amber-200">
            {step}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function EndpointDefenseStackVisual() {
  const stack = ["Application Control", "AV", "EDR", "Firewall", "Threat Intelligence", "SOAR Response"]

  return (
    <VisualCard
      title="Figure: Endpoint Defense Stack"
      caption="Layered endpoint controls reduce single-point failure and increase visibility."
    >
      <div className="space-y-1">
        {stack.map(layer => (
          <div key={layer} className="rounded-md border border-cyan-200 dark:border-cyan-900 bg-cyan-50 dark:bg-cyan-950/30 px-3 py-2 text-xs md:text-sm text-cyan-800 dark:text-cyan-200">
            {layer}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function BaselineDriftVisual() {
  const rows = [
    { control: "Firewall Enabled", baseline: "Yes", current: "No" },
    { control: "RDP Restricted", baseline: "Yes", current: "Yes" },
    { control: "Script Blocking", baseline: "Yes", current: "No" }
  ]

  return (
    <VisualCard
      title="Graph: Configuration Drift Check"
      caption="Drift highlights where actual host state no longer matches approved baseline."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-xs md:text-sm">
          <thead>
            <tr>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Control</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Baseline</th>
              <th className="border border-gray-300 dark:border-gray-700 p-2 text-left">Current</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.control}>
                <td className="border border-gray-300 dark:border-gray-700 p-2">{row.control}</td>
                <td className="border border-gray-300 dark:border-gray-700 p-2">{row.baseline}</td>
                <td className={`border border-gray-300 dark:border-gray-700 p-2 ${row.baseline === row.current ? "bg-emerald-100 dark:bg-emerald-950/30" : "bg-red-100 dark:bg-red-950/30"}`}>
                  {row.current}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </VisualCard>
  )
}

function PrivEscPathVisual() {
  const path = ["Low-priv User", "Weak Service Config", "Credential Exposure", "Admin Token Access"]

  return (
    <VisualCard
      title="Figure: Privilege Escalation Path"
      caption="Escalation usually chains multiple weak controls, not a single misconfiguration."
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {path.map(node => (
          <div key={node} className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 px-2 py-2 text-[11px] md:text-xs text-red-800 dark:text-red-200 text-center">
            {node}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function RecoveryReadinessVisual() {
  const checklist = ["Critical Assets", "RPO/RTO", "Offline Backup", "Restore Test", "Post-Restore Validation"]

  return (
    <VisualCard
      title="Mind Map: Recovery Readiness"
      caption="Recovery maturity depends on tested restores and clear operational objectives."
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
        {checklist.map(item => (
          <div key={item} className="rounded-lg border border-emerald-200 dark:border-emerald-900 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-2 text-[11px] md:text-xs text-emerald-800 dark:text-emerald-200 text-center">
            {item}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function RansomwareContainmentVisual() {
  const steps = ["Isolate Host", "Disable Accounts", "Block IOCs", "Preserve Evidence", "Recover Cleanly"]

  return (
    <VisualCard
      title="Graph: Ransomware First-Response Flow"
      caption="Containment order matters. Isolate quickly, preserve evidence, then recover from trusted backups."
    >
      <div className="space-y-2">
        {steps.map((step, index) => (
          <div key={step} className="rounded-lg border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 px-3 py-2 text-xs md:text-sm text-red-800 dark:text-red-200">
            {index + 1}. {step}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

function IncidentHandoverVisual() {
  const blocks = ["Timeline", "Scope", "Evidence", "Impact", "Actions Taken", "Next Owner"]

  return (
    <VisualCard
      title="Figure: Incident Handover Template"
      caption="Structured handover prevents information loss between SOC, IT, engineering, and management."
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {blocks.map(block => (
          <div key={block} className="rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 px-2 py-2 text-[11px] md:text-xs text-gray-700 dark:text-gray-200 text-center">
            {block}
          </div>
        ))}
      </div>
    </VisualCard>
  )
}

export const cybersecurityVisualsByPointId = {
  "p1-security-mindset": <SecurityMindMapVisual />,
  "p1-cia-triad": <CiaTriadVisual />,
  "p1-security-tradeoffs": <RiskMatrixVisual />,
  "p1-threat-vuln-risk": <RiskMatrixVisual />,
  "p1-attack-surface": <AttackSurfaceVisual />,
  "p1-threat-actors": <ThreatActorsVisual />,
  "p1-aaa-model": <AaaFlowVisual />,
  "p1-least-privilege": <RoleAccessMatrixVisual />,
  "p1-zero-trust-basics": <ZeroTrustVisual />,
  "p1-security-policy-basics": <PolicyHierarchyVisual />,
  "p1-risk-assessment-basics": <RiskMatrixVisual />,
  "p1-asset-classification": <ClassificationVisual />,
  "p1-defense-in-depth": <DefenseInDepthVisual />,
  "p1-control-types": <ControlTypesVisual />,
  "p1-security-architecture-review": <TrustBoundaryVisual />,
  "p1-incident-response": <IncidentResponseCycleVisual />,
  "p1-security-metrics": <MetricsTrendVisual />,
  "p1-tabletop-exercises": <TabletopTimelineVisual />,
  "p2-linux-cli-permissions": <LinuxHostSecurityVisual />,
  "p2-linux-filesystem-security": <LinuxHostSecurityVisual />,
  "p2-linux-process-basics": <ProcessTreeVisual />,
  "p2-windows-accounts": <WindowsHostSecurityVisual />,
  "p2-windows-registry-startup": <RegistryPersistenceVisual />,
  "p2-windows-event-logs-intro": <EventLogChannelsVisual />,
  "p2-processes-services": <ProcessTreeVisual />,
  "p2-logging-patching": <HostTelemetryPipelineVisual />,
  "p2-auth-log-analysis": <HostTelemetryPipelineVisual />,
  "p2-vulnerability-scanning-basics": <VulnerabilityLifecycleVisual />,
  "p2-endpoint-protection-stack": <EndpointDefenseStackVisual />,
  "p2-baseline-config-management": <BaselineDriftVisual />,
  "p2-endpoint-hardening": <EndpointDefenseStackVisual />,
  "p2-privilege-escalation-paths": <PrivEscPathVisual />,
  "p2-hardening-validation": <BaselineDriftVisual />,
  "p2-backup-recovery": <RecoveryReadinessVisual />,
  "p2-ransomware-containment": <RansomwareContainmentVisual />,
  "p2-host-incident-reporting": <IncidentHandoverVisual />
}
