import { statusMeta, type StatusMeta } from './status';

const TONE_STYLE: Record<StatusMeta['tone'], { color: string; badge: string }> = {
    good: { color: 'var(--status-good)', badge: 'theme-status status-good' },
    warning: { color: 'var(--status-warning)', badge: 'theme-status status-warning' },
    critical: { color: 'var(--status-critical)', badge: 'theme-status status-critical' },
    neutral: { color: 'var(--status-neutral)', badge: 'theme-status status-neutral' },
};

export function statusStyle(status: string) {
    return TONE_STYLE[statusMeta(status).tone];
}
