import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';

interface IProps {
  elementRef: MutableRefObject<any>;
  setChampionsCount: Dispatch<SetStateAction<number>>;
  NUMBER_OF_SHOWED_CHAMPS: number;
}

export const useInterSectionObserver = ({
  elementRef,
  setChampionsCount,
  NUMBER_OF_SHOWED_CHAMPS,
}: IProps) => {
  useEffect(() => {
    const elsChilds = elementRef.current
      ? Array.from(elementRef.current.querySelectorAll(`div`))
      : [];

    const observer = (_div: HTMLDivElement) =>
      new IntersectionObserver(
        (entries) => {
          let lastEntry = entries[entries.length - 1];
          if (!!lastEntry?.isIntersecting) {
            setChampionsCount((prev) => prev + NUMBER_OF_SHOWED_CHAMPS);
            console.log(lastEntry.target);
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
