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
                    <i className="fab fa-youtube"></i>
                    <p className={styles.youtube}>JunTube</p>
                </div>
                <div className={styles.search}>
                    <input ref={inputRef} className={styles.input} type="search" placeholder="search.." onKeyPress={onKeyPress} />
                    <button className={styles.button} type="submit" onClick={onClick}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className={styles.profile}>
                    <i className="fas fa-user-circle"></i>
                </div>
            </header>    
        )
    }
);

export default SearchHeader;