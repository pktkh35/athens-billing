import { useState } from "preact/hooks";
import { Each } from "./Each";
import { classCombine } from "../utils/classCombine";

const List = ({
    className = "athens-list",
    itemClassName = "athens-list-item",
    perPage = 15,
    data = [],
    emptyText,
    onColumnClick,
    content = () => <></>,
    pagination = (currentPage, totalPages, onPageChange, indexOfFirstItem, indexOfLastItem, totalDatas) => <List.Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} indexOfFirstItem={indexOfFirstItem} indexOfLastItem={indexOfLastItem} totalDatas={totalDatas} />
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(perPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const handlePageChange = pageNumber => {
        setCurrentPage(pageNumber);
    };

    const isFunc = (value, ...item) => {
        if (typeof value === "function") {
            return value(...item)
        } else {
            return value
        }
    }

    return <>
        <div className={classCombine(className)}>
            {
                currentItems.length > 0 ? <Each of={currentItems} render={(item, i) => (
                    <div className={classCombine(isFunc(itemClassName, item, i), onColumnClick && "canHover")} onClick={(e) => (onColumnClick && onColumnClick(e, item, i))}>
                        {
                            content(item, i)
                        }
                    </div>
                )} /> : <div className="empty">
                    {emptyText || "ไม่มีข้อมูล"}
                </div>
            }
        </div>
        {
            Math.ceil(data.length / itemsPerPage) > 1 ? pagination(currentPage, Math.ceil(data.length / itemsPerPage), handlePageChange, indexOfFirstItem, indexOfLastItem, data.length) : null
        }
    </>
}

List.Pagination = ({ currentPage, totalPages, onPageChange, indexOfFirstItem, indexOfLastItem, totalDatas }) => {
    const maxPagesToShow = 4;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

    const startPage = Math.max(1, currentPage - halfMaxPagesToShow + 1);
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 2);

    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

    return (
        <div className="athens-pagination">
            <div className="left">
                Showing {indexOfFirstItem+1} to {(indexOfLastItem+1) > totalDatas ? (indexOfLastItem+1)-((indexOfLastItem+1) - totalDatas) : indexOfLastItem+1} of {totalPages} entries
            </div>
            <div className="right">
                {currentPage > 1 && (
                    <span
                        onClick={() => onPageChange(currentPage - 1)}
                        className="btn noBorder"
                    >
                        <div className="fa-light fa-chevron-left"></div>
                    </span>
                )}
                {currentPage > halfMaxPagesToShow && (
                    <span
                        onClick={() => onPageChange(1)}
                        className={classCombine("btn", currentPage === 1 && "active")}
                    >
                        1
                    </span>
                )}
                {currentPage > halfMaxPagesToShow && (
                    <span
                        onClick={() => onPageChange(startPage - 1)}
                        className={classCombine("btn noBorder")}
                    >
                        <span className="notHover">
                            ...
                        </span>
                        <div className="hover">
                            <div className="fa-light fa-chevrons-left"></div>
                        </div>
                    </span>
                )}
                {pageNumbers.map(number => (
                    <span
                        key={number}
                        onClick={() => onPageChange(number)}
                        className={classCombine("btn", currentPage === number && "active")}
                    >
                        {number}
                    </span>
                ))}
                {currentPage <= totalPages - 3 && pageNumbers[pageNumbers.length - 1] <= totalPages - 3 && (
                    <span
                        onClick={() => onPageChange(endPage + 1)}
                        className={classCombine("btn noBorder")}
                    >
                        <span className="notHover">
                            ...
                        </span>
                        <div className="hover">
                            <div className="fa-light fa-chevrons-right"></div>
                        </div>
                    </span>
                )}
                {currentPage <= totalPages - 3 && pageNumbers[pageNumbers.length - 1] <= totalPages - 3 && (
                    <span
                        onClick={() => onPageChange(totalPages)}
                        className={classCombine("btn")}
                    >
                        {totalPages}
                    </span>
                )}
                {currentPage < totalPages && (
                    <span
                        onClick={() => onPageChange(currentPage + 1)}
                        className="btn noBorder"
                    >
                        <div className="fa-light fa-chevron-right"></div>
                    </span>
                )}
            </div>
        </div>
    );
};

export default List