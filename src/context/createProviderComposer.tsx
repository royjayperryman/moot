import React, { ReactNode } from 'react';

type ProviderProps = {
    children: ReactNode;
};

type ProviderComponent = React.ComponentType<ProviderProps>;

export const createProviderComposer = (providers: ProviderComponent[]) => {
    return function ProviderComposer({ children }: { children: ReactNode }) {
        return providers.reduceRight((acc, Provider) => {
            return <Provider>{acc}</Provider>;
        }, children);
    };
};
