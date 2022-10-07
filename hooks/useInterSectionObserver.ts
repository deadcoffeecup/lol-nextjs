import { MutableRefObject, useEffect } from 'react';

interface IProps {
  elementRef: MutableRefObject<any>;
  onIntersect: () => void;
}

export const useIntersectionObserver = ({
  elementRef,
  onIntersect,
}: IProps) => {
  useEffect(() => {
    const observer = (_div: HTMLDivElement) =>
      new IntersectionObserver(
        (entries) => {
          entries[0].isIntersecting && onIntersect();
        },
        {
          // root,
          // rootMargin: '50px',
          threshold: 0.1,
        }
      );
    const elsChilds = elementRef.current
      ? Array.from(elementRef.current.querySelectorAll(`div`))
      : [];

    elsChilds.forEach((_div: HTMLDivElement) => observer(_div).observe(_div));

    return () => {
      elsChilds.forEach((_div: HTMLDivElement) => observer(_div).disconnect());
    };
  }, [Array.from(elementRef.current?.querySelectorAll(`div`))]);
};
