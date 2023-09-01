import React, { memo, useEffect } from 'react'
import { ArrowUpOutlined } from '@ant-design/icons';
import { Button } from 'antd';
const BackTop = memo(() => {
    useEffect(() => {

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <Button icon={<ArrowUpOutlined />}
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
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
            >
            </Button>
        </div>
    )
})

export default BackTop