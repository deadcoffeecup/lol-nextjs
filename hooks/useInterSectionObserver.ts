import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';

interface IProps {
  elementRef: MutableRefObject<any>;
  onIntersect: void;
}

export const useIntersectionObserver = ({
  elementRef,
  onIntersect,
}: IProps) => {
  const observer = (_div: HTMLDivElement) =>
    new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && onIntersect),
      {
        // root,
        rootMargin: '10px',
        threshold: 1,
      }
    );
  useEffect(() => {
    const elsChilds = elementRef.current
      ? Array.from(elementRef.current.querySelectorAll(`div`))
      : [];

    elsChilds.forEach((_div: HTMLDivElement) => observer(_div).observe(_div));

    return () => {
      elsChilds.forEach((_div: HTMLDivElement) =>
        observer(_div).unobserve(_div)
      );
    };
  }, [elementRef]);
};
