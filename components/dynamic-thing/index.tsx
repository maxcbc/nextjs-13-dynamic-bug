import dynamic from 'next/dynamic'
export const MyDynamicComponent = dynamic(() => import('./some-client-side-only-component'), {ssr: false})

