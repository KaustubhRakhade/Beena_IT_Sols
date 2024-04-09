import { useEffect, useState, useContext } from 'react';
import { BlogContext } from '../../App';
import styles from './BlogSelect.module.css';

/*
Examples:

< 1 ... 3 [4] 5 ... 7 >

< [1] 2 3 ... 10 >
< 1 [2] 3 ... 10 >
< 1 2 [3] 4 ... 10 >

< 1 ... 3 [4] 5 ... 10 >
< 1 ... 4 [5] 6 ... 10 >
< 1 ... 5 [6] 7 ... 10 >
< 1 ... 6 [7] 8 ... 10 >

< 1 ... 7 [8] 9 10 >
< 1 ... 7 8 [9] 10 >
< 1 ... 8 9 [10] >

 */

export default function Pagination() {

    const {
        totalPages,
        currentPage, setCurrentPage
    } = useContext(BlogContext);

    const [displayPages, setDisplayPages] = useState([])

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(() => {

        let newDisplayPages = []

        // < 1 2 3 [4] 5 6 7 >
        if (currentPage-1 <= 3 && totalPages-currentPage <= 3) {
            for (let i = 1; i <= totalPages; i++) {
                newDisplayPages.push(i)
            }
        }

        // < 1 2 3 [4] 5 ... 8 >
        else if (currentPage-1 <= 3 && totalPages-currentPage > 3) {
            for (let i = 1; i <= currentPage+1; i++) {
                newDisplayPages.push(i)
            }
            newDisplayPages.push(-1)
            newDisplayPages.push(totalPages)
        }

        // < 1 ... 4 [5] 6 7 8 >
        else if (currentPage-1 > 3 && totalPages-currentPage <= 3) {
            newDisplayPages.push(1)
            newDisplayPages.push(-1)
            for (let i = currentPage-1; i <= totalPages; i++) {
                newDisplayPages.push(i)
            }
        }

       // < 1 ... 4 [5] 6 ... 9 >
        else {
            newDisplayPages = [1, -1, currentPage-1, currentPage, currentPage+1, -1, totalPages]
        }

        setDisplayPages(newDisplayPages)

    }, [currentPage, totalPages])

    const notAllowedStyle = {
        "opacity": "0.5",
        "cursor": "not-allowed"
    }


  return (
    <div className={styles.Pagination}>
        <div className={styles.prevBtn} style={currentPage === 1 ? notAllowedStyle : null} onClick={handlePrev}>
            <span className="material-symbols-outlined">arrow_back</span>
            <span>Prev.</span>
        </div>

        {
            displayPages.map((page, index) => {
                if (page === -1) {
                    return (<span key={index} className={"material-symbols-outlined " + styles.PaginationMore}>more_horiz</span>)
                }
                
                return (
                    <span
                        key={index}
                        className={currentPage === page ? styles.activePage : ""}
                        onClick={() => setCurrentPage(page)} >{page}</span>
                    )
                })
        }

        <div className={styles.nextBtn} style={currentPage === totalPages ? notAllowedStyle : null} onClick={handleNext}>
            <span>Next</span>
            <span className="material-symbols-outlined">arrow_forward</span>
        </div>
    </div>
  )
}
