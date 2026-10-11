import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Github,
  Layout,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Server,
  Sparkles,
  Target,
  X,
  AlertCircle,
  Loader2,
} from 'lucide-react'

/**
 * Small explicit icon registry. Keeping the map explicit (instead of a dynamic
 * `import *`) keeps the bundle tree-shakeable and avoids pulling in all of
 * lucide-react.
 */
const registry = {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  GraduationCap,
  Github,
  Layout,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  Server,
  Sparkles,
  Target,
  X,
  AlertCircle,
  Loader2,
}

export function Icon({ name, size = 18, strokeWidth = 1.75, className, ...rest }) {
  const Cmp = registry[name]
  if (!Cmp) return null
  return (
    <Cmp
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    />
  )
}
