import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { Community } from '@/components/home/community';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'KATHA — Stories, written once. Remembered forever.',
		description: 'An original story collective for blogs, film stories and meaningful conversations. Publish with intention and let your words leave a legacy.',
	});
}

export default function HomePage() {
	return <Community />;
}
