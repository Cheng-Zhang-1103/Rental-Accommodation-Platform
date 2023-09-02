import React, { memo, useEffect, useState } from 'react';
import { ArrowUpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { BackTopWrapper } from './style';

const BackTop = memo(() => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 监听滚动事件
        const handleScroll = () => {
            // 当滚动高度大于等于200时，显示按钮，否则隐藏按钮
            if (window.scrollY >= 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        // 添加滚动事件监听
        window.addEventListener('scroll', handleScroll);
        
         // 清除滚动事件监听
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <BackTopWrapper>
            <div
                className={`back-top-button ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
            >
                <Button
                    icon={<ArrowUpOutlined />}
                    style={{
                        position: 'fixed',
                        fontSize: '14px',
                        bottom: '40px',
                        right: '40px',
                        backgroundColor: '#00848A',
                        color: '#fff',
                        textAlign: 'center',
                        borderRadius: '50%',
                        border: '0px solid',
                    }}
                />
            </div>
        </BackTopWrapper>
    );
});

export default BackTop;
