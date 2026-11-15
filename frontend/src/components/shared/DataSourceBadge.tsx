import { Badge } from '@/components/ui/badge';

type DataSourceBadgeProps = {
    source?: string | null;
};

export function DataSourceBadge({ source }: DataSourceBadgeProps) {
    if (source !== 'mock') return null;

    return (
        <Badge
            variant="outline"
            className="rounded-[var(--radius-sm)] border-dashed border-status-warning px-2 py-[2px] text-[11px] font-bold tracking-[0.08em] text-status-warning"
            title="Dados simulados: a API real está indisponível"
        >
            SIMULADO
        </Badge>
    );
}
