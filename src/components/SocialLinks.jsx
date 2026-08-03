import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.socials.github, icon: Github },
  { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.socials.email}`, icon: Mail },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={label === "Email" ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-glow/50 hover:text-cyan-glow hover:shadow-glow-cyan"
        >
          <Icon className="h-4.5 w-4.5" />
        </a>
      ))}
    </div>
  );
}