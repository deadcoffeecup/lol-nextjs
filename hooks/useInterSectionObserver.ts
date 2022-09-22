import { RefObject, useEffect } from 'react';

interface IProps {
  elementRef: RefObject<HTMLDivElement>;
  className: string;
}

export const useInterSectionObserver = ({ elementRef, className }: IProps) => {
  useEffect(() => {
    const elsChilds = elementRef.current
      ? Array.from(elementRef.current.querySelectorAll(`.${className}`))
      : [];

    const observer = (_div: HTMLDivElement) =>
      new IntersectionObserver(
        (entries) => {
          const lastEntry = entries[entries.length - 1];
          if (lastEntry.isIntersecting) {
            //What to do
          }
        },
        {
          // root,
          // rootMargin,
          threshold: 1,
        }
      );

    return () => {
      elsChilds.forEach((_div: HTMLDivElement) =>
        observer(_div).unobserve(_div)
      );
    };
  }, [elementRef]);
};
