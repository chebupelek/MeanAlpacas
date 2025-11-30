import { Route, Routes, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from 'antd';

import Human from '../Man/man';

function Base() {
    const location = useLocation();

    useEffect(() => {
        console.log('Navigating to:', location.pathname);
    }, [location]);

    return (
        <Layout.Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Routes>
                <Route path="/man" element={<Human />} />
                <Route path="*" element={<Navigate to="/man" replace />} />
            </Routes>
        </Layout.Content>
    );
}

export default Base;
