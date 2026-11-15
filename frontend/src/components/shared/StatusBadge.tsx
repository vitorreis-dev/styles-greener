import { Badge } from '@/components/ui/badge';
import { statusMeta } from '../../utils/status';

const toneStyles: Record<string, string> = {
    good: 'status-good',
    warning: 'status-warning',
    critical: 'status-critical',
    neutral: 'status-neutral',
};

export function StatusBadge({ status }: { status: string }) {
    const meta = statusMeta(status);

    return (
        <Badge
            variant="outline"
            className={`gap-[6px] rounded-full px-[10px] py-[2px] text-sm font-semibold whitespace-nowrap ${
                toneStyles[meta.tone] ?? toneStyles.neutral
            } theme-status`}
        >
            <span aria-hidden="true">{meta.icon}</span>
            {meta.label}
        </Badge>
    );
}
