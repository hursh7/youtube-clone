import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(
    ({ onSearch }) => {
        const inputRef = useRef();
        const handleSearch =  () => {
            const value = inputRef.current.value;
            onSearch(value);
        };
    
        const onClick = () => {
            handleSearch();
        };
    
        const onKeyPress = event => {
            if(event.key === 'Enter' ) {
                handleSearch();
            }
        };
        return (
            <header className={styles.header}>
                <div className={styles.ci}>
                    <img className={styles.logo} src="/images/logo.png" alt="로고" />
                    <p className={styles.youtube}>YouTube</p>
                </div>
                <div className={styles.search}>
                    <input ref={inputRef} className={styles.input} type="search" placeholder="search.." onKeyPress={onKeyPress} />
                    <button className={styles.button} type="submit" onClick={onClick}>
                        <img className={styles.img} src="/images/search.png" alt="검색버튼" />
                    </button>
                </div>
            </header>    
        )
    }
);

export default SearchHeader;