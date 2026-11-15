import type { ServiceStatus } from '@/types/service';

// O ícone repete a informação da cor, para o estado não depender só dela.
export const statusInfo: Record<
    ServiceStatus,
    { label: string; icon: string; description: string; className: string }
> = {
    available: {
        label: 'Disponível',
        icon: '●',
        description: 'A última coleta do serviço foi bem-sucedida.',
        className: 'theme-status status-good ring-1',
    },
    metrics_missing: {
        label: 'Sem métricas',
        icon: '◐',
        description: 'O serviço foi encontrado, mas não trouxe métricas válidas.',
        className: 'theme-status status-warning ring-1',
    },
    unavailable: {
        label: 'Indisponível',
        icon: '✕',
        description: 'Não foi possível coletar as métricas do serviço.',
        className: 'theme-status status-critical ring-1',
    },
    removed: {
        label: 'Removido',
        icon: '−',
        description: 'Serviço não aparece mais na descoberta.',
        className: 'theme-status status-neutral ring-1',
    },
    unknown: {
        label: 'Desconhecido',
        icon: '?',
        description: 'Estado recebido não é reconhecido pela interface.',
        className: 'theme-status status-neutral ring-1',
    },
};
