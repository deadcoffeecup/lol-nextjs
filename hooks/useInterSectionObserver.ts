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
    const elsChilds = lastElementRef.current
      ? Array.from(lastElementRef.current.querySelectorAll(`div`))
      : [];

    elsChilds.forEach((_div: HTMLDivElement) => observer(_div).observe(_div));

    return () => {
      elsChilds.forEach((_div: HTMLDivElement) => observer(_div).disconnect());
    };
  }, [Array.from(lastElementRef.current?.querySelectorAll(`div`))]);
};
