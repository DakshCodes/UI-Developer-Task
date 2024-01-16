import React, { useState } from 'react';
import Slider from '../Slider/Slider';

const SearchTab = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className='search-tab-main'>
            <h2 className='head-search'>Last 7 days popular search</h2>
            <div className='selecte-tabs'>
                <div className='tab-head'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((tabNumber) => (
                        <React.Fragment key={tabNumber}>
                            <input
                                type='radio'
                                id={`tabToggle0${tabNumber}`}
                                name='tabs'
                                defaultValue={tabNumber}
                                checked={activeTab === tabNumber}
                                onChange={() => handleTabChange(tabNumber)}
                            />
                            <label htmlFor={`tabToggle0${tabNumber}`}>
                                {tabNumber === 1 && 'All'}
                                {tabNumber === 2 && 'Music'}
                                {tabNumber === 3 && '3D Abstract'}
                                {tabNumber === 4 && 'Game'}
                                {tabNumber === 5 && 'Sports'}
                                {tabNumber === 6 && 'Cartoon'}
                                {tabNumber === 7 && 'Virtual World'}
                                {tabNumber === 8 && 'Classic'}
                            </label>
                        </React.Fragment>
                    ))}
                </div>
                <div className='tab-content'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((tabNumber) => (
                        <div
                            key={tabNumber}
                            className={`tab-content ${activeTab === tabNumber ? 'active' : ''}`}
                        >
                            <Slider />
                            <Slider />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchTab;
