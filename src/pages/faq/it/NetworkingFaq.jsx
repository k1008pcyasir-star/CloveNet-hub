import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ShieldCheck, Globe, Lock, Zap, Scale } from 'lucide-react';
import Header from '../../../components/Header';

export default function NetworkingFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const maswali = [
    // I. Foundational Networking (1-20)
    { id: 1, cat: "Networking", q: "What is the OSI model, and how does it facilitate network communication?", ans: "The OSI model provides a standardized framework that allows different systems to communicate by breaking the process into seven distinct layers, each with specific protocols and hardware associations." },
    { id: 2, cat: "Networking", q: "Explain the differences between a Layer 2 switch and a router.", ans: "Switches connect devices within the same network using MAC addresses, while routers connect different networks using IP addresses." },
    { id: 3, cat: "Networking", q: "What are the seven layers of the OSI model?", ans: "Physical, Data Link, Network, Transport, Session, Presentation, and Application." },
    { id: 4, cat: "Networking", q: "How does an IP address differ from a MAC address?", ans: "An IP address is a logical identifier assigned by software, whereas a MAC address is a permanent hardware identifier burned into the NIC." },
    { id: 5, cat: "Networking", q: "Differentiate between IPv4 and IPv6.", ans: "IPv4 uses a 32-bit address space (4.3 billion addresses), while IPv6 uses a 128-bit address space (virtually infinite unique identifiers)." },
    { id: 6, cat: "Networking", q: "What is the purpose of the Domain Name System (DNS)?", ans: "DNS translates human-readable domain names (e.g., example.com) into machine-readable IP addresses." },
    { id: 7, cat: "Networking", q: "Explain the role of the Dynamic Host Configuration Protocol (DHCP).", ans: "DHCP automatically assigns IP addresses, subnet masks, and default gateways to devices on a network." },
    { id: 8, cat: "Networking", q: "What is a subnet mask, and why is it used?", ans: "A subnet mask identifies the network and host portions of an IP address, facilitating efficient routing and network segmentation." },
    { id: 9, cat: "Networking", q: "Define the term 'Default Gateway.'", ans: "A default gateway is the IP address of the router interface that serves as an exit point for traffic leaving the local network." },
    { id: 10, cat: "Networking", q: "What is the difference between a Hub, a Switch, and a Router?", ans: "A hub broadcasts traffic to all; a switch forwards to specific ports via MAC; a router forwards between networks via IP." },
    { id: 11, cat: "Networking", q: "Explain the Address Resolution Protocol (ARP).", ans: "ARP maps a known IP address to a MAC address within a local network segment." },
    { id: 12, cat: "Networking", q: "What is a Virtual Local Area Network (VLAN)?", ans: "A VLAN is a logical segmentation of a physical network that groups devices into separate broadcast domains." },
    { id: 13, cat: "Networking", q: "Describe the function of the Spanning Tree Protocol (STP).", ans: "STP prevents loops in Layer 2 networks by identifying redundant paths and placing specific ports in a blocking state." },
    { id: 14, cat: "Networking", q: "What is Network Address Translation (NAT)?", ans: "NAT allows private IP addresses within a local network to access the internet via a single public IP address." },
    { id: 15, cat: "Networking", q: "Explain the difference between TCP and UDP.", ans: "TCP is reliable and connection-oriented; UDP is fast and connectionless." },
    { id: 16, cat: "Networking", q: "What is the purpose of the Internet Control Message Protocol (ICMP)?", ans: "ICMP is used for error reporting and network diagnostics, utilized by tools like Ping and Traceroute." },
    { id: 17, cat: "Networking", q: "Define LAN, WAN, and MAN.", ans: "LAN covers small areas like offices; WAN spans large geographical areas; MAN covers city-sized areas." },
    { id: 18, cat: "Networking", q: "What is a protocol in the context of networking?", ans: "A protocol is a standardized set of rules that governs the exchange of data between devices." },
    { id: 19, cat: "Networking", q: "Explain the concept of a 'Broadcast Domain.'", ans: "A broadcast domain is a segment where a broadcast frame sent by one device is received by all others in that segment." },
    { id: 20, cat: "Networking", q: "What is a 'Collision Domain'?", ans: "A segment where data packet collisions can occur when two devices transmit simultaneously on the same medium." },

    // II. Cybersecurity Principles (21-40)
    { id: 21, cat: "Security", q: "What is the CIA Triad?", ans: "Confidentiality, Integrity, and Availability—the core pillars of information security." },
    { id: 22, cat: "Security", q: "Define 'Malware' and provide examples.", ans: "Malware is software designed to cause damage; examples include viruses, worms, trojans, and ransomware." },
    { id: 23, cat: "Security", q: "What is the difference between a Virus and a Worm?", ans: "A virus requires a host file and human intervention; a worm is self-replicating and spreads autonomously." },
    { id: 24, cat: "Security", q: "Explain Phishing and how to prevent it.", ans: "A social engineering attack using fraudulent communication; prevent via MFA, email filters, and education." },
    { id: 25, cat: "Security", q: "What is Ransomware?", ans: "Malware that encrypts files and demands payment for the decryption key." },
    { id: 26, cat: "Security", q: "Define 'Social Engineering' in cybersecurity.", ans: "Manipulation of individuals into divulging confidential information or performing actions that compromise security." },
    { id: 27, cat: "Security", q: "What is the difference between Symmetric and Asymmetric Encryption?", ans: "Symmetric uses one key; asymmetric uses a public key for encryption and a private key for decryption." },
    { id: 28, cat: "Security", q: "Explain the purpose of a Firewall.", ans: "A security device that monitors and controls incoming/outgoing traffic based on predetermined rules." },
    { id: 29, cat: "Security", q: "What is a Virtual Private Network (VPN)?", ans: "A VPN creates a secure, encrypted tunnel over a public network to protect data in transit." },
    { id: 30, cat: "Security", q: "Define the difference between Authentication and Authorization.", ans: "Authentication verifies who a user is; authorization determines what they are allowed to do." },
    { id: 31, cat: "Security", q: "What is Two-Factor Authentication (2FA)?", ans: "A security process requiring two different forms of identification before granting access." },
    { id: 32, cat: "Security", q: "Explain the concept of 'Least Privilege.'", ans: "The principle that users should only be granted the minimum level of access necessary for their job." },
    { id: 33, cat: "Security", q: "What is a 'Zero-Day Vulnerability'?", ans: "A software vulnerability unknown to the vendor for which no patch currently exists." },
    { id: 34, cat: "Security", q: "Differentiate between a Black Hat, White Hat, and Grey Hat hacker.", ans: "White hats are ethical; black hats are malicious; grey hats operate in between without permission." },
    { id: 35, cat: "Security", q: "What is a 'Brute Force Attack'?", ans: "An attack that attempts to guess a password by systematically trying all possible combinations." },
    { id: 36, cat: "Security", q: "Explain 'SQL Injection' (SQLi).", ans: "A vulnerability that allows an attacker to interfere with the queries an application makes to its database." },
    { id: 37, cat: "Security", q: "What is 'Cross-Site Scripting' (XSS)?", ans: "A vulnerability where malicious scripts are injected into trusted websites to execute in the victim's browser." },
    { id: 38, cat: "Security", q: "Define DoS and DDoS attacks.", ans: "DoS shuts down a machine; DDoS uses a botnet of compromised machines to achieve this." },
    { id: 39, cat: "Security", q: "What is an IDS and IPS?", ans: "IDS monitors and alerts on suspicious activity; IPS monitors, alerts, and actively blocks it." },
    { id: 40, cat: "Security", q: "Explain the purpose of a 'Honeypot.'", ans: "A decoy system designed to lure attackers to study their methods and protect legitimate systems." },

    // III. Advanced Infrastructure (41-60)
    { id: 41, cat: "Advanced", q: "What is 'Deep Packet Inspection' (DPI)?", ans: "DPI analyzes the data payload of packets, not just headers, to detect advanced threats." },
    { id: 42, cat: "Advanced", q: "Explain 'SSL/TLS Inspection.'", ans: "Decrypting encrypted traffic, inspecting it for threats, and re-encrypting it before forwarding." },
    { id: 43, cat: "Advanced", q: "What is a 'Next-Generation Firewall' (NGFW)?", ans: "Advanced firewall combining traditional features with DPI, IPS, and application awareness." },
    { id: 44, cat: "Advanced", q: "Describe 'Software-Defined Networking' (SDN).", ans: "Separates the control plane from the data plane for centralized network control." },
    { id: 45, cat: "Advanced", q: "What is 'SD-WAN'?", ans: "Software-defined approach to managing WANs, optimizing traffic across multiple connections." },
    { id: 46, cat: "Advanced", q: "Explain BGP (Border Gateway Protocol).", ans: "Protocol used to route data between different Autonomous Systems on the internet." },
    { id: 47, cat: "Advanced", q: "What is 'OSPF' (Open Shortest Path First)?", ans: "Link-state routing protocol using Dijkstra algorithm to calculate the shortest path." },
    { id: 48, cat: "Advanced", q: "Define 'EIGRP' (Enhanced Interior Gateway Routing Protocol).", ans: "Cisco-proprietary hybrid routing protocol using DUAL algorithm for fast convergence." },
    { id: 49, cat: "Advanced", q: "What is 'MPLS' (Multi-Protocol Label Switching)?", ans: "Directs data from node to node based on path labels rather than long network addresses." },
    { id: 50, cat: "Advanced", q: "Explain 'VPC' (Virtual Private Cloud).", ans: "Private, isolated section of a public cloud for launching resources in a virtual network." },
    { id: 51, cat: "Advanced", q: "What is 'High Availability' (HA)?", ans: "Design ensuring operational performance during a specified period, often via clustering." },
    { id: 52, cat: "Advanced", q: "Describe 'Active-Passive' vs 'Active-Active' HA.", ans: "Active-Passive has one unit standby; Active-Active has both units sharing the load." },
    { id: 53, cat: "Advanced", q: "What is 'Port Forwarding'?", ans: "Method of making a service on a private network accessible to devices on the internet." },
    { id: 54, cat: "Advanced", q: "Explain 'SSL Offloading.'", ans: "Moving SSL/TLS decryption from a web server to a dedicated device like a load balancer." },
    { id: 55, cat: "Advanced", q: "What is 'Quality of Service' (QoS)?", ans: "Techniques used to manage and prioritize traffic to ensure critical app bandwidth." },
    { id: 56, cat: "Advanced", q: "Define 'Traffic Shaping' and 'Policing.'", ans: "Shaping buffers bursts; policing drops or re-marks excess traffic immediately." },
    { id: 57, cat: "Advanced", q: "What is 'EtherChannel'?", ans: "Bundling multiple physical links into one logical link for bandwidth and redundancy." },
    { id: 58, cat: "Advanced", q: "Explain 'VTP' (VLAN Trunking Protocol).", ans: "Cisco protocol used to synchronize VLAN info across a network of switches." },
    { id: 59, cat: "Advanced", q: "What is a 'Static Route'?", ans: "Manually configured path in a routing table that does not change unless updated." },
    { id: 60, cat: "Advanced", q: "Define a 'Default Route' (0.0.0.0/0).", ans: "Static route matching all packets, serving as the path of last resort." },

    // IV. Vulnerability and Incident Response (61-80)
    { id: 61, cat: "Incidents", q: "What is 'Penetration Testing'?", ans: "Simulated cyberattack against a system to check for exploitable vulnerabilities." },
    { id: 62, cat: "Incidents", q: "Vulnerability Assessment vs Penetration Test?", ans: "Assessment identifies weaknesses; testing attempts to exploit them." },
    { id: 63, cat: "Incidents", q: "What is the 'Incident Response Lifecycle'?", ans: "Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned." },
    { id: 64, cat: "Incidents", q: "Define 'SIEM' (Security Information and Event Management).", ans: "System that collects and analyzes log data to detect security incidents." },
    { id: 65, cat: "Incidents", q: "What is a 'SOC' (Security Operations Center)?", ans: "Centralized unit that monitors and defends an organization's security posture." },
    { id: 66, cat: "Incidents", q: "Explain 'Digital Forensics.'", ans: "Process of uncovering and interpreting electronic data for legal/investigative purposes." },
    { id: 67, cat: "Incidents", q: "What is a 'Root Cause Analysis' (RCA)?", ans: "Process of identifying the fundamental cause of a failure or security incident." },
    { id: 68, cat: "Incidents", q: "Define 'Indicator of Compromise' (IOC).", ans: "Forensic data (file hash, IP) that indicates a potential security breach." },
    { id: 69, cat: "Incidents", q: "What is 'Threat Hunting'?", ans: "Proactive exercise where analysts search networks for threats that bypassed defenses." },
    { id: 70, cat: "Incidents", q: "Explain the 'MITRE ATT&CK' framework.", ans: "Knowledge base of adversary tactics and techniques based on real-world observations." },
    { id: 71, cat: "Incidents", q: "What is 'Data Loss Prevention' (DLP)?", ans: "Strategy ensuring end users don't send sensitive info outside the corporate network." },
    { id: 72, cat: "Incidents", q: "Describe 'Endpoint Security.'", ans: "Securing entry points of end-user devices (laptops, mobile) from exploitation." },
    { id: 73, cat: "Incidents", q: "What is 'Zero Trust Architecture'?", ans: "Security model where no user or device is trusted by default, regardless of location." },
    { id: 74, cat: "Incidents", q: "Explain 'Sandboxing.'", ans: "Running suspicious files in isolated environments to observe behavior safely." },
    { id: 75, cat: "Incidents", q: "False Positive vs False Negative?", ans: "False positive is a wrong alarm; false negative is a missed threat." },
    { id: 76, cat: "Incidents", q: "How do you detect 'ARP Spoofing' with Wireshark?", ans: "Look for multiple devices responding to ARP requests with the same MAC address." },
    { id: 77, cat: "Incidents", q: "What is a 'Man-in-the-Middle' (MITM) attack?", ans: "Attacker intercepts and relays messages between two parties secretly." },
    { id: 78, cat: "Incidents", q: "Explain 'Session Hijacking.'", ans: "Exploitation of a valid session to gain unauthorized access to services." },
    { id: 79, cat: "Incidents", q: "What is 'Privilege Escalation'?", ans: "Exploiting a bug to gain elevated access to normally protected resources." },
    { id: 80, cat: "Incidents", q: "Define 'Patch Management.'", ans: "Process of distributing updates to software to fix vulnerabilities and bugs." },

    // V. Tanzanian Regulatory Compliance (PDPA 2022) (81-100)
    { id: 81, cat: "PDPA TZ", q: "What is the Tanzania Personal Data Protection Act (PDPA) 2022?", ans: "The principal law governing data processing in Tanzania, effective May 1, 2023." },
    { id: 82, cat: "PDPA TZ", q: "Who is a 'Data Controller' under the PDPA?", ans: "An organization that determines the purpose and means of processing personal data." },
    { id: 83, cat: "PDPA TZ", q: "Who is a 'Data Processor' under the PDPA?", ans: "An organization that processes personal data on behalf of a data controller." },
    { id: 84, cat: "PDPA TZ", q: "Role of 'Personal Data Protection Commission' (PDPC)?", ans: "Regulatory body monitoring compliance and registering data controllers/processors." },
    { id: 85, cat: "PDPA TZ", q: "Is registration mandatory for all data controllers?", ans: "Yes, under Section 14(1) of the Act, all collectors and processors must be registered." },
    { id: 86, cat: "PDPA TZ", q: "What are the registration fees for organizations?", ans: "From TZS 100,000 to 1,000,000 depending on size and turnover." },
    { id: 87, cat: "PDPA TZ", q: "How long is a PDPA certificate valid?", ans: "Five years, after which it must be renewed." },
    { id: 88, cat: "PDPA TZ", q: "What is a 'Data Protection Officer' (DPO)?", ans: "Individual appointed to ensure organization compliance with the PDPA." },
    { id: 89, cat: "PDPA TZ", q: "Key responsibilities of a DPO in Tanzania?", ans: "Monitoring compliance, educating staff, conducting DPIAs, and PDPC liaison." },
    { id: 90, cat: "PDPA TZ", q: "Can an organization have more than one DPO?", ans: "Yes, including one high-level accounting officer per guidelines." },
    { id: 91, cat: "PDPA TZ", q: "What is a 'Data Protection Impact Assessment' (DPIA)?", ans: "Process identifying and minimizing data protection risks of projects." },
    { id: 92, cat: "PDPA TZ", q: "Penalties for non-registration under PDPA?", ans: "Penalties can reach up to TZS 5,000,000." },
    { id: 93, cat: "PDPA TZ", q: "Define 'Personal Data' according to TZ law.", ans: "Any data relating to an identifiable person (names, ID numbers, location)." },
    { id: 94, cat: "PDPA TZ", q: "What is 'Sensitive Personal Data'?", ans: "Data revealing race, religion, genetic data, or health information." },
    { id: 95, cat: "PDPA TZ", q: "Rights of a 'Data Subject' in Tanzania?", ans: "Rights to be informed, access, object, and rectification/erasure." },
    { id: 96, cat: "PDPA TZ", q: "Can data be transferred outside Tanzania?", ans: "Only with a PDPC permit and assurance of adequate recipient protection." },
    { id: 97, cat: "PDPA TZ", q: "What is 'Mandatory Breach Notification'?", ans: "Legal requirement to notify the PDPC promptly of any data breach." },
    { id: 98, cat: "PDPA TZ", q: "How long should personal data be stored?", ans: "Only as long as necessary for its specific collected purpose." },
    { id: 99, cat: "PDPA TZ", q: "Does the PDPA apply to Zanzibar?", ans: "Yes, it applies to both Mainland and Zanzibar for union matters." },
    { id: 100, cat: "PDPA TZ", q: "What is the 'Principle of Transparency'?", ans: "Requiring data subjects to be aware of what is collected and why." }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getCatStyles = (cat) => {
    switch(cat) {
      case 'Networking': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Security': return 'bg-red-50 text-red-600 border-red-100';
      case 'Advanced': return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'Incidents': return 'bg-orange-50 text-orange-600 border-orange-100';
      case 'PDPA TZ': return 'bg-neo-mint/10 text-deep-blue border-neo-mint/20';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta text-deep-blue">
      <Header />
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        
        {/* BACK BUTTON */}
        <Link 
          to="/faq/it" 
          className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-deep-blue text-deep-blue font-bold rounded-xl mb-10 hover:bg-deep-blue hover:text-white transition-all shadow-sm"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        {/* HERO */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-white rounded-3xl shadow-sm border border-slate-100 mb-6">
            <ShieldCheck size={40} className="text-neo-mint" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Networking & Security
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto italic">
            Mkusanyiko wa Maswali 100 ya Kitalamu ya Usaili.
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-4">
          {maswali.map((m, index) => (
            <div 
              key={m.id} 
              className={`bg-white rounded-[28px] border transition-all duration-300 ${activeIndex === index ? 'border-neo-mint shadow-xl' : 'border-slate-100 shadow-sm'}`}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <div className="flex items-center gap-5">
                  <span className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm ${activeIndex === index ? 'bg-neo-mint text-deep-blue' : 'bg-slate-50 text-slate-400'}`}>
                    {m.id}
                  </span>
                  <div>
                    <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full border mb-2 inline-block ${getCatStyles(m.cat)}`}>
                      {m.cat}
                    </span>
                    <h3 className="font-bold text-deep-blue text-lg leading-snug group-hover:text-neo-mint transition-colors">
                      {m.q}
                    </h3>
                  </div>
                </div>
                {activeIndex === index ? <ChevronDown className="rotate-180 text-neo-mint transition-transform" /> : <ChevronDown className="text-slate-300 transition-transform" />}
              </button>

              {activeIndex === index && (
                <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-3 duration-500">
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-neo-mint"></div>
                    <small className="font-black text-[10px] text-slate-400 uppercase tracking-widest mb-3 block">Technical Answer:</small>
                    <p className="text-deep-blue font-medium italic">{m.ans}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}