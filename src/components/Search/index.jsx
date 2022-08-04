import React from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

const Search = () => {
  const [value, setValue] = React.useState('');
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        width="36px"
        height="36px"
        viewBox="0 0 36 36"
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet">
        <ellipse fill="#F5F8FA" cx="8.828" cy="18" rx="7.953" ry="13.281"></ellipse>
        <path
          fill="#E1E8ED"
          d="M8.828 32.031C3.948 32.031.125 25.868.125 18S3.948 3.969 8.828 3.969S17.531 10.132 17.531 18s-3.823 14.031-8.703 14.031zm0-26.562C4.856 5.469 1.625 11.09 1.625 18s3.231 12.531 7.203 12.531S16.031 24.91 16.031 18S12.8 5.469 8.828 5.469z"></path>
        <circle fill="#8899A6" cx="6.594" cy="18" r="4.96"></circle>
        <circle fill="#292F33" cx="6.594" cy="18" r="3.565"></circle>
        <circle fill="#F5F8FA" cx="7.911" cy="15.443" r="1.426"></circle>
        <ellipse fill="#F5F8FA" cx="27.234" cy="18" rx="7.953" ry="13.281"></ellipse>
        <path
          fill="#E1E8ED"
          d="M27.234 32.031c-4.88 0-8.703-6.163-8.703-14.031s3.823-14.031 8.703-14.031S35.938 10.132 35.938 18s-3.824 14.031-8.704 14.031zm0-26.562c-3.972 0-7.203 5.622-7.203 12.531c0 6.91 3.231 12.531 7.203 12.531S34.438 24.91 34.438 18S31.206 5.469 27.234 5.469z"></path>
        <circle fill="#8899A6" cx="25" cy="18" r="4.96"></circle>
        <circle fill="#292F33" cx="25" cy="18" r="3.565"></circle>
        <circle fill="#F5F8FA" cx="26.317" cy="15.443" r="1.426"></circle>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={styles.clearIcon}
          width="18px"
          height="18px"
          viewBox="0 0 18 18">
          <path
            fill="#494c4e"
            d="M17.707 16.29a1 1 0 0 1-1.41 1.42l-7.292-7.29L1.7 17.71a1 1 0 0 1-1.41-1.42L7.585 9 .293 1.712a1.008 1.008 0 0 1 0-1.42 1 1 0 0 1 1.41 0l7.3 7.3 7.292-7.3a1 1 0 0 1 1.41 0 1.008 1.008 0 0 1 0 1.42L10.415 9z"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
