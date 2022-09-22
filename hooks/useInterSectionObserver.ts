import {
  FunctionComponent,
  MutableRefObject,
  RefObject,
  useEffect,
} from 'react';

interface IProps {
  elementRef: MutableRefObject<any>;
}

export const useInterSectionObserver = ({ elementRef }: IProps) => {
  useEffect(() => {
    const elsChilds = elementRef.current
      ? Array.from(elementRef.current.querySelectorAll(`div`))
      : [];

    const observer = (_div: HTMLDivElement) =>
      new IntersectionObserver(
        (entries) => {
          let lastEntry = entries[entries.length - 1];
          console.log(lastEntry);

          if (lastEntry.isIntersecting) {
            console.log(lastEntry);
          }
        },
        {
          // root,
          // rootMargin,
          threshold: 1,
        }
      );

    elsChilds.forEach((_div: HTMLDivElement) => observer(_div).observe(_div));

    return () => {
      elsChilds.forEach((_div: HTMLDivElement) =>
        observer(_div).unobserve(_div)
      );
    };
  }, [elementRef]);
};
