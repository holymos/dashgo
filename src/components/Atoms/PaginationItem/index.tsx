type PaginationitemProps = {
  pageNumber: number;
  isCurrent?: boolean;
};

export const PaginationItem: React.FC<PaginationitemProps> = ({
  isCurrent = false,
  pageNumber,
}) => {
  return isCurrent ? (
    <button className="pagination-button active" disabled>
      {pageNumber}
    </button>
  ) : (
    <button className="pagination-button">{pageNumber}</button>
  );
};
