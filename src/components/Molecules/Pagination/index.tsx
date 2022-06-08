import { PaginationItem } from "../../Atoms";

export const Pagination = () => {
  return (
    <div className="flex mt-8 justify-between items-center">
      <div data-testid="page-ref">
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </div>

      <div className="flex gap-2">
        <PaginationItem pageNumber={1} isCurrent />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
      </div>
    </div>
  );
};
