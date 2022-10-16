import { MutableRefObject, useEffect } from 'react';

interface IProps {
  lastElementRef: MutableRefObject<any>;
  onIntersect: () => void;
}

export const useIntersectionObserver = ({
  lastElementRef,
  onIntersect,
}: IProps) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect()),
      {
        // root,
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    const el = lastElementRef && lastElementRef.current;

    if (!el) return;

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [lastElementRef.current]);
};
