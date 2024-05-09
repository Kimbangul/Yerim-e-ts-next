import dynamic from 'next/dynamic';

export { default as Header } from '@/component/layout/header/HeaderContainer';
export { default as Main } from '@/component/layout/main/MainContainer';
export const About = dynamic(() => import('@/component/layout/about/AboutContainer'));
// export { default as About } from '@/component/layout/about/AboutContainer';
export const Tech = dynamic(() => import('@/component/layout/tech/TechContainer'));
// export { default as Tech } from '@/component/layout/tech/TechContainer';
export { default as Footer } from '@/component/layout/footer/FooterContainer';
// export { default as Contact } from '@/component/layout/contact/ContactContainer';
export const Contact = dynamic(() => import('@/component/layout/contact/ContactContainer'));
// export { default as Post } from '@/component/layout/post/PostContainer';
export const Post = dynamic(() => import('@/component/layout/post/PostContainer'));
// export { default as Design } from '@/component/layout/design/DesignContainer';
export const Design = dynamic(() => import('@/component/layout/design/DesignContainer'));
// export { default as Work } from '@/component/layout/work/WorkContainer';
export const Work = dynamic(() => import('@/component/layout/work/WorkContainer'));
export const Modal = dynamic(() => import('@/component/common/modal/ModalContainer'));
export { default as Custom404 } from '@/component/layout/404/404View';
