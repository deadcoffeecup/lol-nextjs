import { MutableRefObject, useEffect } from 'react';

interface IProps {
  elementRef: MutableRefObject<any>;
  onIntersect: () => void;
}

export const useIntersectionObserver = ({
  elementRef,
  onIntersect,
}: IProps) => {
  const observer = (_div: HTMLDivElement) =>
    new IntersectionObserver(
      (entries) => {
        entries[entries.length - 1].isIntersecting && onIntersect();
        console.log(entries[0].target);
      },
      {
        // root,
        // rootMargin: '50px',
        threshold: 1,
      }
    );
  useEffect(() => {
    const elsChilds = elementRef.current
      ? Array.from(elementRef.current.querySelectorAll(`div`))
      : [];

    elsChilds.forEach((_div: HTMLDivElement) => observer(_div).observe(_div));

    return () => {
      elsChilds.forEach((_div: HTMLDivElement) => observer(_div).disconnect());
    };
  }, [elementRef.current]);
};
