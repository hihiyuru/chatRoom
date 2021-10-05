import React, { useState } from 'react';
import styles from './styles.module.scss';
import Header from './components/Header';
import ViewChart from './components/ViewChart';
import InputArea from './components/InputArea';

const TestPage = () => {
    const [viewChartHeight, setViewChartHeight] = useState(47);

    return (
        <div className={styles.root}>
            {/* 佔高 64px */}
            <Header></Header>

            {/* 佔高 = 100vh - Header - InputArea */}
            <ViewChart inputAreaHeight={viewChartHeight}></ViewChart>

            {/* 佔高47 (min) */}
            <InputArea setHeight={setViewChartHeight}></InputArea>
            
        </div>
    )
}

export default TestPage;