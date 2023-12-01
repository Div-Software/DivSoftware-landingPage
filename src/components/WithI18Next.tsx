import i18n, { type TFunction } from 'i18next';
import { useEffect, useState } from 'react';

interface WithI18nProps {
	t: TFunction;
}

/**
 * Higher-order component that wraps a component with i18n functionality.
 * @template P - The props type of the component being wrapped.
 * @param {React.ComponentType<P>} Component - The component to be wrapped.
 * @returns {React.ComponentType<Omit<P, keyof WithI18nProps>>} - The wrapped component.
 */
export function withI18n<P extends WithI18nProps>(
	Component: React.ComponentType<P>
): React.ComponentType<Omit<P, keyof WithI18nProps>> {
	return (props: Omit<P, keyof WithI18nProps>) => {
		const [isReady, setIsReady] = useState(i18n.isInitialized);

		useEffect(() => {
			if (!isReady) {
				i18n.on('initialized', () => setIsReady(true));
				return () => {
					i18n.off('initialized');
				};
			}
		}, [isReady]);

		if (!isReady) {
			return null; // or a loading spinner, etc.
		}

		return <Component {...(props as P)} t={i18n.t} />;
	};
}
