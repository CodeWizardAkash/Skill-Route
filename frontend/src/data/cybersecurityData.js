const cybersecurityData = {
  hero: {
    title: "Cyber Security Learning Path",
    subtitle:
      "Choose a phase card, then follow beginner-to-advanced modules with topic and subtopic explanations.",
    audience:
      "Designed for learners who want clear progression from fundamentals to real-world cybersecurity practice."
  },
  topics: [
    {
      id: "phase-1-fundamentals",
      title: "Phase 1: Fundamentals",
      shortDescription: "Build core security concepts, risk language, and defensive thinking."
    },
    {
      id: "phase-2-system-os-basics",
      title: "Phase 2: System & OS Basics",
      shortDescription: "Understand Linux/Windows host security and hardening basics."
    },
    {
      id: "phase-3-networking-fundamentals",
      title: "Phase 3: Networking Fundamentals",
      shortDescription: "Learn traffic flow, protocols, segmentation, and network defense."
    },
    {
      id: "phase-4-web-security",
      title: "Phase 4: Web Security",
      shortDescription: "Study web attack classes and secure coding architecture patterns."
    },
    {
      id: "phase-5-ethical-hacking",
      title: "Phase 5: Ethical Hacking",
      shortDescription: "Practice legal pentesting workflows from recon to reporting."
    },
    {
      id: "phase-6-practice-labs",
      title: "Phase 6: Practice & Labs",
      shortDescription: "Turn concepts into skill through labs, capstones, and portfolio work."
    }
  ],
  content: {
    "phase-1-fundamentals": {
      title: "Phase 1: Fundamentals",
      intro:
        "Start with core concepts, then move through trust and governance, and finish with architecture and response strategy.",
      learningObjectives: [
        "Explain core cybersecurity language using practical examples.",
        "Analyze basic risk using threat, vulnerability, and impact reasoning.",
        "Design simple defense and response decisions with confidence."
      ],
      capstone: {
        title: "Phase 1 Capstone: Mini Security Review",
        description:
          "Choose one simple web app or personal project and perform a compact Phase-1-style security review.",
        checklist: [
          "List top assets and classify their sensitivity.",
          "Write 5 concrete risks in threat-vulnerability-impact format.",
          "Propose one preventive, one detective, and one corrective control per high-risk item.",
          "Create a one-page incident response checklist for the same system."
        ]
      },
      phases: [
        {
          id: "p1-beginner",
          title: "BEGINNER MODULE",
          focus: "Security language and attacker-first thinking",
          estimatedTime: "4-6 hours",
          outcomes: [
            "Speak clearly about risk with security and non-security teammates.",
            "Identify obvious exposure points before they become incidents.",
            "Reason about business impact, not only technical issues."
          ],
          deliverable: "A one-page threat and attack-surface map for a sample system.",
          sections: [
            {
              heading: "1) Core Foundations",
              points: [
                { id: "p1-security-mindset", title: "Security Mindset" },
                { id: "p1-cia-triad", title: "CIA Triad" },
                { id: "p1-security-tradeoffs", title: "Security Trade-offs and Priorities" }
              ]
            },
            {
              heading: "2) Threat Basics",
              points: [
                { id: "p1-threat-vuln-risk", title: "Threat, Vulnerability, and Risk" },
                { id: "p1-attack-surface", title: "Attack Surface Basics" },
                { id: "p1-threat-actors", title: "Threat Actor Types and Motivation" }
              ]
            }
          ]
        },
        {
          id: "p1-intermediate",
          title: "INTERMEDIATE MODULE",
          focus: "Access control and governance discipline",
          estimatedTime: "5-7 hours",
          outcomes: [
            "Map real user flows using AAA and least-privilege logic.",
            "Perform lightweight risk assessment with repeatable scoring.",
            "Draft policy language that can actually be enforced."
          ],
          deliverable: "A basic access-control matrix and a mini risk register.",
          sections: [
            {
              heading: "3) Access and Trust",
              points: [
                { id: "p1-aaa-model", title: "AAA Model" },
                { id: "p1-least-privilege", title: "Least Privilege" },
                { id: "p1-zero-trust-basics", title: "Zero Trust Basics" }
              ]
            },
            {
              heading: "4) Governance and Risk Practice",
              points: [
                { id: "p1-security-policy-basics", title: "Security Policy and Standards" },
                { id: "p1-risk-assessment-basics", title: "Risk Assessment Workflow" },
                { id: "p1-asset-classification", title: "Asset Classification and Data Sensitivity" }
              ]
            }
          ]
        },
        {
          id: "p1-advanced",
          title: "ADVANCED MODULE",
          focus: "Architecture-level defense and response readiness",
          estimatedTime: "6-8 hours",
          outcomes: [
            "Design defense-in-depth control coverage by security layer.",
            "Evaluate architecture trust boundaries before implementation.",
            "Define response metrics that improve future decisions."
          ],
          deliverable: "A control-layer diagram plus an incident-response drill summary.",
          sections: [
            {
              heading: "5) Architecture Mindset",
              points: [
                { id: "p1-defense-in-depth", title: "Defense in Depth" },
                { id: "p1-control-types", title: "Preventive, Detective, and Corrective Controls" },
                { id: "p1-security-architecture-review", title: "Security Architecture Review Basics" }
              ]
            },
            {
              heading: "6) Response Readiness",
              points: [
                { id: "p1-incident-response", title: "Incident Response Lifecycle" },
                { id: "p1-security-metrics", title: "Security Metrics That Matter" },
                { id: "p1-tabletop-exercises", title: "Tabletop Exercises and Preparedness" }
              ]
            }
          ],
          note: "Mastering fundamentals makes every advanced phase easier and more practical."
        }
      ]
    },
    "phase-2-system-os-basics": {
      title: "Phase 2: System & OS Basics",
      intro:
        "Learn host-level security mechanics across Linux and Windows, then move into operational monitoring, hardening, and recovery readiness.",
      learningObjectives: [
        "Navigate Linux and Windows security fundamentals without confusion.",
        "Identify suspicious host behavior using process and log signals.",
        "Apply baseline hardening and recovery readiness controls."
      ],
      capstone: {
        title: "Phase 2 Capstone: Host Security Baseline Review",
        description:
          "Perform a practical baseline review on one Linux VM and one Windows VM, then summarize risks and improvements.",
        checklist: [
          "Audit local users, groups, and privileged accounts.",
          "Review startup processes/services and identify unknown entries.",
          "Assess patch state and endpoint protection posture.",
          "Deliver a short hardening plan with prioritized remediation."
        ]
      },
      phases: [
        {
          id: "p2-beginner",
          title: "BEGINNER MODULE",
          focus: "Operating system internals and host visibility basics",
          estimatedTime: "5-7 hours",
          outcomes: [
            "Understand where permissions, identities, and process trust boundaries live on hosts.",
            "Navigate common Linux and Windows security artifacts confidently.",
            "Explain host attack surface in practical terms."
          ],
          deliverable: "A quick-reference cheat sheet for Linux and Windows host security checks.",
          sections: [
            {
              heading: "1) Linux Foundations",
              points: [
                { id: "p2-linux-cli-permissions", title: "Linux CLI and Permissions" },
                { id: "p2-linux-filesystem-security", title: "Linux Filesystem and Sensitive Path Security" },
                { id: "p2-linux-process-basics", title: "Linux Process and Service Fundamentals" }
              ]
            },
            {
              heading: "2) Windows Foundations",
              points: [
                { id: "p2-windows-accounts", title: "Windows Accounts and Privileges" },
                { id: "p2-windows-registry-startup", title: "Registry and Startup Persistence Basics" },
                { id: "p2-windows-event-logs-intro", title: "Windows Event Logs Introduction" }
              ]
            }
          ]
        },
        {
          id: "p2-intermediate",
          title: "INTERMEDIATE MODULE",
          focus: "Monitoring, vulnerabilities, and endpoint control strategy",
          estimatedTime: "6-8 hours",
          outcomes: [
            "Interpret host telemetry for suspicious behavior patterns.",
            "Prioritize vulnerability remediation with risk context.",
            "Map endpoint security controls to real attacker techniques."
          ],
          deliverable: "A host monitoring checklist and vulnerability treatment plan.",
          sections: [
            {
              heading: "3) Host Monitoring and Detection",
              points: [
                { id: "p2-processes-services", title: "Processes and Services" },
                { id: "p2-logging-patching", title: "Logging and Patch Management" },
                { id: "p2-auth-log-analysis", title: "Authentication Log Analysis Patterns" }
              ]
            },
            {
              heading: "4) Vulnerability and Endpoint Security",
              points: [
                { id: "p2-vulnerability-scanning-basics", title: "Vulnerability Scanning Workflow" },
                { id: "p2-endpoint-protection-stack", title: "Endpoint Protection Stack (AV/EDR/Firewall)" },
                { id: "p2-baseline-config-management", title: "Baseline Configuration Management" }
              ]
            }
          ]
        },
        {
          id: "p2-advanced",
          title: "ADVANCED MODULE",
          focus: "Hardening validation, escalation prevention, and incident readiness",
          estimatedTime: "7-9 hours",
          outcomes: [
            "Apply layered hardening controls and verify enforcement.",
            "Recognize privilege escalation paths and reduce exploitability.",
            "Operate recovery and containment processes under pressure."
          ],
          deliverable: "A host hardening validation report and recovery runbook draft.",
          sections: [
            {
              heading: "5) Hardening and Privilege Defense",
              points: [
                { id: "p2-endpoint-hardening", title: "Endpoint Hardening Baselines" },
                { id: "p2-privilege-escalation-paths", title: "Privilege Escalation Paths and Prevention" },
                { id: "p2-hardening-validation", title: "Hardening Validation and Drift Detection" }
              ]
            },
            {
              heading: "6) Recovery and Incident Readiness",
              points: [
                { id: "p2-backup-recovery", title: "Backup and Recovery Readiness" },
                { id: "p2-ransomware-containment", title: "Ransomware Containment Playbook" },
                { id: "p2-host-incident-reporting", title: "Host Incident Reporting and Handover" }
              ]
            }
          ],
          note: "A secure host is observable, hardened, and recoverable even under active compromise conditions."
        }
      ]
    },
    "phase-3-networking-fundamentals": {
      title: "Phase 3: Networking Fundamentals",
      intro: "Build protocol clarity first, then apply traffic analysis and architecture-level network defense.",
      learningObjectives: [
        "Map attacks to network layers and protocol behavior.",
        "Inspect packets and enforce boundary controls effectively.",
        "Triaging incidents faster with network-level evidence."
      ],
      phases: [
        {
          id: "p3-beginner",
          title: "BEGINNER MODULE",
          sections: [
            {
              heading: "1) Network Core",
              points: [
                { id: "p3-osi-tcpip", title: "OSI and TCP/IP Models" },
                { id: "p3-protocols-ports", title: "Protocols and Ports" }
              ]
            }
          ]
        },
        {
          id: "p3-intermediate",
          title: "INTERMEDIATE MODULE",
          sections: [
            {
              heading: "2) Traffic and Controls",
              points: [
                { id: "p3-packet-analysis", title: "Packet Analysis Basics" },
                { id: "p3-firewalls-segmentation", title: "Firewalls and Segmentation" }
              ]
            }
          ]
        },
        {
          id: "p3-advanced",
          title: "ADVANCED MODULE",
          sections: [
            {
              heading: "3) Detection and Architecture",
              points: [
                { id: "p3-ids-ips", title: "IDS/IPS and Alert Tuning" },
                { id: "p3-network-triage", title: "Network Incident Triage" }
              ]
            }
          ],
          note: "Network security maturity comes from visibility plus controlled boundaries."
        }
      ]
    },
    "phase-4-web-security": {
      title: "Phase 4: Web Security",
      intro: "Understand web request lifecycle and common attacks, then move to secure engineering workflows.",
      learningObjectives: [
        "Understand how insecure input and session handling create risk.",
        "Recognize common web attack patterns and mitigations.",
        "Embed security checks into normal development workflows."
      ],
      phases: [
        {
          id: "p4-beginner",
          title: "BEGINNER MODULE",
          sections: [
            {
              heading: "1) Web Foundations",
              points: [
                { id: "p4-http-https", title: "HTTP, HTTPS, and TLS" },
                { id: "p4-auth-sessions", title: "Authentication and Sessions" }
              ]
            }
          ]
        },
        {
          id: "p4-intermediate",
          title: "INTERMEDIATE MODULE",
          sections: [
            {
              heading: "2) Vulnerability Patterns",
              points: [
                { id: "p4-xss-sqli", title: "XSS and SQL Injection" },
                { id: "p4-csrf-access-control", title: "CSRF and Access Control" }
              ]
            }
          ]
        },
        {
          id: "p4-advanced",
          title: "ADVANCED MODULE",
          sections: [
            {
              heading: "3) Secure Engineering",
              points: [
                { id: "p4-secure-sdlc", title: "Secure SDLC" },
                { id: "p4-api-threat-modeling", title: "API Security and Threat Modeling" }
              ]
            }
          ],
          note: "Web security is strongest when built into design, code, and testing."
        }
      ]
    },
    "phase-5-ethical-hacking": {
      title: "Phase 5: Ethical Hacking",
      intro: "Follow legal offensive workflows with disciplined evidence, validation, and risk-based reporting.",
      learningObjectives: [
        "Run authorized pentest workflows with clear ethical boundaries.",
        "Validate vulnerabilities safely and collect strong evidence.",
        "Report findings in a way engineering teams can act on quickly."
      ],
      phases: [
        {
          id: "p5-beginner",
          title: "BEGINNER MODULE",
          sections: [
            {
              heading: "1) Ethical Testing Basics",
              points: [
                { id: "p5-scope-ethics", title: "Scope, Ethics, and Rules of Engagement" },
                { id: "p5-recon-scanning", title: "Reconnaissance and Scanning" }
              ]
            }
          ]
        },
        {
          id: "p5-intermediate",
          title: "INTERMEDIATE MODULE",
          sections: [
            {
              heading: "2) Validation Flow",
              points: [
                { id: "p5-enumeration-exploitation", title: "Enumeration and Exploitation Validation" },
                { id: "p5-evidence-notes", title: "Evidence Collection and Notes" }
              ]
            }
          ]
        },
        {
          id: "p5-advanced",
          title: "ADVANCED MODULE",
          sections: [
            {
              heading: "3) Delivery",
              points: [
                { id: "p5-risk-prioritization", title: "Risk Prioritization" },
                { id: "p5-reporting-retesting", title: "Reporting and Retesting" }
              ]
            }
          ],
          note: "Ethical hacking is complete only when findings are clear and actionable."
        }
      ]
    },
    "phase-6-practice-labs": {
      title: "Phase 6: Practice & Labs",
      intro: "Convert knowledge into proof of skill through repeatable labs, scenario drills, and capstone delivery.",
      learningObjectives: [
        "Set up repeatable lab environments for continuous skill growth.",
        "Run defensive and offensive mini-scenarios with documentation.",
        "Build capstone outputs that demonstrate job-ready competence."
      ],
      phases: [
        {
          id: "p6-beginner",
          title: "BEGINNER MODULE",
          sections: [
            {
              heading: "1) Lab Foundations",
              points: [
                { id: "p6-home-lab", title: "Home Lab Setup" },
                { id: "p6-ctf-basics", title: "Beginner CTF Workflow" }
              ]
            }
          ]
        },
        {
          id: "p6-intermediate",
          title: "INTERMEDIATE MODULE",
          sections: [
            {
              heading: "2) Scenario Practice",
              points: [
                { id: "p6-blue-team-drills", title: "Blue Team Detection Drills" },
                { id: "p6-red-team-mini", title: "Red Team Mini Assessments" }
              ]
            }
          ]
        },
        {
          id: "p6-advanced",
          title: "ADVANCED MODULE",
          sections: [
            {
              heading: "3) Capstone and Career",
              points: [
                { id: "p6-capstone-report", title: "Capstone Execution and Reporting" },
                { id: "p6-portfolio-roadmap", title: "Portfolio and Career Roadmap" }
              ]
            }
          ],
          note: "Practice quality is measured by repeatability, evidence, and communication."
        }
      ]
    }
  },
  topicsContent: {
    "p1-security-mindset": {
      title: "Security Mindset",
      explanation:
        "Security mindset means proactively asking how a system can fail, be abused, or misused before a real incident happens. Instead of only checking happy paths, defenders examine edge cases, attacker incentives, and possible business impact.",
      keyPoints: [
        "Think in attack paths, not only feature paths.",
        "Tie technical weakness to business impact."
      ],
      practice: [
        "Pick one app you use daily and list 3 abuse scenarios.",
        "For each scenario, define one preventive control."
      ],
      resources: [
        { label: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" }
      ]
    },
    "p1-cia-triad": {
      title: "CIA Triad",
      explanation:
        "The CIA triad balances confidentiality, integrity, and availability. It helps teams prioritize controls by asking: what data must stay private, what must stay correct, and what must stay accessible.",
      keyPoints: [
        "Confidentiality protects secrecy.",
        "Integrity protects correctness.",
        "Availability protects uptime."
      ],
      practice: [
        "Map one real system control to each CIA element.",
        "Identify which CIA element is weakest in your sample system."
      ]
    },
    "p1-security-tradeoffs": {
      title: "Security Trade-offs and Priorities",
      explanation:
        "Security decisions are trade-offs between risk reduction, usability, cost, and speed. Strong security programs prioritize controls that reduce the highest business risk first instead of trying to secure everything equally.",
      keyPoints: [
        "Not all controls produce equal risk reduction.",
        "Prioritize high-impact risk first."
      ],
      practice: [
        "Rank three controls by impact vs effort.",
        "Justify one control you would postpone and why."
      ]
    },
    "p1-threat-vuln-risk": {
      title: "Threat, Vulnerability, and Risk",
      explanation:
        "A threat is a potential harmful actor or event, a vulnerability is a weakness, and risk is the resulting impact when a threat can exploit that weakness. This model gives teams a clear language for prioritization.",
      keyPoints: [
        "Risk exists when threat and vulnerability intersect.",
        "Impact determines urgency, not only exploitability."
      ],
      practice: [
        "Write one risk statement: asset + threat + weakness + impact.",
        "Classify it as low/medium/high with a reason."
      ],
      code: "Asset: Customer DB\nThreat: Stolen credentials\nVulnerability: No MFA\nImpact: Data breach + legal cost\nRisk: High",
      resources: [
        { label: "OWASP Risk Rating Methodology", url: "https://owasp.org/www-community/OWASP_Risk_Rating_Methodology" }
      ]
    },
    "p1-attack-surface": {
      title: "Attack Surface Basics",
      explanation:
        "Attack surface is every reachable entry point across users, systems, APIs, third-party tools, and configurations. Reducing unnecessary exposure is one of the fastest ways to lower security risk.",
      keyPoints: [
        "Every exposed service adds risk.",
        "Unused attack paths should be removed quickly."
      ],
      practice: [
        "List all internet-facing components in one project.",
        "Mark at least one component that can be disabled."
      ]
    },
    "p1-threat-actors": {
      title: "Threat Actor Types and Motivation",
      explanation:
        "Threat actors include cybercriminals, insiders, hacktivists, and nation-state groups. Understanding motives such as financial gain, disruption, espionage, or revenge improves defensive prioritization.",
      keyPoints: [
        "Motivation shapes attacker behavior.",
        "Different actors require different defense focus."
      ],
      practice: [
        "Pick one actor type and model likely targets.",
        "Define one detection signal specific to that actor."
      ]
    },
    "p1-aaa-model": {
      title: "AAA Model",
      explanation:
        "AAA stands for authentication, authorization, and accounting. It ensures users are verified, actions are permissioned correctly, and activity is logged for accountability and investigation.",
      keyPoints: [
        "Authentication answers who you are.",
        "Authorization answers what you can do.",
        "Accounting answers what you did."
      ],
      practice: [
        "Audit one login flow and map AAA steps.",
        "Identify which step is currently weakest."
      ],
      code: "Login request -> Authenticate user\nRole check -> Authorize endpoint access\nAccess log -> Account for action trail"
    },
    "p1-least-privilege": {
      title: "Least Privilege",
      explanation:
        "Least privilege means users and services get only the access needed to perform required tasks. This limits blast radius when credentials are stolen or accounts are misused.",
      keyPoints: [
        "Default deny is safer than broad default allow.",
        "Excess permissions are hidden high-risk debt."
      ],
      practice: [
        "Review one role and remove one unnecessary permission.",
        "Define an approval rule for privilege escalation requests."
      ]
    },
    "p1-zero-trust-basics": {
      title: "Zero Trust Basics",
      explanation:
        "Zero trust assumes no implicit trust based on network location. Every access request is continuously evaluated using identity, device state, context, and policy.",
      keyPoints: [
        "Never trust by default, always verify.",
        "Context-aware checks improve control quality."
      ],
      practice: [
        "List three signals a zero-trust policy should evaluate.",
        "Design one deny condition for risky device posture."
      ],
      resources: [
        { label: "NIST Zero Trust Architecture (SP 800-207)", url: "https://csrc.nist.gov/pubs/sp/800/207/final" }
      ]
    },
    "p1-security-policy-basics": {
      title: "Security Policy and Standards",
      explanation:
        "Policies describe required behavior, standards define measurable control expectations, and procedures explain execution steps. Together, they turn security intent into repeatable organization-wide practice.",
      keyPoints: [
        "Policy sets direction.",
        "Standard sets measurable baseline.",
        "Procedure defines execution steps."
      ],
      practice: [
        "Draft a 5-line password policy baseline.",
        "Add one measurable standard to the policy."
      ]
    },
    "p1-risk-assessment-basics": {
      title: "Risk Assessment Workflow",
      explanation:
        "A basic risk assessment identifies assets, threats, vulnerabilities, likelihood, and impact, then prioritizes treatment plans. Consistent scoring improves decision quality across teams.",
      keyPoints: [
        "Consistency in scoring improves decisions.",
        "Treatment plans must have owners and deadlines."
      ],
      practice: [
        "Perform a mini risk assessment for one API endpoint.",
        "Write one mitigation with owner and target date."
      ],
      code: "Risk Score = Likelihood (1-5) x Impact (1-5)\n1-6: Low | 7-14: Medium | 15-25: High"
    },
    "p1-asset-classification": {
      title: "Asset Classification and Data Sensitivity",
      explanation:
        "Classification groups systems and data by business criticality and sensitivity, such as public, internal, confidential, or restricted. Strong classification helps allocate controls where they matter most.",
      keyPoints: [
        "Critical assets require stronger controls.",
        "Classification drives encryption and access policy."
      ],
      practice: [
        "Classify 5 assets in your project by sensitivity.",
        "Assign one mandatory control per class."
      ]
    },
    "p1-defense-in-depth": {
      title: "Defense in Depth",
      explanation:
        "Defense in depth uses multiple protective layers across identity, endpoint, network, application, and monitoring. If one control fails, other layers still slow or stop attacker progress.",
      keyPoints: [
        "Single-control security is fragile.",
        "Layer diversity improves resilience."
      ],
      practice: [
        "Design a 4-layer control model for one web app.",
        "Identify one missing layer in your current stack."
      ]
    },
    "p1-control-types": {
      title: "Preventive, Detective, and Corrective Controls",
      explanation:
        "Preventive controls reduce chance of compromise, detective controls identify suspicious activity, and corrective controls restore secure state after incidents. Mature programs balance all three.",
      keyPoints: [
        "Prevention alone is not enough.",
        "Detection and recovery close the loop."
      ],
      practice: [
        "Categorize five controls into preventive/detective/corrective.",
        "Find one category currently underrepresented."
      ]
    },
    "p1-security-architecture-review": {
      title: "Security Architecture Review Basics",
      explanation:
        "Architecture review checks trust boundaries, data flow, and control coverage before deployment. Early design review catches risky assumptions before they become production vulnerabilities.",
      keyPoints: [
        "Design flaws are cheaper to fix early.",
        "Data flow visibility is central to secure architecture."
      ],
      practice: [
        "Draw a trust-boundary diagram for one service.",
        "List top 3 architecture risks from that diagram."
      ]
    },
    "p1-incident-response": {
      title: "Incident Response Lifecycle",
      explanation:
        "Incident response moves through preparation, detection, containment, eradication, recovery, and lessons learned. A practiced lifecycle improves speed, coordination, and recovery confidence.",
      keyPoints: [
        "Response speed depends on preparation quality.",
        "Lessons learned must update playbooks."
      ],
      practice: [
        "Write a one-page IR checklist for phishing incidents.",
        "Define who approves containment decisions."
      ],
      resources: [
        { label: "NIST Computer Security Incident Handling Guide (SP 800-61r2)", url: "https://csrc.nist.gov/pubs/sp/800/61/r2/final" }
      ]
    },
    "p1-security-metrics": {
      title: "Security Metrics That Matter",
      explanation:
        "Useful security metrics include mean time to detect, mean time to respond, patch compliance, and high-risk exposure trends. Good metrics drive better action, not just prettier dashboards.",
      keyPoints: [
        "Metrics should change decisions, not only reports.",
        "Trend metrics are more useful than one-time snapshots."
      ],
      practice: [
        "Pick three metrics for a monthly security review.",
        "Define one threshold that triggers action."
      ]
    },
    "p1-tabletop-exercises": {
      title: "Tabletop Exercises and Preparedness",
      explanation:
        "Tabletop exercises simulate realistic incidents for cross-team decision practice. They reveal playbook gaps, unclear ownership, and communication failures before real crises.",
      keyPoints: [
        "Tabletops validate coordination, not just technical skill.",
        "Post-exercise action items must be tracked to closure."
      ],
      practice: [
        "Run a 30-minute ransomware tabletop with your team.",
        "Capture three improvement actions and owners."
      ]
    },
    "p2-linux-cli-permissions": {
      title: "Linux CLI and Permissions",
      explanation:
        "Linux host security starts with command-line fluency and permission correctness. File ownership and mode bits define who can read, write, or execute resources, and weak permission hygiene is a common compromise path.",
      keyPoints: [
        "Ownership and mode bits directly control host exposure.",
        "Overly broad permissions create avoidable lateral movement risk."
      ],
      practice: [
        "Audit permissions of `/etc`, `/var`, and home directories.",
        "Fix one over-permissive file and document the change."
      ],
      code: "ls -la /etc\nchmod 640 /path/to/file\nchown root:security /path/to/file"
    },
    "p2-linux-filesystem-security": {
      title: "Linux Filesystem and Sensitive Path Security",
      explanation:
        "Critical Linux paths like `/etc`, `/var/log`, `/home`, and `/tmp` require different security controls. Attackers often abuse writable directories, weak temp-file handling, and exposed configuration files to escalate access.",
      keyPoints: [
        "Path sensitivity varies by function and trust level.",
        "Temporary and log paths are frequent abuse points."
      ],
      practice: [
        "List sensitive files under `/etc` and verify ownership.",
        "Check whether `/tmp` misuse protections are enabled."
      ]
    },
    "p2-linux-process-basics": {
      title: "Linux Process and Service Fundamentals",
      explanation:
        "Process visibility helps differentiate expected workload from suspicious execution. Understanding parent-child process relationships, startup units, and long-running services is essential for reliable host detection.",
      keyPoints: [
        "Process lineage reveals attacker behavior patterns.",
        "Service startup behavior is a key persistence surface."
      ],
      practice: [
        "Use `ps`, `top`, and `systemctl` to baseline services.",
        "Identify one process with unusual parent-child lineage."
      ],
      code: "ps aux --sort=-%cpu | head\nsystemctl list-units --type=service --state=running"
    },
    "p2-windows-accounts": {
      title: "Windows Accounts and Privileges",
      explanation:
        "Windows host security improves when administrative privileges are tightly controlled and local account sprawl is minimized. Privileged access should be deliberate, time-bound, and audited.",
      keyPoints: [
        "Reduce standing admin privileges wherever possible.",
        "Review local and domain group memberships regularly."
      ],
      practice: [
        "Audit local administrators group membership.",
        "Define one control for temporary privileged access."
      ]
    },
    "p2-windows-registry-startup": {
      title: "Registry and Startup Persistence Basics",
      explanation:
        "Windows registry and startup folders are common persistence mechanisms for malware and unauthorized software. Monitoring these locations improves early detection of post-compromise activity.",
      keyPoints: [
        "Persistence frequently hides in startup entries and run keys.",
        "Unexpected autoruns are high-priority investigation signals."
      ],
      practice: [
        "Review common run keys and startup folders for unknown entries.",
        "Document and validate one suspicious startup artifact."
      ]
    },
    "p2-windows-event-logs-intro": {
      title: "Windows Event Logs Introduction",
      explanation:
        "Windows event logs provide host-level evidence for authentication events, process execution, policy changes, and system anomalies. Consistent log collection enables faster triage and stronger incident timelines.",
      keyPoints: [
        "Event logs are foundational for detection and forensic analysis.",
        "Log source quality matters more than alert quantity."
      ],
      practice: [
        "Inspect Security, System, and Application logs in Event Viewer.",
        "Capture one event chain for a failed login sequence."
      ]
    },
    "p2-processes-services": {
      title: "Processes and Services",
      explanation:
        "Host monitoring should track process creation, service changes, command line usage, and unusual execution locations. Attackers often blend in with legitimate binaries, so context is critical.",
      keyPoints: [
        "Execution context is as important as process name.",
        "Service modification events are strong persistence indicators."
      ],
      practice: [
        "Baseline normal process inventory for one workstation.",
        "Flag and investigate one outlier process."
      ]
    },
    "p2-logging-patching": {
      title: "Logging and Patch Management",
      explanation:
        "Logging and patching are two core operational controls for host resilience. Logs improve detection and response, while patching reduces known exploitable surface area.",
      keyPoints: [
        "Unpatched systems remain vulnerable to known attacks.",
        "Poor logging weakens containment and root-cause analysis."
      ],
      practice: [
        "Define patch SLA tiers by risk severity.",
        "List top 5 host log sources for incident triage."
      ],
      resources: [
        { label: "CISA Known Exploited Vulnerabilities Catalog", url: "https://www.cisa.gov/known-exploited-vulnerabilities-catalog" }
      ]
    },
    "p2-auth-log-analysis": {
      title: "Authentication Log Analysis Patterns",
      explanation:
        "Authentication logs reveal brute-force attempts, impossible travel behavior, privilege misuse, and suspicious login timing. Pattern-based review helps detect account compromise early.",
      keyPoints: [
        "Login anomalies are often early compromise signals.",
        "Correlation across identity and endpoint logs improves confidence."
      ],
      practice: [
        "Identify failed-login spikes for one user account.",
        "Write one simple detection rule for impossible travel."
      ]
    },
    "p2-vulnerability-scanning-basics": {
      title: "Vulnerability Scanning Workflow",
      explanation:
        "Scanning helps identify missing patches, weak configurations, and exposed services. Strong scanning workflows include asset inventory, authenticated checks, prioritization, and verification after remediation.",
      keyPoints: [
        "Scanning without inventory leaves blind spots.",
        "Findings must be validated and tracked to closure."
      ],
      practice: [
        "Create a sample scan-to-remediation flow for one host group.",
        "Classify five findings by exploitability and impact."
      ]
    },
    "p2-endpoint-protection-stack": {
      title: "Endpoint Protection Stack (AV/EDR/Firewall)",
      explanation:
        "Endpoint protection is layered: antivirus for known threats, EDR for behavioral detection, and host firewall for traffic control. No single tool is sufficient without tuning and response playbooks.",
      keyPoints: [
        "Layered endpoint controls raise attacker cost.",
        "Detection tooling requires tuned alerts and operational response."
      ],
      practice: [
        "Map one attack scenario to AV, EDR, and firewall controls.",
        "Define who handles high-confidence endpoint alerts."
      ]
    },
    "p2-baseline-config-management": {
      title: "Baseline Configuration Management",
      explanation:
        "Baselines ensure hosts follow secure default configuration standards. Drift detection and periodic compliance review prevent silent regression over time.",
      keyPoints: [
        "Secure defaults reduce configuration entropy.",
        "Drift detection is essential for long-term control effectiveness."
      ],
      practice: [
        "Draft a 10-control baseline for Windows or Linux hosts.",
        "Plan a weekly drift review with ownership."
      ]
    },
    "p2-endpoint-hardening": {
      title: "Endpoint Hardening Baselines",
      explanation:
        "Hardening reduces attack surface by disabling unnecessary features, restricting scripts, enforcing secure authentication, and applying consistent host controls. Mature teams harden by policy, not ad-hoc fixes.",
      keyPoints: [
        "Hardening must be measurable and repeatable.",
        "Control consistency matters as much as control quality."
      ],
      practice: [
        "Create a hardening checklist for developer laptops.",
        "Validate one baseline item with an automated check."
      ]
    },
    "p2-privilege-escalation-paths": {
      title: "Privilege Escalation Paths and Prevention",
      explanation:
        "Privilege escalation can occur through misconfigured services, weak credentials, unpatched software, and excessive permissions. Prevention requires least privilege, patching, and continuous configuration validation.",
      keyPoints: [
        "Escalation paths often chain multiple minor weaknesses.",
        "Privilege control is both an identity and host problem."
      ],
      practice: [
        "Identify two local privilege escalation risks on a sample host.",
        "Define one preventive control per risk."
      ]
    },
    "p2-hardening-validation": {
      title: "Hardening Validation and Drift Detection",
      explanation:
        "Controls are only effective when validated regularly. Hardening validation compares actual host state to baseline and detects drift, policy bypass, or unauthorized change.",
      keyPoints: [
        "Validation closes the gap between policy and reality.",
        "Drift monitoring improves long-term security posture."
      ],
      practice: [
        "Run one baseline validation checklist after patch cycle.",
        "Document and remediate two drift findings."
      ]
    },
    "p2-backup-recovery": {
      title: "Backup and Recovery Readiness",
      explanation:
        "Recovery readiness ensures critical systems can be restored quickly after host compromise, corruption, or ransomware. Backups must be tested regularly; untested backups are operational risk, not resilience.",
      keyPoints: [
        "Recovery objectives should be defined before incidents.",
        "Offline and immutable backup strategies improve ransomware resilience."
      ],
      practice: [
        "Define RPO and RTO targets for one critical system.",
        "Run a restore test and record validation evidence."
      ],
      resources: [
        { label: "NIST SP 800-34 Contingency Planning Guide", url: "https://csrc.nist.gov/pubs/sp/800/34/r1/final" }
      ]
    },
    "p2-ransomware-containment": {
      title: "Ransomware Containment Playbook",
      explanation:
        "Ransomware response requires rapid isolation, credential containment, communication discipline, and recovery orchestration. Prepared playbooks reduce panic-driven errors during high-pressure events.",
      keyPoints: [
        "Containment speed heavily influences blast radius.",
        "Clear role assignment improves execution under pressure."
      ],
      practice: [
        "Draft a first-60-minutes ransomware containment checklist.",
        "Define escalation triggers and communications channels."
      ]
    },
    "p2-host-incident-reporting": {
      title: "Host Incident Reporting and Handover",
      explanation:
        "Incident reporting should include timeline, impacted assets, root-cause hypothesis, evidence references, and remediation status. Structured handover improves continuity between SOC, IT, and leadership.",
      keyPoints: [
        "Good reports reduce repeated investigative effort.",
        "Handover quality affects recovery speed and decision confidence."
      ],
      practice: [
        "Write a one-page host incident summary for a simulated event.",
        "Include timeline, impact, containment, and next actions."
      ]
    },
    "p3-osi-tcpip": {
      title: "OSI and TCP/IP Models",
      explanation: "Layer models help map where failures or attacks occur in network communication."
    },
    "p3-protocols-ports": {
      title: "Protocols and Ports",
      explanation: "Protocol and port awareness helps distinguish legitimate traffic from suspicious exposure."
    },
    "p3-packet-analysis": {
      title: "Packet Analysis Basics",
      explanation: "Packet analysis reveals real request and response behavior for troubleshooting and threat validation."
    },
    "p3-firewalls-segmentation": {
      title: "Firewalls and Segmentation",
      explanation: "Firewalls and segmentation enforce trust boundaries and limit lateral movement."
    },
    "p3-ids-ips": {
      title: "IDS/IPS and Alert Tuning",
      explanation: "Tuned IDS/IPS rules improve detection quality and reduce noisy false-positive alerts."
    },
    "p3-network-triage": {
      title: "Network Incident Triage",
      explanation: "Network triage prioritizes scope and impact quickly so containment actions are accurate."
    },
    "p4-http-https": {
      title: "HTTP, HTTPS, and TLS",
      explanation: "HTTPS with proper TLS settings protects web data in transit and validates service identity."
    },
    "p4-auth-sessions": {
      title: "Authentication and Sessions",
      explanation: "Secure session management prevents hijacking, fixation, and unauthorized account use."
    },
    "p4-xss-sqli": {
      title: "XSS and SQL Injection",
      explanation: "XSS and SQLi are high-impact input handling flaws prevented by validation, encoding, and parameterized queries."
    },
    "p4-csrf-access-control": {
      title: "CSRF and Access Control",
      explanation: "CSRF and weak authorization together can allow unauthorized state-changing actions."
    },
    "p4-secure-sdlc": {
      title: "Secure SDLC",
      explanation: "Secure SDLC embeds threat modeling and testing into development so vulnerabilities are caught earlier."
    },
    "p4-api-threat-modeling": {
      title: "API Security and Threat Modeling",
      explanation: "API threat modeling highlights abuse cases and helps design stronger authentication and authorization flows."
    },
    "p5-scope-ethics": {
      title: "Scope, Ethics, and Rules of Engagement",
      explanation: "Ethical hacking must stay within authorized scope and predefined engagement constraints."
    },
    "p5-recon-scanning": {
      title: "Reconnaissance and Scanning",
      explanation: "Recon and scanning map reachable assets and services before deeper testing begins."
    },
    "p5-enumeration-exploitation": {
      title: "Enumeration and Exploitation Validation",
      explanation: "Enumeration gathers detail, while controlled exploitation validates real business risk."
    },
    "p5-evidence-notes": {
      title: "Evidence Collection and Notes",
      explanation: "Clear evidence and reproducible notes make findings trustworthy and actionable."
    },
    "p5-risk-prioritization": {
      title: "Risk Prioritization",
      explanation: "Prioritization should reflect exploitability, impact, and business criticality."
    },
    "p5-reporting-retesting": {
      title: "Reporting and Retesting",
      explanation: "Security work is complete only when fixes are documented, applied, and retested successfully."
    },
    "p6-home-lab": {
      title: "Home Lab Setup",
      explanation: "A safe virtual home lab enables repeatable practice without production risk."
    },
    "p6-ctf-basics": {
      title: "Beginner CTF Workflow",
      explanation: "A structured CTF workflow builds practical problem-solving speed and confidence."
    },
    "p6-blue-team-drills": {
      title: "Blue Team Detection Drills",
      explanation: "Detection drills improve alert triage, log correlation, and containment decision-making."
    },
    "p6-red-team-mini": {
      title: "Red Team Mini Assessments",
      explanation: "Mini assessments combine recon, validation, and reporting in a focused offensive cycle."
    },
    "p6-capstone-report": {
      title: "Capstone Execution and Reporting",
      explanation: "Capstone work proves end-to-end skill through scoped execution, evidence, and final reporting."
    },
    "p6-portfolio-roadmap": {
      title: "Portfolio and Career Roadmap",
      explanation: "A portfolio with clear case studies shows practical ability and supports career progression."
    }
  }
}

export default cybersecurityData
